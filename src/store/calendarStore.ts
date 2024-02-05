import { create } from 'zustand';

interface Event {
  start: Date,
  end: Date,
  title: string
}

interface CalendarStore {
  events: Event[];
  setEvents: (events: Event[]) => void
}


export const useCalendarStore = create<CalendarStore>((set) => ({
  events: [],
  setEvents: (events) => set({ events})
}))