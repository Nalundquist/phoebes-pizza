import React from "react";
import PropTypes from "prop-types";
import Pizza from "./Pizza";

function PizzaList(props){

	const listStyle = {
		width: "65%",
		margin: "6px",
		padding: "5px",
		border: "3px solid grey",
		borderRadius: "8px"
	}
	return(
		<React.Fragment>
			<div style={listStyle}>
				{props.pizzaList.map((pizza) => 
					<Pizza 
						size={pizza.size}
						toppings={pizza.toppings}
						id={pizza.id}
						key={pizza.id}/>
				)}
			</div>
		</React.Fragment>
	)
}

PizzaList.propTypes = {
	pizzaList: PropTypes.array
}

export default PizzaList;