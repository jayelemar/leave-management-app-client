import { FC } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { CalendarProps } from '@/types/calendarTypes';

const Calendar: FC<CalendarProps> = ({ events }) => {
  const startDate = new Date(start);
  const endDate = new Date(end);


  return (
 
      <FullCalendar
        expandRows
        height={500}
        aspectRatio={4}
        handleWindowResize={true}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={ events }
      />

  );
};

export default Calendar;
