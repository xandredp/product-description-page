import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { HeaderContainer } from './header.styles'

const Header = ({ hidden }) => {
	return (
		<HeaderContainer>
			<CartIcon />
			{
				hidden ? null : <CartDropdown />
			}
		</HeaderContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
