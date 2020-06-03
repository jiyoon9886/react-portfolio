import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
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
