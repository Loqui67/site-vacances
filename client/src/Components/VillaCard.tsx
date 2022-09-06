import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

function VillaCard() {
    return (
        <>
            <Card border="light" className="no-padding">
                <Card.Header>
                    <Container>
                        <Row>
                            <Col>Titre</Col>
                            <Col className="right-center">Proposé par :</Col>
                        </Row>
                    </Container>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Titre</Card.Title>
                    <Card.Text>
                        Petit Descriptif.... Some quick example text to build on
                        the card title and make up the bulk of the card's
                        content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Quelques options...</ListGroup.Item>
                    <ListGroup.Item>Note moyenne</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card border="light" className="no-padding villa">
                <Card.Header>
                    <Container>
                        <Row>
                            <Col>Titre</Col>
                            <Col className="right-center">Proposé par :</Col>
                        </Row>
                    </Container>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Titre</Card.Title>
                    <Card.Text>
                        Petit Descriptif.... Some quick example text to build on
                        the card title and make up the bulk of the card's
                        content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Quelques options...</ListGroup.Item>
                    <ListGroup.Item>Note moyenne</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    );
}

export default VillaCard;
