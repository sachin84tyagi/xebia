import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import { connect } from "react-redux";
import logo from "./../logo.svg";
import * as actionCreator from "../store/actions/actions";
import Input from "./helper/input";
import Circle from "./helper/statusCircle/StatusCircle";


class Dashboard extends Component {

	state = {
		open: false,
		data: { name: "" },
		dataList: "",
		submitted: false,
		planets: [
			{ id: 2, name: "Alderaan" },
			{ id: 3, name: "Yavin IV" },
			{ id: 4, name: "Hoth" },
			{ id: 5, name: "Dagobah" },
			{ id: 6, name: "Bespin" },
			{ id: 7, name: "Endor" },
			{ id: 8, name: "Naboo" },
			{ id: 9, name: "Coruscant" },
			{ id: 10, name: "Kamino" },
			{ id: 11, name: "Geonosis" },
		]
	};

	getIdFromName = (name) => {
		const data = this.state.planets.filter((data) => data.name === name);
		return data[0].id;
	}

	handleChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data[input.name] = input.value;

		this.setState({ data });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ submitted: true });

		const searchParam = this.getIdFromName(this.state.data.name);

		if (searchParam) {
			this.props.loadingTest(true)
			this.props.loadData(searchParam);
		}
	}


	dataList = () => {
		console.log("This report data loading", this.props.loading)
		return this.props.reportData ?
			(<div className="col-sm-4" >
				<div>
					<div>
						<Circle
							backgroundColor="#444"
							foregroundColor="#000"
							height={`${this.props.reportData.population.length * 50}px`}
							width={`${this.props.reportData.population.length * 50}px`}
							payload={this.props.reportData}
						/>
					</div>
				</div>
			</div>
			) : "";

	}



	render() {

		const { submitted } = this.state;
		if (!auth.getJwt()) {
			window.location = "/login";
		}

		return (
			<div>
				<div className="row " style={{ backgroundColor: 'black', marginBottom: '25px' }} >
					<div className="col-sm-2" style={{ textAlign: "right" }}>
						<h3>Logo </h3>
					</div>
					<div className="col-sm-8"></div>
					<div className="col-sm-2">
						<Link className="nav-link" to="/logout">
							Logout
          	</Link>
					</div>

				</div>
				<div className="container">

					<h1 style={{ marginLeft: '35%' }}>Planet Information</h1>
					<hr />
					<form onSubmit={this.handleSubmit}>
						<div className="container">
							<div className="row">
								<div className="col-sm">
									<Input
										value={this.state.data.name}
										onChangeHandle={this.handleChange}
										name="name"
										type="text"
										className="form-control"
										placeHolder="Name"
									/>
								</div>
								<div className="col-sm">
									<button type="submit" className="btn btn-secondary btn-width">
										Search
            </button> &nbsp; (Please enter Name.)
							</div>
								<div className="col-sm">

								</div>
							</div>
							{submitted && !this.state.data.name &&
								<div className="help-block" style={{ color: "#F00" }}><strong>Name is required</strong></div>
							}
							{(this.props.reportData === 'Error' || this.props.reportData === undefined) ? <div style={{ color: "#F00" }}><strong>Invalid Name</strong></div> :
								""
							}
						</div>




					</form>

					<div className="row">
						<div className="ml-4 text-success" >&nbsp; &nbsp;{this.props.loading ? (<strong>Loading.... Please wait.</strong>) : ""}</div>
						{(this.props.reportData === 'Error' || this.props.reportData === undefined) ? "" :
							this.dataList()
						}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("STATE DATA ::: ", state.data)
	return {
		reportData: state.data,
		loading: state.loading
	};
};

const actionCreators = {
	loadData: actionCreator.loadData,
	loadingTest: actionCreator.loading
};



export default connect(
	mapStateToProps,
	actionCreators
)(Dashboard);

