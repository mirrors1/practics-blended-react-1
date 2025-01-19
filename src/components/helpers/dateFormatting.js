import { formatDistanceToNow } from 'date-fns';

export default function dateFormattingToAgo(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
