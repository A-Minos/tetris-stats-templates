export const calculateXpLevel = (value: number) => {
	return Math.pow(value / 500, 0.6) + value / (5000 + Math.max(0, value - 4000000) / 5000) + 1
}