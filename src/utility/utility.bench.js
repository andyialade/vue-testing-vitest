import { describe, bench, expect } from "vitest";
import { adjustPrice } from ".";

describe("get discounted price", () => {
    bench("should discount the price correctly", () => {
        let a = 100000
        while(a > 0){ a-- }
        const originalPrice = 1.00
        const nextPrice = adjustPrice(originalPrice)
        expect(nextPrice).toBeCloseTo(0.90)
    })
})