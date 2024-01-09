import { FC, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { CalendarProps } from '@/types/calendarTypes';
import StartDate from './StartDate';
import EndDate from './EndDate';
import ReasonTextbox from './ReasonTextbox';
import InputDuration from './InputDuration';
import ContactDetail from './ContactDetail';
import SelectLeaveType from './SelectLeaveType';

const Calendar: FC<CalendarProps> = ({ start, end, title }) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const [selectedValue, setSelectedValue] = useState<string>(''); // Explicitly specify the type

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

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
      <div className="">
        <SelectLeaveType value={selectedValue} onChange={handleChange} />
        <StartDate />
        <EndDate />
        <ReasonTextbox />
        <InputDuration />
      </div>
      <div>
        <ContactDetail />
      </div>
    </section>
  );
};

export default Calendar;
