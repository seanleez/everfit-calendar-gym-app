import type { IWorkoutRecord } from "./workout.type";

export enum EDaysOfWeek {
  MON = "MON",
  TUE = "TUE",
  WED = "WED",
  THU = "THU",
  FRI = "FRI",
  SAT = "SAT",
  SUN = "SUN",
}

export interface IDateRecord {
  day: string;
  workouts: IWorkoutRecord[];
}
