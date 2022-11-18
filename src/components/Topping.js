import React from "react";
import PropTypes from "prop-types";

function Toppings(props){

	return(
		<li>{props.thisTopping}</li>
	)
}

Toppings.propTypes = {
	topping: PropTypes.string
}

export default Toppings;