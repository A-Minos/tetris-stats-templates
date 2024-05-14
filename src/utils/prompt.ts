import { useKeyModifier } from '@vueuse/core'
import { isNonNullish } from 'remeda'

const controlPressed = useKeyModifier('Control')

export default <T extends string>(message: string, defaultValue: T): T => {
	if (controlPressed.value) {
		let answer: T

		while (true) {
			answer = window.prompt(message, defaultValue)! as T

			if (isNonNullish(answer)) {
				break
			}
		}

		return answer
	}

	return defaultValue
}