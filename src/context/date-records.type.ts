import type {
  EDaysOfWeek,
  IDateRecord,
  IExercise,
  IWorkoutRecord,
} from "../types";

export interface IDateRecordsContextValue {
  dateRecords: Record<EDaysOfWeek, IDateRecord>;

  addWorkoutRecordToDateRecord: (
    dayOfWeek: EDaysOfWeek,
    workoutRecord: IWorkoutRecord
  ) => void;

  moveWorkoutRecordToDateRecord: (
    fromDayOfWeek: EDaysOfWeek,
    toDayOfWeek: EDaysOfWeek,
    workoutRecord: IWorkoutRecord
  ) => void;

  addExerciseToWorkoutRecord: (
    dayOfWeek: EDaysOfWeek,
    workoutRecordId: IWorkoutRecord["id"],
    exercise: IExercise
  ) => void;

  moveExerciseRecordToWorkoutRecord: (
    fromDayOfWeek: EDaysOfWeek,
    fromWorkoutRecordId: IWorkoutRecord["id"],
    toDayOfWeek: EDaysOfWeek,
    toWorkoutRecordId: IWorkoutRecord["id"],
    exercise: IExercise
  ) => void;
}
