import React from "react";
import PropTypes from "prop-types";
// import Topping from "./Topping";

function Pizza(props){
	
	const pizzaStyle = {
		margin: "3px",
		marginBottom: "3px",
		borderBottom: "1px solid grey",
		padding: "4px"
	}

	return (
		<React.Fragment>
			<div onClick={() => props.onClickDetail(props.id)} style={pizzaStyle}>
				<h4>{props.size}</h4>
				<p>{props.toppings}</p>
			</div>
		</React.Fragment>
	)
}

Pizza.propTypes = {
	size: PropTypes.string.isRequired,
	toppings: PropTypes.string.isRequired,
	onClickDetail: PropTypes.func
}

export default Pizza;