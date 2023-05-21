import compareChanges from "./../../src/utils/compare-changes";

describe("Testing compare changes", () => {
	
	test("Old value is empty object. It should return all props from new values.",() => {
		const newValue = {
			name: "Jenesius",
			address: {
				city: "Mogilev",
				country: "Belarus"
			}
		}
		expect(compareChanges(newValue, {})).toEqual([
			{ name: "name", newValue: "Jenesius", oldValue: undefined },
			{ name: "address", newValue: {city: "Mogilev", country: "Belarus"}, oldValue: undefined },
			{ name: "address.city", newValue: "Mogilev", oldValue: undefined },
			{ name: "address.country", newValue: "Belarus", oldValue: undefined },
		])
	})
	test("New value is empty object. It should return all props from old values",() => {
		const oldValue = {
			coordinate: {
				x: 1,
				y: 2
			}
		}
		expect(compareChanges({}, oldValue)).toEqual([
			{ name: "coordinate", newValue: undefined, oldValue: { x: 1, y: 2 } },
			{ name: "coordinate.x", newValue: undefined, oldValue: 1 },
			{ name: "coordinate.y", newValue: undefined, oldValue: 2 },
		])
	})
	test("Equal values should return empty array.",() => {
		const newValue = {
			name: "Jenesius",
			address: {
				planet: "Earth"
			}
		}
		const oldValue = {
			name: "Jenesius",
			address: {
				planet: "Earth"
			}
		}
		expect(compareChanges(newValue, oldValue)).toEqual([])
	})
	test("It should return only one field that was changed.",() => {
		const newValue = {
			name: "Jenesius",
			age: 24
		}
		const oldValue = {
			name: "Jenesius",
		}
		expect(compareChanges(newValue, oldValue)).toEqual([
			{ name: "age", newValue: 24, oldValue: undefined }
		])
	})
	test("Super recursive call.",() => {
		const newValue = {
			obj_1: {
				obj_2: {
					obj_3: {
						obj_4: {
							obj_5: {
								obj_6: {
									obj_7: "recursive"
								}
							}
						}
					}
				}
			}
		}

		expect(compareChanges(newValue, {})).toEqual([
			{ name: "obj_1", newValue: newValue.obj_1, oldValue: undefined},
			{ name: "obj_1.obj_2", newValue: newValue.obj_1.obj_2, oldValue: undefined},
			{ name: "obj_1.obj_2.obj_3", newValue: newValue.obj_1.obj_2.obj_3, oldValue: undefined},
			{ name: "obj_1.obj_2.obj_3.obj_4", newValue: newValue.obj_1.obj_2.obj_3.obj_4, oldValue: undefined},
			{ name: "obj_1.obj_2.obj_3.obj_4.obj_5", newValue: newValue.obj_1.obj_2.obj_3.obj_4.obj_5, oldValue: undefined},
			{ name: "obj_1.obj_2.obj_3.obj_4.obj_5.obj_6", newValue: newValue.obj_1.obj_2.obj_3.obj_4.obj_5.obj_6, oldValue: undefined},
			{ name: "obj_1.obj_2.obj_3.obj_4.obj_5.obj_6.obj_7", newValue: newValue.obj_1.obj_2.obj_3.obj_4.obj_5.obj_6.obj_7, oldValue: undefined},
		])

	})

	test("",() => {})
	test("",() => {})
	test("",() => {})
	test("",() => {})
	test("",() => {})
	test("",() => {})
	test("",() => {})
	test("",() => {})
	test("",() => {})
	test("",() => {})

})