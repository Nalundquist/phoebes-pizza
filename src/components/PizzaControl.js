import React from "react";
import PizzaList from "./PizzaList";
import Dough from "./Dough";

class PizzaControl extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			dough: 0,
			masterPizzaList: [],
			currentPizza: null,
			editPizza: false,
			createPizza: false
		}
	}

	buyDough = () => {
		this.setState(prevState => ({
			dough: prevState.dough + 30
		}))
	}

	handleNewPizza = () => {
		this.setState(prevState => ({
			createPizza: !prevState.createPizza
		}))
	}

	render(){

		const bodyStyle = {
			margin: "10px",
			padding: "5px",
			display: "flex",
			flexDirection: "row"
		}
		return (
			<React.Fragment>
				<div style={bodyStyle}>
					if ()
					<PizzaList pizzaList={this.state.masterPizzaList}/>
					<Dough buyMoreDough={this.buyDough} doughAmount={this.state.dough}/>
				</div>
			</React.Fragment>
		)
	}
}



export default PizzaControl;