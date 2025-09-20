import React from "react";
import "./panel.css";
import { WorkoutContainer } from "../workout-container";
import { useDroppable } from "@dnd-kit/core";
import { WORKOUT_DROPZONE_ID, WORKOUT_DND_EVENT } from "../../constants";
import {
  EDaysOfWeek,
  type IDateRecord,
  type IWorkoutDropData,
} from "../../types";
import { useCheckWeekDates } from "../../hooks";
import { useDateRecords } from "../../context";

interface IDayColumnProps {
  dateRecord: IDateRecord;
}

const DayColumn: React.FC<IDayColumnProps> = ({ dateRecord }) => {
  const { getCurrentDayOfWeek, getDateNumber } = useCheckWeekDates();

  const { setNodeRef } = useDroppable({
    id: `${WORKOUT_DROPZONE_ID}-${dateRecord.day}`,
    data: {
      eventType: WORKOUT_DND_EVENT,
      dayOfWeek: dateRecord.day,
    } as IWorkoutDropData,
  });

  return (
    <div className="panel-day-column">
      <div className="panel-day-header">
        <span
          className={`panel-day-name ${
            dateRecord.day === getCurrentDayOfWeek()
              ? "panel-day-name-today"
              : ""
          }`}
        >
          {dateRecord.day}
        </span>
      </div>
      <div className="panel-container">
        <div className="panel-container-header">
          <span
            className={`panel-container-header-date ${
              dateRecord.day === getCurrentDayOfWeek()
                ? "panel-day-name-today"
                : ""
            }`}
          >
            {getDateNumber(dateRecord.day as EDaysOfWeek)}
          </span>
          <button className="panel-container-header-btn">
            <span>+</span>
          </button>
        </div>
        <div className="panel-container-body" ref={setNodeRef}>
          {dateRecord.workouts.map((workout) => (
            <WorkoutContainer
              key={workout.id}
              dayOfWeek={dateRecord.day as EDaysOfWeek}
              workoutRecord={workout}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Panel: React.FC = () => {
  const { dateRecords } = useDateRecords();

  return (
    <div className="panel">
      <div className="panel-week-grid">
        {Object.values(dateRecords).map((dateRecord) => (
          <DayColumn key={dateRecord.day} dateRecord={dateRecord} />
        ))}
      </div>
    </div>
  );
};
