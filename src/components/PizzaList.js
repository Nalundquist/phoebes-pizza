import React from "react";
import Pizza from "./Pizza";

function PizzaList(){

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
				<Pizza />
				<p>list of pizzas</p>
			</div>
		</React.Fragment>
	)
}

export default PizzaList;