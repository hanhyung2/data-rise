import { useState } from 'react';

import {
  format,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  eachDayOfInterval,
  subMonths,
  addMonths,
  getDay,
  isAfter,
  isBefore,
} from 'date-fns';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { Text } from '@/components/common';

import { useCalendarContext } from './Calendar.context.ts';
import * as S from './Calendar.styled.ts';
import { WEEKS } from '@/components/common/Calendar/Calendar.constants.ts';

const CalendarPopover = () => {
  const { startDate, setStartDate, endDate, setEndDate, close } = useCalendarContext();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, currentMonth] = format(currentDate, 'yyyy-MM').split('-');

  const startCurrentMonth = startOfMonth(currentDate);
  const endCurrentMonth = endOfMonth(currentDate);
  const startOfFirstWeek = startOfWeek(startCurrentMonth, { weekStartsOn: 0 });
  const endOfLastWeek = endOfWeek(endCurrentMonth, { weekStartsOn: 0 });

  const days = eachDayOfInterval({
    start: startOfFirstWeek,
    end: endOfLastWeek,
  });

  const daysInMonth = days.map((day) => ({
    date: format(day, 'yyyy-MM-dd'),
    year: format(day, 'yyyy'),
    month: format(day, 'MM'),
    day: format(day, 'dd'),
    dayIndexOfWeek: getDay(day),
  }));

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  const handleResetButtonClick = () => {
    setStartDate(null);
    setEndDate(null);
    close();
  };

  const handleSelectDate = (date: string) => {
    if (startDate && endDate) {
      setStartDate(new Date(date));
      setEndDate(null);

      return;
    }

    if (startDate && isBefore(new Date(date), startDate)) {
      setStartDate(new Date(date));
      setEndDate(startDate);

      return;
    }

    if (!startDate) {
      setStartDate(new Date(date));

      return;
    }

    setEndDate(new Date(date));
  };

  return (
    <S.CalendarPopover>
      <S.CalendarHeader>
        <S.CalendarMoveButton onClick={handlePrevMonth}>
          <AiOutlineLeft size={14} />
        </S.CalendarMoveButton>
        <Text as='h4' variant='heading'>
          {currentYear}년 {currentMonth}월
        </Text>
        <S.CalendarMoveButton onClick={handleNextMonth}>
          <AiOutlineRight size={14} />
        </S.CalendarMoveButton>
      </S.CalendarHeader>
      <S.DayWrapper>
        {WEEKS.map((week, index) => (
          <S.CalendarItem $isSunday={index === 0} key={week}>
            {week}
          </S.CalendarItem>
        ))}
        {daysInMonth.map((date) => {
          const isSameStartDate = startDate && format(startDate, 'yyyy-MM-dd') === date.date;
          const isSameEndDate = endDate && format(endDate, 'yyyy-MM-dd') === date.date;

          const isAfterStartDate = startDate && isAfter(new Date(date.date), startDate);
          const isBeforeEndDate = endDate && isBefore(new Date(date.date), endDate);

          return (
            <S.CalendarItem
              key={date.date}
              onClick={() => handleSelectDate(date.date)}
              $isSelectedDate={isSameStartDate || isSameEndDate}
              $isRange={isAfterStartDate && isBeforeEndDate}
              $isSunday={date.dayIndexOfWeek === 0}
            >
              <Text variant='body'>{date.day}</Text>
            </S.CalendarItem>
          );
        })}
      </S.DayWrapper>
      <S.CalendarPopoverFooter>
        <S.ResetButton onClick={handleResetButtonClick}>초기화</S.ResetButton>
      </S.CalendarPopoverFooter>
    </S.CalendarPopover>
  );
};

export default CalendarPopover;
