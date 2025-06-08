import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { format } from 'date-fns';

import * as S from './Calendar.styled.ts';
import { Text } from '@/components/common';
import { AiOutlineArrowDown } from 'react-icons/ai';

import { useBooleanState } from '@/hooks';

import CalendarPopover from './CalendarPopover.tsx';

import { CalendarContext } from './Calendar.context.ts';

interface CalendarSelectProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
}

const Calendar = ({ startDate, endDate, setStartDate, setEndDate }: CalendarSelectProps) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  const [isOpen, , close, toggle] = useBooleanState(false);

  const displayDate = (() => {
    if (startDate && endDate) {
      return `${format(startDate, 'yyyy-MM-dd')} ~ ${format(endDate, 'yyyy-MM-dd')}`;
    }

    if (startDate) {
      return `${format(startDate, 'yyyy-MM-dd')}`;
    }

    if (endDate) {
      return `${format(endDate, 'yyyy-MM-dd')}`;
    }

    return '전체 기간';
  })();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        console.log(event.target);

        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.CalendarWrapper ref={calendarRef}>
      <CalendarContext.Provider value={{ startDate, endDate, setStartDate, setEndDate, close }}>
        <S.CalendarButton onClick={toggle}>
          <Text variant='body'>{displayDate}</Text>
          <AiOutlineArrowDown size={20} />
        </S.CalendarButton>
        {isOpen && <CalendarPopover />}
      </CalendarContext.Provider>
    </S.CalendarWrapper>
  );
};

export default Calendar;
