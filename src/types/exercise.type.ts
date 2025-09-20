import type { EDaysOfWeek } from "./date.type";

export interface IExercise {
  id: string;
  name: string;
  sets: IExerciseSet[];
}

export interface IExerciseSet {
  weight: number;
  reps: number;
}

export interface IExerciseDropData {
  eventType: string | undefined;
  dayOfWeek: EDaysOfWeek | undefined;
  toWorkoutRecordId: string | undefined;
}

export interface IExerciseDragData
  extends Omit<IExerciseDropData, "toWorkoutRecordId"> {
  fromWorkoutRecordId: string | undefined;
  exercise: IExercise | undefined;
}
