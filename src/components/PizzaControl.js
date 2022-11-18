import React from "react";
import PizzaList from "./PizzaList";
import Dough from "./Dough";
import NewPizza from "./NewPizza";

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

	handlePizzaForm = () => {
		this.setState(prevState => ({
			createPizza: !prevState.createPizza
		}))
	}
	
	handleNewPizza = (newPizza) => {
		const newPizzaList = this.state.masterPizzaList.concat(newPizza);
		this.setState({masterPizzaList: newPizzaList, createPizza: false});
		if (newPizza.size === "small"){
			this.setState(prevState => ({
				dough: prevState.dough - 2
			}))
		} else if (newPizza.size === "medium"){
			this.setState(prevState => ({
				dough: prevState.dough - 3
			}))
		} else if (newPizza.size === "large"){
			this.setState(prevState => ({
				dough: prevState.dough - 4
			}))
		} else {
			this.setState(prevState => ({
				dough: prevState.dough - 5
			}))
		}
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
				if (this.state.createPizza){
					<div style={bodyStyle}>
						<NewPizza onNewPizzaCreation={this.handleNewPizza}/>
					</div>
				} else {
					<div style={bodyStyle}>
						<PizzaList pizzaList={this.state.masterPizzaList}/>
						<Dough buyMoreDough={this.buyDough} doughAmount={this.state.dough}/>
					</div>
				}
			</React.Fragment>
		)
	}
}



export default PizzaControl;