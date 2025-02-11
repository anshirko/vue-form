import isEmptyObject from "./is-empty-object";
import checkPrimitiveValue from "./check-primitive-value";

/**
 * @description Функция используется для логики формы. Т.к. нам часто нужно проходить по объектам и перебирать их свойства,
 * то это функция отвечает на вопрос: Является ли переданное значение итерируемым и можно ли зайти внутрь его.
 * */
export default function isIterablePoint(value: unknown) {
	return !(
		checkPrimitiveValue(value) ||
		Array.isArray(value) ||
		Object.isFrozen(value) ||
		isEmptyObject(value) ||
		(typeof value === 'function')
	)
}