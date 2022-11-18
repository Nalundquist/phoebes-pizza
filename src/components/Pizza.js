import React from "react";
import PropTypes from "prop-types";
import Topping from "./Topping";

function Pizza(props){
	
	const pizzaStyle = {
		margin: "3px",
		marginBottom: "3px",
		borderBottom: "1px solid grey",
		padding: "4px"
	}

	return (
		<React.Fragment>
			<div style={pizzaStyle}>
				<h4>{props.size}</h4>
				<ul>
					{props.toppings.map((topping) =>
						<Topping thisTopping={topping} />
					)}
				</ul>
			</div>
		</React.Fragment>
	)
}

Pizza.propTypes = {
	size: PropTypes.string,
	toppings: PropTypes.array
}

export default Pizza;