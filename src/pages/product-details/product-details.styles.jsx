import styled from 'styled-components'

export const ProductPageContainer = styled.div`
	display: flex;
	align-items: stretch;
	max-width: 900px;
	margin: 60px auto;
	padding: 20px;

	@media only screen and (max-width: 700px) {
		flex-direction: column;
	}
`

export const ProductImageContainer = styled.div`
	width: 100%;
	height: 100%;
	max-height: 600px;
	max-width: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ProductImage = styled.img`
	max-height: 100%;
	max-width: 100%;
`

export const ProductTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`

export const ProductTitle = styled.h2`
	color: #222222;
	margin-bottom: 0px;
	font-weight: 400;
`

export const ProductPriceContainer = styled.div`
	color: #222222;
	margin: 20px 0px;
	padding: 10px 5px;
	border-top: 1px solid #CCCCCC;
	border-bottom: 1px solid #CCCCCC;
	width: 100%;
	text-align: left;
	font-weight: bold;
`

export const PropductDescriptionContainer = styled.div`
	color: #888888;
	text-align: left;
	margin-bottom: 30px;
`

export const ProductSize = styled.div`
	color: #888888;
	margin-bottom: 10px;
	font-weight: bold;
	font-size: 15px;
`

export const StarIndicator = styled.span`
	color: #C90000;
	font-weight: bold;
	font-size: 15px;
	margin-bottom: 0;
	margin-left: 5px;
`

export const ProductSizeContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 20px;
`

export const SizeButton = styled.button`
	cursor: pointer;
	width: 40px;
	height: 40px;
	border: 1px solid #CCCCCC;
	color: #888888;
	background: #fff;
	&:active, &:focus {
		outline: none;
		box-shadow: none;
	}
	&.active {
		border: 1px solid #222222;
	}
`

export const AddToCartButton = styled.button`
	cursor: pointer;
	width: 150px;
	height: 40px;
	border: 2px solid #222222;
	color: #222222;
	background-color: #fff;
	font-weight: bold;
	transition: all 0.2s ease;

	&:hover {
		background-color: #222222;
		color: #fff;
	}
`