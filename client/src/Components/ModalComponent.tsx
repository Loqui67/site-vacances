import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Row, Col, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Styles/styles.css";
import Checkbox from "./Checkbox";

interface IUser {
    name: string;
    firstName: string;
    email: string;
    phoneNumber: string;
    paypalLink: string;
    budget: number;
    options: {
        climatisation: boolean;
        television: boolean;
        jaccuzzi: boolean;
        barbecue: boolean;
        piscine: boolean;
        others?: {};
    };
}

function ModalComponent() {
    const [show, setShow] = useState(true);
    const [value, setValue] = useState<number | Array<number>>(300);
    const [isChecked, setIsChecked] = useState(false);
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState<IUser>({
        name: "",
        firstName: "",
        email: "",
        phoneNumber: "",
        paypalLink: "",
        budget: 300,
        options: {
            climatisation: false,
            television: false,
            jaccuzzi: false,
            barbecue: false,
            piscine: false,
        },
    });

    const handleSubmit = (event: any) => {
        console.log("coucou");
        const form = event.currentTarget;
        let validity = true;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            validity = false;
        }

        setValidated(true);
        if (validity) {
            setShow(false);
        }
    };

    const handleSliderChange = (value: number | Array<number>) => {
        if (value instanceof Array) value = value[0];
        setValue(value);
        setUser({ ...user, budget: value });
    };

    const handleCheckboxChange = (event: any) => {
        const { name, checked } = event.target;
        setUser({ ...user, options: { ...user.options, [name]: checked } });
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    console.log(user.options);
    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="front"
        >
            <Modal
                show={show}
                size="xl"
                onHide={() => setShow(true)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Informations nécessaires
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Form.Label className="titreModal">
                                Informations personnelles
                            </Form.Label>
                        </Row>
                        <Row className="rowInfoPerso optionsVilla">
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationCustomName"
                                >
                                    <Form.Label>Nom</Form.Label>
                                    <InputGroup hasValidation className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                                            </svg>
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Depp"
                                            autoFocus
                                            required
                                            name="name"
                                            onChange={handleChange}
                                        />{" "}
                                        <Form.Control.Feedback type="invalid">
                                            Entrez un nom valide.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationCustomSurname"
                                >
                                    <Form.Label>Prénom</Form.Label>
                                    <InputGroup hasValidation className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            <svg
                                                width="24"
                                                height="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                            >
                                                <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z" />
                                            </svg>
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Johny"
                                            autoFocus
                                            required
                                            name="firstName"
                                            onChange={handleChange}
                                        />{" "}
                                        <Form.Control.Feedback type="invalid">
                                            Entrez un prénom valide.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationCustomEmail"
                                >
                                    <Form.Label>Email address</Form.Label>
                                    <InputGroup hasValidation className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z" />
                                            </svg>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="email"
                                            placeholder="name@example.com"
                                            autoFocus
                                            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                                            required
                                            name="email"
                                            onChange={handleChange}
                                        />{" "}
                                        <Form.Control.Feedback type="invalid">
                                            Entrez une adresse email valide.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="rowInfoPerso optionsVilla">
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label>Numéro de téléphone</Form.Label>
                                    <InputGroup hasValidation className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
                                            </svg>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="tel"
                                            placeholder="0677893090"
                                            autoFocus
                                            pattern="(0|\+33)[1-9]( *[0-9]{2}){4}"
                                            required
                                            name="phoneNumber"
                                            onChange={handleChange}
                                        />{" "}
                                        <Form.Control.Feedback type="invalid">
                                            Entrez un numéro de téléphone
                                            valide.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label>Paypal</Form.Label>
                                    <InputGroup hasValidation className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M22 9.761c0 .536-.065 1.084-.169 1.627-.847 4.419-3.746 5.946-7.449 5.946h-.572c-.453 0-.838.334-.908.789l-.803 5.09c-.071.453-.456.787-.908.787h-2.736c-.39 0-.688-.348-.628-.732l1.386-8.88.062-.056h2.155c5.235 0 8.509-2.618 9.473-7.568.812.814 1.097 1.876 1.097 2.997zm-14.216 4.252c.116-.826.459-1.177 1.385-1.179l2.26-.002c4.574 0 7.198-2.09 8.023-6.39.8-4.134-2.102-6.442-6.031-6.442h-7.344c-.517 0-.958.382-1.038.901-2.304 14.835-2.97 18.607-3.038 19.758-.021.362.269.672.635.672h3.989l1.159-7.318z" />
                                            </svg>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="url"
                                            placeholder="https://paypal.me/example"
                                            autoFocus
                                            required
                                            name="paypalLink"
                                            onChange={handleChange}
                                        />{" "}
                                        <Form.Control.Feedback type="invalid">
                                            Entrez un paypal.me valide.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label className="titreModal">
                                Informations complémentaires, options pour la
                                villa
                            </Form.Label>
                        </Row>
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
                                    onChange={handleSliderChange}
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
                            <Checkbox
                                label="Climatisation"
                                name="climatisation"
                                OnChange={handleCheckboxChange}
                            />
                            <Checkbox
                                label="Télévision"
                                name="television"
                                OnChange={handleCheckboxChange}
                            />
                            <Checkbox
                                label="Jacuzzi"
                                name="jacuzzi"
                                OnChange={handleCheckboxChange}
                            />
                        </Row>
                        <Row className="rowInfoPerso optionsVilla">
                            <Checkbox
                                label="Barbecue"
                                name="barbecue"
                                OnChange={handleCheckboxChange}
                            />
                            <Checkbox
                                label={"Piscine"}
                                name="piscine"
                                OnChange={handleCheckboxChange}
                            />
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
                            <Col className="othersOptionsConnexion">
                                {isChecked && (
                                    <Form.Group controlId="formGroupFirstName">
                                        <Form.Control placeholder="Autres ..." />
                                    </Form.Group>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        variant="primary"
                        onClick={handleSubmit}
                    >
                        Suivant
                    </Button>
                </Modal.Footer>
            </Modal>
        </Form>
    );
}

export default ModalComponent;
