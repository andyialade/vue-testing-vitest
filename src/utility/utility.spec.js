import { describe, it, expect } from "vitest";
import { adjustPrice } from ".";

describe("get discounted price", () => {
    for(let originalPrice = 1; originalPrice < 10000; originalPrice++){
        it("should discount the price correctly", () => {
            //const originalPrice = 1.00
            const nextPrice = adjustPrice(originalPrice)
            expect(nextPrice).toBeCloseTo(originalPrice * 0.9)
        })
    }
})