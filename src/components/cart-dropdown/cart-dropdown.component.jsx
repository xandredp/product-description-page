import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems }) => {
	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{
					cartItems.length ?
						( cartItems.map(cartItem => <CartItem key={cartItem.selectedSize} item={cartItem} />) )
					:
						( <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer> )
				}
			</CartItemsContainer>
		</CartDropdownContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default connect(mapStateToProps, null)(CartDropdown)
