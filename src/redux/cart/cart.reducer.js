import { cartActionTypes } from './cart.types'
import image from '../../images/classic-tee.jpg';
// import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
	items: [
		{
			title: "Classic Tee",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
				"tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim\n" +
				"ut tellus elementum sagittis vitae. Mauris sit amet massa vitae tortor condimentum lacinia.",
			price: 75,
			img: image
		}
	],
	hidden: true,
	sizes: [
		{ size: "S" },
		{ size: "M" },
		{ size: "L" }
	],
	cartItems: [],
	subTotal: 0
};

const CartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			}
		case cartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			}
		default:
			return state;
	}
}

export default CartReducer;