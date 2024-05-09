export const resetTime = (date: Date) => {
	const newDate = new Date(date)
	newDate.setHours(0)
	newDate.setMinutes(0)
	newDate.setSeconds(0)
	newDate.setMilliseconds(0)
	return newDate
}