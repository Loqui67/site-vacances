import { Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import "./Styles/styles.css";

function SearchFilterVilla() {
    const [value, setValue] = useState<any>(1000);
    return (
        <Form>
            <Container>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <Row className="labelSearchVilla">
                            <Form.Label>Lieux:</Form.Label>
                        </Row>
                        <Row className="searchFilterVilla">
                            <Form.Check
                                type={"checkbox"}
                                id={`france-checkbox`}
                                label={`France`}
                            />
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row className="labelSearchVilla">
                            <Form.Label>Personnes:</Form.Label>
                        </Row>
                        <Row className="searchFilterVilla">
                            <Col sm={9}>Nombre de personnes minimum:</Col>
                            <Col sm={3} className="peopleNumber">
                                <Form.Control
                                    placeholder="10"
                                    autoFocus
                                    required
                                    type="number"
                                    step="1"
                                    name="people"
                                    min="1"
                                />{" "}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row className="labelSearchVilla">
                            <Form.Label>Prix maximum par personne</Form.Label>
                            <Col sm="auto">
                                <label className="sliderBarMin">50</label>
                            </Col>
                            <Col>
                                <Slider
                                    className="sliderBarVilla"
                                    min={50}
                                    max={1000}
                                    value={value}
                                    onChange={setValue}
                                />
                            </Col>
                            <Col sm="auto">
                                <label className="sliderBarMax">1000</label>
                            </Col>
                            <Col sm={3}>
                                <h6>{value}€ max</h6>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row className="labelSearchVilla">
                            <Form.Label className="sliderBarLabelProfil">
                                Options:
                            </Form.Label>
                        </Row>

                        <Row className="searchFilterVilla">
                            <Form.Check
                                type={"checkbox"}
                                id={`climatisation-checkbox`}
                                label={`Climatisation`}
                            />
                        </Row>
                        <Row className="searchFilterVilla">
                            <Form.Check
                                type={"checkbox"}
                                id={`beach-checkbox`}
                                label={`Bord de plage`}
                            />
                        </Row>
                        <Row className="searchFilterVilla">
                            <Form.Check
                                type={"checkbox"}
                                id={`jacuzzi-checkbox`}
                                label={`Jacuzzi`}
                            />
                        </Row>
                        <Row className="searchFilterVilla">
                            <Form.Check
                                type={"checkbox"}
                                id={`barbecue-checkbox`}
                                label={`Barbecue`}
                            />
                        </Row>
                        <Row className="searchFilterVilla">
                            <Form.Check
                                type={"checkbox"}
                                id={`piscine-checkbox`}
                                label={`Piscine`}
                            />
                        </Row>
                        <Row className="searchFilterVilla">
                            <Form.Check
                                type={"checkbox"}
                                id={`city-checkbox`}
                                label={`Proximité d'une ville`}
                            />
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </Form>
    );
}

export default SearchFilterVilla;
