import moment from 'moment'

const DAY_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const getSentAtLabel = (sentAt: string) => {
  const sentAtDate = moment(sentAt)
  const currentDate = moment()

  const isToday = sentAtDate.isSame(currentDate, 'day')
  const isYesterday = sentAtDate.isSame(currentDate.clone().subtract(1, 'day'), 'day')
  const isLessThanAWeek = sentAtDate.isAfter(currentDate.clone().subtract(7, 'day'))

  if (isToday) return sentAtDate.format('HH:mm')
  if (isYesterday) return 'Yesterday'
  if (isLessThanAWeek) return DAY_OF_WEEK[sentAtDate.weekday()]

  return sentAtDate.format('DD/MM/YYYY')
}
