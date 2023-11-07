import delay from "delay"
export const getConcerts = async () => {
	await delay(1000)

	return [
		{ name: "Maximum Mozart", price: 99.50 },
		{ name: "Sensational Schubert", price: 105.62 },
		{ name: "Beethoven on Ice", price: 40.59 }
	]
}

export const getWishlist = async () => {
	await delay(1000)

	return [
		{ name: "Bach to the Fugue-ture", price: 105.50 }
	]
}

export const buyFn = async () => {
	await delay(1000)
	return true
}

export const tickerBuyer = (buyFn) => ({

	buyTicket: async (ticket) => {

		console.info("purchasing ticket", ticket)
		try {
			buyFn()
			alert("Purchased ticket")
		} catch (e) {}
		return true
		
	}
})

if(import.meta.vitest){
	//wont execute in production
	const { describe, it, expect, vi } = import.meta.vitest
	describe("Get concert", () => {
		it("should return the expected list", async() => {
			const concerts = await getConcerts()
			expect(concerts).toHaveLength(3)
			expect(concerts[0].name).toBe("Maximum Mozart")
		})
	})

	describe("Ticket buyer", () => {
		it("should buy the ticket", async() => {
			const mock = vi.fn().mockImplementation(buyFn)
			const ticketPurchaser = tickerBuyer(mock)
			const ticket = {name :  "Vitest on Ice", price: 1000}
			ticketPurchaser.buyTicket(ticket)
			expect(mock).toHaveBeenCalled()
		})
	})

	describe("Wishlist", () => {
		it("should get wishlist", async() => {
			const wishlists = await getWishlist()
			const expectedItem = { name: "Bach to the Fugue-ture", price: 105.50 }
			expect(wishlists).toHaveLength(1)
			expect(wishlists[0].name).toBe(expectedItem.name)
			expect(wishlists[0].price).toBe(expectedItem.price)
		})
	})
}