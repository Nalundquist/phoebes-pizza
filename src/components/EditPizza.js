import React from "react";
import PropTypes from "prop-types";
import FormTemplate from "./FormTemplate";

function EditPizza(props){
	const editStyle = {
		margin: "10px",
		padding: "6px",
		border: "3px solid grey",
		borderRadius: "8px",
		width: "75%"
	}

	function editPizzaFormSubmit(event){
		event.preventDefault();
		props.onEditPizza({
			size: event.target.size.value,
			toppings: event.target.toppings.value, 
			id: props.pizza.id
		})
	} 

	return (
		<React.Fragment>
			<div style={editStyle}>
				<FormTemplate
					formSubmissionHandler={editPizzaFormSubmit}
					submitButtonText="Edit Pizza"/>
			</div>
		</React.Fragment>
	)
}

EditPizza.propTypes = {
	onEditPizza: PropTypes.func,
	pizza: PropTypes.object
}


export default EditPizza;