// A `Header` component that appears on multiple pages
import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
	return (
		<Container fluid>
			<Row>
				<Col>
					<Jumbotron fluid>
						<Container>
							<h1>Jiyoon Kim</h1>
							<p>Hello World.</p>
						</Container>
					</Jumbotron>
				</Col>
			</Row>
		</Container>
	)
}

export default Header;