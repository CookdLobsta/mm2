import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";

import Form from '../components/Form/Form.js';

class AddItem extends Component {
  render() {
    return (
			<div>
			<Navbar />
			<div className="container">

      <Form>

			</Form>
			</div>
			</div>
    );
  }
}

export default AddItem;