import React from "react";
import PropTypes from "prop-types";

function PizzaDetail(props){
	const detailStyle = {
		border: "3px solid grey",
		borderRadius: "8px",
		padding: "10px",
		width: "35%"
	}
	return (
		<React.Fragment>
			<div style={detailStyle}>
			<h2>{props.thisPizza.size}</h2>
			<hr />
			<p>{props.thisPizza.toppings}</p>
			<button onClick={props.editingPizza}>Edit Pizza</button>
			</div>
		</React.Fragment>
	)
}

PizzaDetail.propTypes = {
	size: PropTypes.string,
	toppings: PropTypes.string,
	editingPizza: PropTypes.func
}

export default PizzaDetail;