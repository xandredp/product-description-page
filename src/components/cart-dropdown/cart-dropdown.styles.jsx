import styled from 'styled-components'

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid #CCCCCC;
	background-color: white;
	top: 50px;
	right: 5%;
	z-index: 5;
`

export const CartItemsContainer = styled.div`
	height: 340px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`

export const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto;
`