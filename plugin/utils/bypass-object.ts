import checkPrimitiveType from "./checkPrimitiveType";

function step(array: BypassItem[], value: any, path: string[] = []): void {
	if (checkPrimitiveType(value)) return;
	
	Object.keys(value)
	.forEach(key => {
		
		const parsedKey = key.split('.');
		
		const p = [...path, ...parsedKey]; // Step path
		const v = value[key];	  // Step value
		
		if (checkPrimitiveType(v)) {
			array.push({
				path: p,
				value: v
			})
			return;
		}
		
		step(array, v, p)
	})
}
/**
 * @description Функция проходит по всем полям объекта.
 * @return Array of {path: string[], value: any}
 */
export default function bypassObject(object: any): BypassItem[] {
	const array:BypassItem[] = [];
	
	step(array, object);
	
	return array
}

interface BypassItem {
	value: any,
	path: string[]
}





