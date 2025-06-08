import { createContext, useContext, Dispatch, SetStateAction } from 'react';

type CalendarContextType = {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
  close: () => void;
};

export const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error('useCustomerTableContext must be used within a CustomerTableProvider');
  }

  return context;
};
