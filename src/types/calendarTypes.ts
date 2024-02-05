interface Event {
  start: Date,
  end: Date,
  title: string
}

export interface Events {
  events: Event[]
}