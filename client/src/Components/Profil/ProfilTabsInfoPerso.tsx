import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../Styles/styles.css";

function ProfilTabsInfoPerso() {
    return (
        <Form className="formProfil">
            <Row className="rowInfoPerso">
                <Col className="colonneInfoPerso">
                    <Form.Group controlId="formGroupFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Form.Group>
                </Col>
                <Col className="colonneInfoPerso">
                    <Form.Group controlId="formGroupLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="rowInfoPerso">
                <Col className="colonneInfoPerso">
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Col>
                <Col className="colonneInfoPerso">
                    <Form.Group controlId="formGroupPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Phone number" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="rowInfoPerso">
                <Col className="colonneInfoPerso">
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Col>
                <Col className="colonneInfoPerso">
                    <Form.Group controlId="formGroupConfirmedPassword">
                        <Form.Label>Confirme Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirme password"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="rowInfoPerso">
                <Button
                    variant="primary"
                    type="submit"
                    className="buttonSubmitInfoPerso"
                >
                    Modifier
                </Button>
            </Row>
        </Form>
    );
}

export default ProfilTabsInfoPerso;
