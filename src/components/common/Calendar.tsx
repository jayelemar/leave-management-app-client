import { FC } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { CalendarProps } from '@/types/calendarTypes';

const Calendar: FC<CalendarProps> = ({ start, end, title }) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  return (
    <section>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          {
            title: title,
            start: startDate,
            end: endDate,
          },
        ]}
      />
    </section>
  );
};

export default Calendar;
