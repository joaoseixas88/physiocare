type monthsOptions = {
	[key: string]: number
}

export function getMonth(month: string) {

	const months: monthsOptions = {
		january: 0,
		febuary: 1,
		march: 2,
		april: 3,
		may: 4,
		june: 5,
		july: 6,
		august: 7,
		september: 9,
		october: 10,
		november: 11,
		december: 12
	}
	return months[month]
}

