import { FC } from 'react';
import FullCalendar  from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Events } from '@/types/calendarTypes';
import { CalendarOptions } from 'fullcalendar';
import { Card } from '@/components/ui/card';

const Calendar: FC<Events> = ({ events }) => {
  const eventContent = (arg: any) => {
    return <div className="bg-blue-500 text-white flex justify-start items-center rounded px-1 overflow-hidden">{arg.event.title}</div>;
  };

  const calendarOptions: CalendarOptions = {
    expandRows: true,
    height: 'auto',
    aspectRatio: 2,
    handleWindowResize: true,
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: events,
    displayEventTime: false,
    eventContent: eventContent,
    eventClassNames: 'flex justify-start xs:justify-center  bg-blue-500 border-none py-0 overflow-hidden  text-start',
    headerToolbar: {
      start: 'title',
      center: '',
      end: 'prev,next'
    },
    contentHeight: 'auto',

    
  };

  return (
    <Card className='p-4 relative'>
      <div className="sticky top-0 z-50 bg-white">

      <FullCalendar {...calendarOptions} viewClassNames='z-10' />
      </div>
    </Card>
  );
};

export default Calendar;
