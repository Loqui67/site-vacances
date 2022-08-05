import "../Styles/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function ProfilLeft() {
    const x = 0;
    return (
        <>
            <Container>
                <Row className="profilPicture">
                    <Col>
                        <div className="r-hex">
                            <div className="r-hex-inner">
                                <div className="r-hex-inner-2"></div>
                            </div>
                        </div>
                        <div className="pseudo">
                            <h4 className="nom">Laureline Zittel</h4>
                            <h6 className="surnom">Panda</h6>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="colonne">
                        Nombre de villa proposées: {x}
                    </Col>
                </Row>
                <Row>
                    <Col className="colonne">
                        Nombre d'activités proposées: {x}
                    </Col>
                </Row>
                <Row>
                    <Col className="colonne">Nombre de votes soumis: {x}</Col>
                </Row>
                <Row>
                    <Col className="colonne">
                        <Form.Label htmlFor="basic-url">Paypal</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="https://paypal.me/LaurelineZ"
                                id="basic-url"
                                aria-describedby="basic-addon3"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Button
                        variant="primary"
                        type="submit"
                        className="buttonSubmitProfil"
                    >
                        Submit
                    </Button>
                </Row>
            </Container>
        </>
    );
}

export default ProfilLeft;
