import React from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import FormTemplate from "./FormTemplate";

function NewPizza(props){

	function handleNewPizzaFormSubmission(event){
		event.preventDefault();
		props.onNewPizzaCreation({
			size: event.target.size.value,
			toppings: event.target.toppings.value,
			id: v4()})
	}

	return(
		<FormTemplate 
		formSubmissionHandler={handleNewPizzaFormSubmission}
		pizzaButtonText="Order Pizza" />
	)
}

NewPizza.propTypes = {
	onNewPizzaCreation: PropTypes.func
}

export default NewPizza;