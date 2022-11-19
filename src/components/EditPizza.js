import React from "react";
import PropTypes from "prop-types";
import FormTemplate from "./FormTemplate";

function EditPizza(props){

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
			<FormTemplate
				formSubmissionHandler={editPizzaFormSubmit}
				submitButtonText="Edit Pizza"/>
		</React.Fragment>
	)
}

EditPizza.propTypes = {
	onEditPizza: PropTypes.func,
	pizza: PropTypes.object
}


export default EditPizza;