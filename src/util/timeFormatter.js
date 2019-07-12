import dayjs from 'dayjs';

export function dateToString(date) {
  if (date) {
    return dayjs(date).format('MMM Do [at] h:mm A');
  }
  return null;
}
