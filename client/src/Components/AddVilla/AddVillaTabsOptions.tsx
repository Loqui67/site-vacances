import { Form, Row, Col, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "../Styles/styles.css";

function AddVillaTabsoptionsAddVilla() {
    const [isChecked, setIsChecked] = useState(false);
    const [numbRoom, setNumbRoom] = useState<any>(0);

    return (
        <>
            <Form>
                <Container className="containerInfoVilla">
                    <Row className="rowInfoVilla optionsAddVilla">
                        <Form.Label className="labelAddVilla">
                            Prix total de la villa
                        </Form.Label>
                        <Col>
                            <Form.Group
                                className="mb-3"
                                controlId="validationCustomPrice"
                            >
                                <InputGroup hasValidation className="mb-3">
                                    <InputGroup.Text id="basic-addon3">
                                        <svg
                                            width="24"
                                            height="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                        >
                                            <path d="M22.587 14.624l-9.584-9.624h-4.928c.106.357.167.701.173 1.025.985.123 1.752.956 1.752 1.975 0 1.104-.896 2-2 2s-2-.896-2-2c0-.843.524-1.561 1.262-1.855.01-.337-.067-.731-.227-1.145h-2.035v8.005l9.623 9.582 7.964-7.963zm-14.489-7.604c-.088.215-.207.408-.362.568-.231.239-.472.394-.719.495.045.511.461.917.983.917.552 0 1-.448 1-1 0-.517-.399-.929-.902-.98zm15.902 7.605l-9.375 9.375-10.625-10.579v-5.914c-1.123-.512-2.394-1.091-4-1.091v-1c1.611 0 2.92.511 4 .994v-2.41h2.492c-1.054-1.53-3.181-3-6.492-3v-1c4.093 0 6.603 2.055 7.661 4h5.757l10.582 10.625zm-6.997 1.731l.521.521-.698.697-.54-.538c-.525.396-1.068.597-1.612.597-.652 0-1.272-.295-1.734-.753l.738-.739c.303.27.631.462 1.049.462.443 0 .896-.228 1.347-.679.361-.359.569-.736.621-1.122.102-.76-.489-1.258-1.078-1.258-.392 0-.875.184-1.475.563-1.225.773-2.402 1.243-3.413.232-.918-.917-.645-2.112-.076-2.938l-.653-.652.698-.699.626.627c.538-.45 1.097-.677 1.663-.677.665 0 1.286.316 1.761.792l-.744.744c-.731-.742-1.624-.545-2.276.106-.322.323-.52.675-.572 1.02-.122.81.6 1.218.961 1.218.338 0 .774-.174 1.456-.584.944-.563 1.593-.804 2.171-.804.513 0 .963.202 1.378.617 1.038 1.038.624 2.351-.119 3.247z" />
                                        </svg>
                                    </InputGroup.Text>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Prix de la villa"
                                    >
                                        <Form.Control
                                            placeholder="Prix"
                                            autoFocus
                                            required
                                            type="number"
                                            step="0.01"
                                            name="price"
                                        />{" "}
                                    </FloatingLabel>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group
                                className="mb-3"
                                controlId="validationCustomCaution"
                            >
                                <InputGroup hasValidation className="mb-3">
                                    <InputGroup.Text id="basic-addon3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
                                        </svg>
                                    </InputGroup.Text>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Caution"
                                    >
                                        <Form.Control
                                            placeholder="Caution"
                                            type="number"
                                            step="0.01"
                                            autoFocus
                                            required
                                            name="caution"
                                        />{" "}
                                    </FloatingLabel>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group
                                className="mb-3"
                                controlId="validationCustomRoom"
                            >
                                <InputGroup hasValidation className="mb-3">
                                    <InputGroup.Text id="basic-addon3">
                                        <svg
                                            width="24"
                                            height="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                        >
                                            <path d="M24 19v-7h-23v-7h-1v14h1v-2h22v2h1zm-20-12c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm19 4c0-1.657-1.343-3-3-3h-13v3h16z" />
                                        </svg>
                                    </InputGroup.Text>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Nombre de chambres"
                                    >
                                        <Form.Control
                                            placeholder="Chambre"
                                            type="number"
                                            autoFocus
                                            required
                                            name="room"
                                            onChange={(e) =>
                                                setNumbRoom(e.target.value)
                                            }
                                        />{" "}
                                    </FloatingLabel>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <>
                        {() => {
                            for (let i = 0; i <= numbRoom; i++) {
                                <Row className="rowInfoVilla optionsAddVilla">
                                    <Form.Label className="labelAddVilla">
                                        Chambre {i}
                                    </Form.Label>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="validationCustomSimpleBed"
                                        >
                                            <InputGroup
                                                hasValidation
                                                className="mb-3"
                                            >
                                                <InputGroup.Text id="basic-addon3">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                    >
                                                        <path d="M22.587 14.624l-9.584-9.624h-4.928c.106.357.167.701.173 1.025.985.123 1.752.956 1.752 1.975 0 1.104-.896 2-2 2s-2-.896-2-2c0-.843.524-1.561 1.262-1.855.01-.337-.067-.731-.227-1.145h-2.035v8.005l9.623 9.582 7.964-7.963zm-14.489-7.604c-.088.215-.207.408-.362.568-.231.239-.472.394-.719.495.045.511.461.917.983.917.552 0 1-.448 1-1 0-.517-.399-.929-.902-.98zm15.902 7.605l-9.375 9.375-10.625-10.579v-5.914c-1.123-.512-2.394-1.091-4-1.091v-1c1.611 0 2.92.511 4 .994v-2.41h2.492c-1.054-1.53-3.181-3-6.492-3v-1c4.093 0 6.603 2.055 7.661 4h5.757l10.582 10.625zm-6.997 1.731l.521.521-.698.697-.54-.538c-.525.396-1.068.597-1.612.597-.652 0-1.272-.295-1.734-.753l.738-.739c.303.27.631.462 1.049.462.443 0 .896-.228 1.347-.679.361-.359.569-.736.621-1.122.102-.76-.489-1.258-1.078-1.258-.392 0-.875.184-1.475.563-1.225.773-2.402 1.243-3.413.232-.918-.917-.645-2.112-.076-2.938l-.653-.652.698-.699.626.627c.538-.45 1.097-.677 1.663-.677.665 0 1.286.316 1.761.792l-.744.744c-.731-.742-1.624-.545-2.276.106-.322.323-.52.675-.572 1.02-.122.81.6 1.218.961 1.218.338 0 .774-.174 1.456-.584.944-.563 1.593-.804 2.171-.804.513 0 .963.202 1.378.617 1.038 1.038.624 2.351-.119 3.247z" />
                                                    </svg>
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInputGrid"
                                                    label="Lit Simple"
                                                >
                                                    <Form.Control
                                                        placeholder="0"
                                                        autoFocus
                                                        required
                                                        type="number"
                                                        name="simpleBed"
                                                    />{" "}
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="validationCustomDoubleBed"
                                        >
                                            <InputGroup
                                                hasValidation
                                                className="mb-3"
                                            >
                                                <InputGroup.Text id="basic-addon3">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                    >
                                                        <path d="M22.587 14.624l-9.584-9.624h-4.928c.106.357.167.701.173 1.025.985.123 1.752.956 1.752 1.975 0 1.104-.896 2-2 2s-2-.896-2-2c0-.843.524-1.561 1.262-1.855.01-.337-.067-.731-.227-1.145h-2.035v8.005l9.623 9.582 7.964-7.963zm-14.489-7.604c-.088.215-.207.408-.362.568-.231.239-.472.394-.719.495.045.511.461.917.983.917.552 0 1-.448 1-1 0-.517-.399-.929-.902-.98zm15.902 7.605l-9.375 9.375-10.625-10.579v-5.914c-1.123-.512-2.394-1.091-4-1.091v-1c1.611 0 2.92.511 4 .994v-2.41h2.492c-1.054-1.53-3.181-3-6.492-3v-1c4.093 0 6.603 2.055 7.661 4h5.757l10.582 10.625zm-6.997 1.731l.521.521-.698.697-.54-.538c-.525.396-1.068.597-1.612.597-.652 0-1.272-.295-1.734-.753l.738-.739c.303.27.631.462 1.049.462.443 0 .896-.228 1.347-.679.361-.359.569-.736.621-1.122.102-.76-.489-1.258-1.078-1.258-.392 0-.875.184-1.475.563-1.225.773-2.402 1.243-3.413.232-.918-.917-.645-2.112-.076-2.938l-.653-.652.698-.699.626.627c.538-.45 1.097-.677 1.663-.677.665 0 1.286.316 1.761.792l-.744.744c-.731-.742-1.624-.545-2.276.106-.322.323-.52.675-.572 1.02-.122.81.6 1.218.961 1.218.338 0 .774-.174 1.456-.584.944-.563 1.593-.804 2.171-.804.513 0 .963.202 1.378.617 1.038 1.038.624 2.351-.119 3.247z" />
                                                    </svg>
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInputGrid"
                                                    label="Lit Double"
                                                >
                                                    <Form.Control
                                                        placeholder="0"
                                                        autoFocus
                                                        required
                                                        type="number"
                                                        name="doubleBed"
                                                    />{" "}
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="validationCustomBunkBed"
                                        >
                                            <InputGroup
                                                hasValidation
                                                className="mb-3"
                                            >
                                                <InputGroup.Text id="basic-addon3">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                    >
                                                        <path d="M22.587 14.624l-9.584-9.624h-4.928c.106.357.167.701.173 1.025.985.123 1.752.956 1.752 1.975 0 1.104-.896 2-2 2s-2-.896-2-2c0-.843.524-1.561 1.262-1.855.01-.337-.067-.731-.227-1.145h-2.035v8.005l9.623 9.582 7.964-7.963zm-14.489-7.604c-.088.215-.207.408-.362.568-.231.239-.472.394-.719.495.045.511.461.917.983.917.552 0 1-.448 1-1 0-.517-.399-.929-.902-.98zm15.902 7.605l-9.375 9.375-10.625-10.579v-5.914c-1.123-.512-2.394-1.091-4-1.091v-1c1.611 0 2.92.511 4 .994v-2.41h2.492c-1.054-1.53-3.181-3-6.492-3v-1c4.093 0 6.603 2.055 7.661 4h5.757l10.582 10.625zm-6.997 1.731l.521.521-.698.697-.54-.538c-.525.396-1.068.597-1.612.597-.652 0-1.272-.295-1.734-.753l.738-.739c.303.27.631.462 1.049.462.443 0 .896-.228 1.347-.679.361-.359.569-.736.621-1.122.102-.76-.489-1.258-1.078-1.258-.392 0-.875.184-1.475.563-1.225.773-2.402 1.243-3.413.232-.918-.917-.645-2.112-.076-2.938l-.653-.652.698-.699.626.627c.538-.45 1.097-.677 1.663-.677.665 0 1.286.316 1.761.792l-.744.744c-.731-.742-1.624-.545-2.276.106-.322.323-.52.675-.572 1.02-.122.81.6 1.218.961 1.218.338 0 .774-.174 1.456-.584.944-.563 1.593-.804 2.171-.804.513 0 .963.202 1.378.617 1.038 1.038.624 2.351-.119 3.247z" />
                                                    </svg>
                                                </InputGroup.Text>
                                                <FloatingLabel
                                                    controlId="floatingInputGrid"
                                                    label="Lit Superposé"
                                                >
                                                    <Form.Control
                                                        placeholder="0"
                                                        autoFocus
                                                        required
                                                        type="number"
                                                        name="bunkBed"
                                                    />{" "}
                                                </FloatingLabel>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>;
                            }
                        }}
                    </>
                    <Row className="rowInfoVilla optionsAddVilla">
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
                        <Col>
                            <Form.Check
                                type={"checkbox"}
                                id={`piscine-checkbox`}
                                label={`Piscine`}
                            />
                        </Col>
                    </Row>
                    <Row className="rowInfoVilla optionsAddVilla">
                        <Col xs={2} className="othersoptionsAddVillaCheckbox">
                            <Form.Check
                                type={"checkbox"}
                                id={`autres-checkbox`}
                                label={`Autres`}
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                        </Col>
                        <Col className="othersoptionsAddVillaInput">
                            {isChecked && (
                                <Form.Group controlId="formGroupFirstName">
                                    <Form.Control placeholder="Autres ..." />
                                </Form.Group>
                            )}
                        </Col>
                    </Row>
                    <Row className="rowInfoVilla buttonoptionsAddVilla">
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

export default AddVillaTabsoptionsAddVilla;
