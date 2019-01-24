import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron2 from "../components/Jumbotron2/Jumbotron2.jsx";
import Form from '../components/LoginForm/Form.js';

class Login extends Component {
	render() {
		return (
			<div>
				<Jumbotron2 title="Login." />
				<div className="container">
					<div className="row">
						<div className="col-6" style={{background: 'pink', margin: '0 auto', textAlign: 'center'}}>

							<Form handleAuthRes={this.props.handleAuthRes}>

							</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;