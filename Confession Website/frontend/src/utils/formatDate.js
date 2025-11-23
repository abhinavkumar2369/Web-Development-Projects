import dayjs from 'dayjs';

export default function formatDate(dateString) {
  return dayjs(dateString).format('MMM D, YYYY h:mm A');
}
