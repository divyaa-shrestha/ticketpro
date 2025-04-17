import {
  format,
  formatDistanceToNow,
  isToday,
  isTomorrow,
  isYesterday,
  isFuture,
  isThisWeek,
  isPast,
  parse,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
} from "date-fns"

/**
 * Combines a date and time string into a Date object.
 */
const toDateTime = (date: string, time: string) => {
  return parse(`${date} ${time}`, "yyyy-MM-dd HH:mm", new Date())
}

/**
 * Formats event date based on proximity.
 */
export const formatDateTime = (date: string, time?: string): string => {
  const slicedTime = time?.slice(0, 5)
  const dateTime = slicedTime
    ? toDateTime(date, slicedTime)
    : parse(date, "yyyy-MM-dd", new Date())
  const now = new Date()

  // If no time is provided, return a simple format (e.g., March 20)
  if (!time) {
    return format(dateTime, "MMMM d")
  }

  if (isToday(dateTime)) {
    return `Today, ${format(dateTime, "h:mm a")}`
  }

  if (isTomorrow(dateTime)) {
    return `Tomorrow, ${format(dateTime, "h:mm a")}`
  }

  if (isYesterday(dateTime)) {
    return `Yesterday, ${format(dateTime, "h:mm a")}`
  }

  if (isFuture(dateTime)) {
    if (isThisWeek(dateTime)) {
      return `${format(dateTime, "EEEE")}, ${format(dateTime, "h:mm a")}` // e.g. Friday, 8:00 PM
    }

    return `${format(dateTime, "d MMMM yyyy")}, ${format(dateTime, "h:mm a")}` // e.g. 7 April 2025, 6:00 PM
  }

  if (isPast(dateTime)) {
    const hoursAgo = differenceInHours(now, dateTime)
    const daysAgo = differenceInDays(now, dateTime)
    const monthsAgo = differenceInMonths(now, dateTime)

    if (hoursAgo < 24) {
      return `${formatDistanceToNow(dateTime, { addSuffix: true })}` // e.g. 3 hours ago
    } else if (daysAgo < 7) {
      return `${formatDistanceToNow(dateTime, { addSuffix: true })}` // e.g. 2 days ago
    } else if (monthsAgo < 1) {
      return `${format(dateTime, "d MMM")}, ${format(dateTime, "h:mm a")}` // e.g. 12 Mar, 6:30 PM
    } else {
      return `${format(dateTime, "d MMM yyyy")}, ${format(dateTime, "h:mm a")}` // e.g. 9 Jan 2024, 7:00 PM
    }
  }

  return format(dateTime, "d MMM yyyy, h:mm a")
}
