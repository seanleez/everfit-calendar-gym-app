import { createContext, useContext } from "react";
import { type IDateRecordsContextValue } from "./date-records.type";

export const DateRecordsContext = createContext<
  IDateRecordsContextValue | undefined
>(undefined);

export const useDateRecords = (): IDateRecordsContextValue => {
  const context = useContext(DateRecordsContext);
  if (context === undefined) {
    throw new Error("useDateRecords must be used within DateRecordsProvider");
  }
  return context;
};
