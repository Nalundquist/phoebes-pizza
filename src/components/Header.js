import React from "react";
import PizzaImg from ".././img/pizza.jpg";

function Header(){

	const headStyle = {
		margin: "10px",
		padding: "7px",
		border: "3px solid grey",
		borderRadius: "8px",
		display: "flex",
		width: "95%",
		justifyContent: "space-between"
	}

	const imgBox = {
		width: "125px",
		height: "125px"
	}

	const titleBox = {
		marginLeft: "50px",
		marginRight: "50px"
	}

	return(
		<React.Fragment>
			<div style={headStyle}>
				<div style={imgBox}>
					<img src={PizzaImg} alt="Pizza" width="90%" />
				</div>
				<div style={titleBox}>
					<h2>Phoebe's Pizza</h2>
				</div>
				<div style={imgBox}>
					<img src={PizzaImg} alt="Pizza" width="90%" />
				</div>
			</div>
		</React.Fragment>
	)
}

export default Header;