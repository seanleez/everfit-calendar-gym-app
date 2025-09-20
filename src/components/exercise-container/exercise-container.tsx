import React, { useMemo } from "react";
import "./exercise-container.css";
import type { EDaysOfWeek, IExercise, IExerciseDragData } from "../../types";
import { useDraggable } from "@dnd-kit/core";
import { EXERCISE_DND_EVENT } from "../../constants";

interface IExerciseContainer {
  dayOfWeek: EDaysOfWeek;
  workoutRecordId: string;
  exercise: IExercise;
}

export const ExerciseContainer: React.FC<IExerciseContainer> = ({
  dayOfWeek,
  workoutRecordId,
  exercise,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef: setNodeDragRef,
    transform,
  } = useDraggable({
    id: exercise.id || exercise.name,
    data: {
      eventType: EXERCISE_DND_EVENT,
      dayOfWeek,
      fromWorkoutRecordId: workoutRecordId,
      exercise,
    } as IExerciseDragData,
  });

  const formatSets = useMemo(() => {
    return exercise.sets
      .map((set) => `${set.weight} lb x ${set.reps}`)
      .join(", ");
  }, [exercise.sets]);

  return (
    <div
      className="exercise-container"
      ref={setNodeDragRef}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      }}
      {...listeners}
      {...attributes}
    >
      <h4 className="exercise-name">{exercise.name}</h4>

      <div className="exercise-sets">
        <span className="exercise-sets-count">{`x${exercise.sets.length}`}</span>
        <span className="exercise-sets-info">{formatSets}</span>
      </div>
    </div>
  );
};
