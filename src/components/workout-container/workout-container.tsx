import React from "react";
import "./workout-container.css";
import { ExerciseContainer } from "../exercise-container";
import type {
  EDaysOfWeek,
  IExerciseDropData,
  IWorkoutDragData,
  IWorkoutRecord,
} from "../../types";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import {
  EXERCISE_DND_EVENT,
  EXERCISE_DROPZONE_ID,
  WORKOUT_DND_EVENT,
} from "../../constants";

interface IWorkoutContainerProps {
  dayOfWeek: EDaysOfWeek;
  workoutRecord: IWorkoutRecord;
}

export const WorkoutContainer: React.FC<IWorkoutContainerProps> = ({
  dayOfWeek,
  workoutRecord,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef: setNodeDragRef,
    transform,
  } = useDraggable({
    id: workoutRecord.id || workoutRecord.name,
    data: {
      eventType: WORKOUT_DND_EVENT,
      dayOfWeek,
      workoutRecord,
    } as IWorkoutDragData,
  });

  const { setNodeRef: setNodeDropRef } = useDroppable({
    id: `${EXERCISE_DROPZONE_ID}-${dayOfWeek}-${workoutRecord.id}`,
    data: {
      eventType: EXERCISE_DND_EVENT,
      dayOfWeek,
      toWorkoutRecordId: workoutRecord.id,
    } as IExerciseDropData,
  });

  return (
    <div
      className="workout-container"
      ref={setNodeDragRef}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      }}
      {...listeners}
      {...attributes}
    >
      <div className="workout-header">
        <h3 className="workout-header-name">{workoutRecord.name}</h3>
        <button className="workout-actions-menu">⋯</button>
      </div>
      <div className="exercises-list" ref={setNodeDropRef}>
        {workoutRecord.exercises.map((exercise) => (
          <ExerciseContainer
            key={exercise.id}
            dayOfWeek={dayOfWeek}
            workoutRecordId={workoutRecord.id}
            exercise={exercise}
          />
        ))}
      </div>

      <button className="workout-actions-btn">
        <span>+</span>
      </button>
    </div>
  );
};
