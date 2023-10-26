export function swedishRounding(input: number, nearest = 1) {
	const floor = Math.floor(input / nearest);
	const remainder = input % nearest;
	if (remainder >= nearest / 2) {
		return (floor + 1) * nearest;
	}
	return floor * nearest;
}
