import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		<Container fluid>
			<Row>
				<Col>
					<Header />
					<Footer />
				</Col>
			</Row>
		</Container>

	);
}

export default App;
