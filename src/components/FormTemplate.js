import React from "react";
import PropTypes from "prop-types";

function FormTemplate(props){

	const formStyle = {
		border: "3px solid grey",
		borderRadius: "8px",
		margin: "5px",
		padding: "10px"
	}

	return(
		<React.Fragment>
			<div style={formStyle}>
				<form onSubmit={props.formSubmissionHandler}>
					<select name='size'>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="huge">Huge</option>
					</select>
					<select name='toppings' multiple>
						<option value="Extra Cheese">Extra Cheese</option>
						<option value="Pepperoni">Pepperoni</option>
						<option value="Mushroom">Mushroom</option>
						<option value="Sausage">Sausage</option>
						<option value="Tomato">Tomato</option>
						<option value="Pineapple">Pineapple</option>
						<option value="Gruyere">Gruyere</option>
					</select>
					<button type="submit">{props.submitButtonText}</button>
				</form>
			</div>
		</React.Fragment>
	)
}

FormTemplate.propTypes = {
	formSubmissionHandler: PropTypes.func,
	submitButtonText: PropTypes.string
};

export default FormTemplate;