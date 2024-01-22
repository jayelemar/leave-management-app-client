import { format } from "date-fns";

export const formatDate = (date?: string | Date) => {
  return date ? format(new Date(date), "MMM dd, yyyy") : 'N/A'
};