import type { TemplateData, TemplateType } from '@/types/template'
import { shallowRef } from 'vue'

export const data = shallowRef<TemplateData>({
	type: document.querySelector<HTMLTemplateElement>('template[id=type]')!.innerHTML.trim() as TemplateType,
	// @ts-ignore
	data: (() => {
		try {
			return JSON.parse(
				document.querySelector<HTMLTemplateElement>('template[id=data]')!.innerHTML.trim()
			)
		} catch {
			return {}
		}
	})()
})