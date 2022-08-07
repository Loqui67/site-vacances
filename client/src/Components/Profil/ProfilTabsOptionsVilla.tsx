import { Form, Row, Col, Container } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../Styles/styles.css";

function ProfilTabsOptionsVilla() {
    const [value, setValue] = useState<any>(200);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <Form>
                <Container>
                    <Row className="rowInfoPerso optionsVilla">
                        <Form.Label className="sliderBarLabelProfil">
                            Prix maximum par personne pour la villa
                        </Form.Label>
                        <Col sm="auto">
                            <label className="sliderBarMin">50</label>
                        </Col>
                        <Col>
                            <Slider
                                className="sliderBarProfil"
                                min={50}
                                max={1000}
                                value={value}
                                onChange={setValue}
                            />
                        </Col>
                        <Col sm="auto">
                            <label className="sliderBarMax">1000</label>
                        </Col>
                        <Col sm={2}>
                            <h4 className="sliderBarValue">{value}€ max</h4>
                        </Col>
                    </Row>
                    <Row className="rowInfoPerso optionsVilla">
                        <Col>
                            <Form.Check
                                type={"checkbox"}
                                id={`climatisation-checkbox`}
                                label={`Climatisation`}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type={"checkbox"}
                                id={`television-checkbox`}
                                label={`Télévision`}
                            />
                        </Col>
                    </Row>
                    <Row className="rowInfoPerso optionsVilla">
                        <Col>
                            <Form.Check
                                type={"checkbox"}
                                id={`jacuzzi-checkbox`}
                                label={`Jacuzzi`}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type={"checkbox"}
                                id={`barbecue-checkbox`}
                                label={`Barbecue`}
                            />
                        </Col>
                    </Row>
                    <Row className="rowInfoPerso optionsVilla">
                        <Col>
                            <Form.Check
                                type={"checkbox"}
                                id={`salleSport-checkbox`}
                                label={`Salle de sport`}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type={"checkbox"}
                                id={`autres-checkbox`}
                                label={`Autres`}
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                        </Col>
                    </Row>
                    <Row className="rowInfoPerso optionsVilla">
                        <Col className="othersOptionsVilla">
                            {isChecked && (
                                <Form.Group controlId="formGroupFirstName">
                                    <Form.Control placeholder="Autres ..." />
                                </Form.Group>
                            )}
                        </Col>
                    </Row>
                    <Row className="rowInfoPerso buttonOptionsVilla">
                        <Button
                            variant="primary"
                            type="submit"
                            className="buttonSubmitInfoPerso"
                        >
                            Modifier
                        </Button>
                    </Row>
                </Container>
            </Form>
        </>
    );
}

export default ProfilTabsOptionsVilla;
