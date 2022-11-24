import { Form, Row, Col, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import "../Styles/styles.css";

function AddVillaTabsInfo() {
    return (
        <Form>
            <Container className="containerInfoVilla">
                <Row className="rowInfoVilla">
                    <Form.Label className="labelAddVilla">
                        Informations sur la villa
                    </Form.Label>
                </Row>
                <Row className="rowInfoVilla">
                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustomName"
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
                                        <path d="M13 23h-6v-6.065c.626-.155 1.04-.496 1.319-1.046 2.152.773 3.647-2.303 1.819-3.556.949-1.116.245-2.727-1.207-2.522-.698-2.361-4.151-2.379-4.85 0-1.405-.227-2.186 1.199-1.385 2.289-1.648 1.404-.105 4.036 1.872 3.467.217.703.78 1.184 1.432 1.357v6.076h-2v-4.877c-.304-.239-.551-.515-.546-.51-2.001-.266-3.454-2.114-3.454-4.069 0-.583.129-1.173.41-1.735-.322-1.653.654-3.337 2.356-3.874l.018-.006c.827-1.162 2.152-1.823 3.517-1.893l5.682-5.036 12.017 10.647-1.33 1.491-10.687-9.469-3.284 2.908c.308.164.595.36.855.59l2.419-2.149c1.126.998 2.255 1.995 3.384 2.993l2.258 1.994 3.385 2.995v10h-6v-5h-2v5zm-2-5.585c-.713.445-1.259.529-2 .585v3h2v-3.585zm1.415-1.406l4.585-.009v5h2v-7.117l-7.027-6.196-.813.72c1.124.795 1.697 2.21 1.351 3.614.646 1.147.669 2.693-.096 3.988m-5.962-3.688c1.495-1.022 3.241.769 2.302 2.224.002-1.472-.852-2.279-2.302-2.224m-2.118 1.19c-1.247-1.865 1.004-4.164 2.904-2.894-1.892-.032-2.946 1.043-2.904 2.894" />
                                    </svg>
                                </InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Nom de la villa"
                                >
                                    <Form.Control
                                        placeholder="Villa de luxe"
                                        autoFocus
                                        required
                                        name="name"
                                    />{" "}
                                </FloatingLabel>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustomLink"
                        >
                            <InputGroup hasValidation className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                                    </svg>
                                </InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Lien vers la villa"
                                >
                                    <Form.Control
                                        placeholder="https://www.airbnb.fr/villa-de-luxe-paris-1"
                                        autoFocus
                                        required
                                        name="link"
                                    />{" "}
                                </FloatingLabel>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="rowInfoVilla">
                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustomDescription"
                        >
                            <InputGroup hasValidation className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                                    </svg>
                                </InputGroup.Text>

                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Descriptif de la villa"
                                >
                                    <Form.Control
                                        className="textarea"
                                        as="textarea"
                                        style={{ height: "85px" }}
                                        placeholder="Description de la villa"
                                    />
                                </FloatingLabel>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="rowInfoVilla">
                    <Form.Label className="labelAddVilla">
                        Adresse de la villa
                    </Form.Label>
                </Row>
                <Row className="rowInfoVilla">
                    <Col xs={4}>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustomAdress"
                        >
                            <InputGroup hasValidation className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-signpost-2"
                                        viewBox="0 0 16 16"
                                    >
                                        {" "}
                                        <path d="M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0zM13.5 3l.75 1-.75 1H2V3h11.5zm.5 5v2H2.5l-.75-1 .75-1H14z" />{" "}
                                    </svg>
                                </InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Adresse"
                                >
                                    <Form.Control
                                        placeholder="Adresse"
                                        autoFocus
                                        required
                                        name="adress"
                                    />{" "}
                                </FloatingLabel>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustomTown"
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
                                        <path d="M12 2h2v2h2v3.702l7 2.618v12.68h1v1h-24v-1h1v-11h6v-8h2v-2h2v-2h1v2zm3 3h-7v18h1v-2h5v2h1v-18zm-2 17h-3v1h3v-1zm8 1h1v-11.987l-6-2.243v14.23h1v-2h4v2zm-14-10h-5v10h1v-2h3v2h1v-10zm-2 9h-1v1h1v-1zm15 0h-2v1h2v-1zm-16-5v2h-1v-2h1zm2 0v2h-1v-2h1zm5-10v12h-1v-12h1zm10 11v1h-4v-1h4zm-8-11v12h-1v-12h1zm8 9v1h-4v-1h4zm-17-2v2h-1v-2h1zm2 0v2h-1v-2h1zm15 0v1h-4v-1h4zm0-2v1h-4v-1h4zm-8-9h-3v1h3v-1z" />
                                    </svg>
                                </InputGroup.Text>

                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Ville"
                                >
                                    <Form.Control
                                        placeholder="Nom de la ville"
                                        autoFocus
                                        required
                                        name="town"
                                    />{" "}
                                </FloatingLabel>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustomCP"
                        >
                            <InputGroup hasValidation className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-envelope"
                                        viewBox="0 0 16 16"
                                    >
                                        {" "}
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />{" "}
                                    </svg>
                                </InputGroup.Text>

                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="CP"
                                >
                                    <Form.Control
                                        placeholder="Code Postal"
                                        autoFocus
                                        required
                                        name="cp"
                                    />{" "}
                                </FloatingLabel>
                            </InputGroup>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustomPays"
                        >
                            <InputGroup hasValidation className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z" />
                                    </svg>
                                </InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Pays"
                                >
                                    <Form.Control
                                        placeholder="Pays"
                                        autoFocus
                                        required
                                        name="pays"
                                    />{" "}
                                </FloatingLabel>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="rowInfoVilla">
                    <Form.Label className="labelAddVilla">
                        Ajout d'un commentaire
                    </Form.Label>
                </Row>
                <Row className="rowInfoVilla">
                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustomComment"
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
                                        <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007zm-5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
                                    </svg>
                                </InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingTextarea2"
                                    label="Commentaire (facultatif)"
                                >
                                    <Form.Control
                                        className="textarea"
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: "85px" }}
                                    />
                                </FloatingLabel>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default AddVillaTabsInfo;
