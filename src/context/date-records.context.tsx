import React, { useCallback, useState, type ReactNode } from "react";
import {
  EDaysOfWeek,
  type IDateRecord,
  type IExercise,
  type IWorkoutRecord,
} from "../types";
import { DEFAULT_MOCK_DATA } from "./date-records.mock";
import { type IDateRecordsContextValue } from "./date-records.type";
import { DateRecordsContext } from "./date-records.hook";

interface IDateRecordsProviderProps {
  children: ReactNode;
}

export const DateRecordsProvider: React.FC<IDateRecordsProviderProps> = ({
  children,
}) => {
  const [dateRecords, setDateRecords] =
    useState<Record<EDaysOfWeek, IDateRecord>>(DEFAULT_MOCK_DATA);

  const addWorkoutRecordToDateRecord = useCallback(
    (dayOfWeek: EDaysOfWeek, workoutRecord: IWorkoutRecord) => {
      setDateRecords((prev) => ({
        ...prev,
        [dayOfWeek]: {
          ...prev[dayOfWeek],
          workouts: [...prev[dayOfWeek].workouts, workoutRecord],
        },
      }));
    },
    []
  );

  const moveWorkoutRecordToDateRecord = useCallback(
    (
      fromDayOfWeek: EDaysOfWeek,
      toDayOfWeek: EDaysOfWeek,
      workoutRecord: IWorkoutRecord
    ) => {
      if (fromDayOfWeek === toDayOfWeek) return;

      const newFromWorkoutRecords = dateRecords[fromDayOfWeek].workouts.filter(
        (workout) => workout.id !== workoutRecord.id
      );
      const newToWorkoutRecords = [
        ...dateRecords[toDayOfWeek].workouts,
        workoutRecord,
      ];

      setDateRecords((prev) => ({
        ...prev,
        [fromDayOfWeek]: {
          ...prev[fromDayOfWeek],
          workouts: newFromWorkoutRecords,
        },
        [toDayOfWeek]: {
          ...prev[toDayOfWeek],
          workouts: newToWorkoutRecords,
        },
      }));
    },
    [dateRecords]
  );

  const addExerciseToWorkoutRecord = useCallback(
    (
      dayOfWeek: EDaysOfWeek,
      workoutRecordId: IWorkoutRecord["id"],
      exercise: IExercise
    ) => {
      const targetWorkoutRecord = dateRecords[dayOfWeek].workouts.find(
        (workout) => workout.id === workoutRecordId
      );
      const newWorkoutRecord = {
        ...targetWorkoutRecord,
        exercises: [...(targetWorkoutRecord?.exercises ?? []), exercise],
      };

      setDateRecords((prev) => ({
        ...prev,
        [dayOfWeek]: {
          ...prev[dayOfWeek],
          workouts: [...prev[dayOfWeek].workouts, newWorkoutRecord],
        },
      }));
    },
    [dateRecords]
  );

  const moveExerciseRecordToWorkoutRecord = (
    fromDayOfWeek: EDaysOfWeek,
    fromWorkoutRecordId: IWorkoutRecord["id"],
    toDayOfWeek: EDaysOfWeek,
    toWorkoutRecordId: IWorkoutRecord["id"],
    exercise: IExercise
  ) => {
    if (
      fromDayOfWeek === toDayOfWeek &&
      fromWorkoutRecordId === toWorkoutRecordId
    ) {
      return;
    }

    const fromWorkoutRecord = (dateRecords[fromDayOfWeek].workouts.find(
      (workout) => workout.id === fromWorkoutRecordId
    ) ?? {}) as IWorkoutRecord;

    fromWorkoutRecord.exercises = fromWorkoutRecord.exercises.filter(
      (exer) => exer.id !== exercise.id
    );

    const indexOfFromWorkoutRecord = dateRecords[
      fromDayOfWeek
    ].workouts.findIndex((workout) => workout.id === fromWorkoutRecordId);

    const newFromWorkouts = [...dateRecords[fromDayOfWeek].workouts];
    newFromWorkouts[indexOfFromWorkoutRecord] = fromWorkoutRecord;

    const toWorkoutRecord = (dateRecords[toDayOfWeek].workouts.find(
      (workout) => workout.id === toWorkoutRecordId
    ) ?? {}) as IWorkoutRecord;

    toWorkoutRecord.exercises = [
      ...(toWorkoutRecord.exercises ?? []),
      exercise,
    ];

    const indexOfToWorkoutRecord = dateRecords[toDayOfWeek].workouts.findIndex(
      (workout) => workout.id === toWorkoutRecordId
    );

    const newToWorkouts = [...dateRecords[toDayOfWeek].workouts];
    newToWorkouts[indexOfToWorkoutRecord] = toWorkoutRecord;

    setDateRecords((prev) => ({
      ...prev,
      [fromDayOfWeek]: {
        ...prev[fromDayOfWeek],
        workouts: newFromWorkouts,
      },
      [toDayOfWeek]: {
        ...prev[toDayOfWeek],
        workouts: newToWorkouts,
      },
    }));
  };

  const value: IDateRecordsContextValue = {
    dateRecords,
    addWorkoutRecordToDateRecord,
    addExerciseToWorkoutRecord,
    moveWorkoutRecordToDateRecord,
    moveExerciseRecordToWorkoutRecord,
  };

  return (
    <DateRecordsContext.Provider value={value}>
      {children}
    </DateRecordsContext.Provider>
  );
};
