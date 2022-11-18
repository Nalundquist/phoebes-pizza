import React from "react";
import PizzaList from "./PizzaList";
import Dough from "./Dough";
import NewPizza from "./NewPizza";
import PizzaDetail from "./PizzaDetail";
import EditPizza from "./EditPizza";

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
		console.log(this.state.masterPizzaList)
		if (newPizza.size === "Small"){
			this.setState(prevState => ({
				dough: prevState.dough - 2
			}))
		} else if (newPizza.size === "Medium"){
			this.setState(prevState => ({
				dough: prevState.dough - 3
			}))
		} else if (newPizza.size === "Large"){
			this.setState(prevState => ({
				dough: prevState.dough - 4
			}))
		} else {
			this.setState(prevState => ({
				dough: prevState.dough - 5
			}))
		}
	}

	handleEditForm = () => {
		console.log("going to form")
		this.setState({editPizza: true});
	}

	handleEditPizza = (editedPizza) => {
		const revisedPizzaList = this.state.masterPizzaList
			.filter(pizza => pizza.id !== this.state.currentPizza.id)
			.concat(editedPizza);
		this.setState({
			masterPizzaList: revisedPizzaList,
			editPizza: false,
			currentPizza: null
		})
	}

	handlePizzaDetail = (id) => {
		const currentPizza = this.state.masterPizzaList.filter(pizza => pizza.id === id)[0];
		this.setState({currentPizza: currentPizza})
	}

	render(){

		let visibleState = null;
		const bodyStyle = {
			margin: "10px",
			padding: "5px",
			display: "flex",
			flexDirection: "row"
		}

		if (this.state.createPizza){
			visibleState = 
				<div style={bodyStyle}>
					<NewPizza onNewPizzaCreation={this.handleNewPizza} />
				</div>
		} else if (this.state.currentPizza !== null){
			if (this.state.editPizza){
				visibleState =
				<div style={bodyStyle}>
					<EditPizza onEditPizza={this.handleEditPizza} pizza={this.state.currentPizza}/>
				</div>
			} else {
			visibleState = 
				<div style={bodyStyle}>
					<PizzaDetail thisPizza={this.state.currentPizza} editingPizza={this.handleEditForm}/>
				</div>
			}
		} else {
			visibleState = 
				<div style={bodyStyle}>
					<PizzaList 
					pizzaList={this.state.masterPizzaList} 
					createNewPizza={this.handlePizzaForm}
					showPizzaDetail={this.handlePizzaDetail}/>
					<Dough buyMoreDough={this.buyDough} doughAmount={this.state.dough}/>
				</div>
		}

		return (
			<React.Fragment>
				{visibleState}
			</React.Fragment>
		)
	}
}



export default PizzaControl;