import React from "react";
import PropTypes from "prop-types";
import Pizza from "./Pizza";

function PizzaList(props){

	const listStyle = {
		width: "65%",
		minHeight: "40vh",
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
						onClickDetail={props.showPizzaDetail}
						size={pizza.size}
						toppings={pizza.toppings}
						id={pizza.id}
						key={pizza.id}/>
				)}
				<button onClick={props.createNewPizza}>Add New Pizza</button>
			</div>
		</React.Fragment>
	)
}

PizzaList.propTypes = {
	pizzaList: PropTypes.array,
	showPizzaDetail: PropTypes.func
}

export default PizzaList;