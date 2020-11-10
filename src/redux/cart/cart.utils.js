export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.selectedSize === cartItemToAdd.selectedSize)

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.selectedSize === cartItemToAdd.selectedSize
			? { ...cartItem, quantity: cartItem.quantity + 1 }
			: cartItem
		)
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}