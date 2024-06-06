import { describe, expect, it } from "vitest"
import sum from "../Components/HelperFunctions"

describe("#sum" , () => {
    it("Should return 0 if given no numbers", () => {
       expect(sum()).toBe(0)
    })
})

describe("#sum" , () => {
    it("Should be a postive number", () => {
       expect(sum()).toBeGreaterThan(-1)
    })
})

    