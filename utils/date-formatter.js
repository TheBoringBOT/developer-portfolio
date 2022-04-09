import { parseISO, format } from "date-fns";
import { se } from "date-fns/locale";

// uses locale to return correct date format
export default function DateFormatter({ dateString, formatStr = "PP" }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, formatStr, { locale: se })}</time>
  );
}

export const getFullYear = () => {
  const date = new Date();
  return date.getFullYear();
};
