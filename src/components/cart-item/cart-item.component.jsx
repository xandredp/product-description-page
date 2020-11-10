import React from 'react'

import { CartItemContainer, CartItemImageContainer, CartItemTextContainer, CartItemImage, CartItemTitle, CartItemQuantity, CartItemSize} from './cart-item.styles'

const CartItem = ({ item: {title, img, selectedSize, quantity, price}}) => {
	return (
		<CartItemContainer>
			<CartItemImageContainer>
				<CartItemImage src={img}/>
			</CartItemImageContainer>
			<CartItemTextContainer>
				<CartItemTitle>{title}</CartItemTitle>
				<CartItemQuantity>{`${quantity} x `}<strong>${price}</strong></CartItemQuantity>
				<CartItemSize>{`Size: ${selectedSize}`}</CartItemSize>
			</CartItemTextContainer>
		</CartItemContainer>
	)
}

export default CartItem
