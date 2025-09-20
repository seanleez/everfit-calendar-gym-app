import type { EDaysOfWeek } from "./date.type";
import type { IExercise } from "./exercise.type";

export interface IWorkoutRecord {
  id: string;
  name: string;
  exercises: IExercise[];
}

export interface IWorkoutDropData {
  eventType: string | undefined;
  dayOfWeek: EDaysOfWeek | undefined;
}

export interface IWorkoutDragData extends IWorkoutDropData {
  workoutRecord: IWorkoutRecord;
}
