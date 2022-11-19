import React from "react";
import PropTypes from "prop-types";

function FormTemplate(props){

	const formStyle = {
		width: "75%",
		height: "45vh",
		border: "3px solid grey",
		borderRadius: "8px",
		margin: "5px",
		padding: "10px"
	}

	return(
		<React.Fragment>
			<div style={formStyle}>
				<form onSubmit={props.formSubmissionHandler}>
					<input
						type="text"
						name="size"
						placeholder="Size"/>
					<input
						type="text"
						name="toppings"
						placeholder="Toppings"/>
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