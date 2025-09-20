import type { DragEndEvent } from "@dnd-kit/core";
import { EXERCISE_DROPZONE_ID, WORKOUT_DROPZONE_ID } from "../../constants";
import { useDateRecords } from "../../context";
import type {
  IExerciseDragData,
  IExerciseDropData,
  IWorkoutDragData,
  IWorkoutDropData,
} from "../../types";

export const useHandleDnd = () => {
  const { moveWorkoutRecordToDateRecord, moveExerciseRecordToWorkoutRecord } =
    useDateRecords();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over) {
      if (String(over.id).startsWith(WORKOUT_DROPZONE_ID)) {
        const draggedData = active.data.current as IWorkoutDragData;
        const dropZoneData = over?.data.current as IWorkoutDropData;

        if (
          draggedData?.dayOfWeek &&
          dropZoneData?.dayOfWeek &&
          draggedData?.workoutRecord
        ) {
          moveWorkoutRecordToDateRecord(
            draggedData.dayOfWeek,
            dropZoneData.dayOfWeek,
            draggedData.workoutRecord
          );
        }
      }

      if (String(over.id).startsWith(EXERCISE_DROPZONE_ID)) {
        const draggedData = active.data.current as IExerciseDragData;
        const dropZoneData = over?.data.current as IExerciseDropData;

        if (
          draggedData?.dayOfWeek &&
          draggedData?.fromWorkoutRecordId &&
          dropZoneData?.dayOfWeek &&
          dropZoneData?.toWorkoutRecordId &&
          draggedData?.exercise
        ) {
          moveExerciseRecordToWorkoutRecord(
            draggedData.dayOfWeek,
            draggedData.fromWorkoutRecordId,
            dropZoneData.dayOfWeek,
            dropZoneData.toWorkoutRecordId,
            draggedData.exercise
          );
        }
      }
    }
  };

  return { handleDragEnd };
};
