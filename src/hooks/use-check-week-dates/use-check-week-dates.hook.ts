import { useCallback } from "react";
import { EDaysOfWeek } from "../../types";

export const DAYS_OF_WEEK_ORDER: EDaysOfWeek[] = [
  EDaysOfWeek.MON,
  EDaysOfWeek.TUE,
  EDaysOfWeek.WED,
  EDaysOfWeek.THU,
  EDaysOfWeek.FRI,
  EDaysOfWeek.SAT,
  EDaysOfWeek.SUN,
];

export const useCheckWeekDates = () => {
  const getCurrentDayOfWeek = useCallback((): EDaysOfWeek => {
    const today = new Date();
    // 0 = Sunday, 1 = Monday, etc.
    const dayIndex = today.getDay();
    // Convert Sunday (0) to 6, and shift other days accordingly for Monday-first week
    const mondayFirstIndex = dayIndex === 0 ? 6 : dayIndex - 1;
    return DAYS_OF_WEEK_ORDER[mondayFirstIndex];
  }, []);

  const getDateNumber = useCallback((dayOfWeek: EDaysOfWeek): number => {
    const today = new Date();

    // Find the index of the provided day of week
    const targetDayIndex = DAYS_OF_WEEK_ORDER.indexOf(dayOfWeek);

    // Calculate the date for the specific day of week (Monday-first week)
    const targetDate = new Date(today);
    const currentDayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const mondayFirstCurrentIndex =
      currentDayIndex === 0 ? 6 : currentDayIndex - 1;
    targetDate.setDate(
      today.getDate() - mondayFirstCurrentIndex + targetDayIndex
    );

    return targetDate.getDate(); // Returns the day of the month (1-31)
  }, []);

  return { getCurrentDayOfWeek, getDateNumber };
};
