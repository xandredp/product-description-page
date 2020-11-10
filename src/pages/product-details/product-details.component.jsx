import React, { Component } from 'react'
import { connect } from 'react-redux'

import image from '../../images/classic-tee.jpg';
import {addItem} from '../../redux/cart/cart.actions';
import { ProductPageContainer,
	ProductImageContainer,
	ProductImage,
	ProductTextContainer,
	ProductTitle,
	ProductPriceContainer,
	PropductDescriptionContainer,
	ProductSize,
	StarIndicator,
	ProductSizeContainer,
	SizeButton,
	AddToCartButton,
	ErrorMessageContainer } from './product-details.styles'

class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: {
				title: "Classic Tee",
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				price: 75,
				img: image,
				selectedSize: "",
				sizes: [
					{
						id: 1,
						size: "S"
					},
					{
						id: 2,
						size: "M"
					},
					{
						id: 3,
						size: "L"
					}
				],
			},
			error: false,
		}
	}

	handleAdd = (product) => {
		if (!this.state.product.selectedSize) {
			this.setState({
				error: true
			})
			return;
		}
		this.props.addItem(product);
	}

	handleSelect = (size) => {
		this.setState({
			product: {
				...this.state.product,
				selectedSize: size
			},
			error: false
		})
	}

	render() {
		const { product } = this.state;

		return (
			<ProductPageContainer>
				<ProductImageContainer>
					<ProductImage src = { product.img } alt={product.title}/>
				</ProductImageContainer>
				<ProductTextContainer>
					<ProductTitle>{ product.title }</ProductTitle>
					<ProductPriceContainer>$ { product.price }</ProductPriceContainer>
					<PropductDescriptionContainer>{ product.desc }</PropductDescriptionContainer>
					<ProductSize>SIZE
						{
							product.selectedSize ? <span style={{marginLeft: '5px'}}>{product.selectedSize}</span> : <StarIndicator>*</StarIndicator>
						}
					</ProductSize>
					<ProductSizeContainer>
						<SizeButton onClick={() => this.handleSelect("S")} className={product.selectedSize === "S" ? 'active' : ''} style={{marginRight: '10px'}}>S</SizeButton>
						<SizeButton onClick={() => this.handleSelect("M")} className={product.selectedSize === "M" ? 'active' : ''} style={{marginRight: '10px'}}>M</SizeButton>
						<SizeButton onClick={() => this.handleSelect("L")} className={product.selectedSize === "L" ? 'active' : ''}>L</SizeButton>
						{
							this.state.error ? <ErrorMessageContainer>Please select a size</ErrorMessageContainer> : ''
						}
					</ProductSizeContainer>
					<AddToCartButton onClick={() => this.handleAdd(product)}>ADD TO CART</AddToCartButton>
				</ProductTextContainer>
			</ProductPageContainer>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductPage)