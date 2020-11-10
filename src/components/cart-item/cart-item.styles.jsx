import styled from 'styled-components'

export const CartItemContainer = styled.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	margin-bottom: 30px;
`

export const CartItemImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 120px;
`

export const CartItemTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const CartItemImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`

export const CartItemTitle = styled.div`
	color: #888888;
	margin-bottom: 10px;
`

export const CartItemQuantity = styled.div`
	color: #222222;
	margin-bottom: 15px;
`

export const CartItemSize = styled.div`
	color: #222222;
`