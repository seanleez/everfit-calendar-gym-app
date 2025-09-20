import { EDaysOfWeek, type IDateRecord } from "../types";

export const DEFAULT_MOCK_DATA: Record<EDaysOfWeek, IDateRecord> = {
  [EDaysOfWeek.MON]: {
    day: "MON",
    workouts: [],
  },
  [EDaysOfWeek.TUE]: {
    day: "TUE",
    workouts: [
      {
        id: "workout-1",
        name: "CHEST DAY - WITH ARM",
        exercises: [
          {
            id: "exercise-1",
            name: "Bench Press Meds",
            sets: [
              { weight: 50, reps: 5 },
              { weight: 60, reps: 5 },
              { weight: 70, reps: 5 },
            ],
          },
          {
            id: "exercise-2",
            name: "Exercise B",
            sets: [{ weight: 40, reps: 10 }],
          },
        ],
      },
    ],
  },
  [EDaysOfWeek.WED]: {
    day: "WED",
    workouts: [
      {
        id: "workout-2",
        name: "LEG DAY",
        exercises: [
          {
            id: "exercise-3",
            name: "Exercise C",
            sets: [{ weight: 30, reps: 6 }],
          },
          {
            id: "exercise-4",
            name: "Exercise D",
            sets: [{ weight: 40, reps: 5 }],
          },
          {
            id: "exercise-5",
            name: "Exercise E",
            sets: [{ weight: 50, reps: 5 }],
          },
        ],
      },
      {
        id: "workout-3",
        name: "ARM DAY",
        exercises: [
          {
            id: "exercise-6",
            name: "Exercise F",
            sets: [{ weight: 60, reps: 6 }],
          },
        ],
      },
    ],
  },
  [EDaysOfWeek.THU]: {
    day: "THU",
    workouts: [],
  },
  [EDaysOfWeek.FRI]: {
    day: "FRI",
    workouts: [],
  },
  [EDaysOfWeek.SAT]: {
    day: "SAT",
    workouts: [],
  },
  [EDaysOfWeek.SUN]: {
    day: "SUN",
    workouts: [],
  },
};
