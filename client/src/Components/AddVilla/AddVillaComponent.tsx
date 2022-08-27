import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/styles.css";
import AddVillaTabsComponent from "./AddVillaTabsComponent";

function AddVillaComponent() {
    return (
        <>
            <Container>
                <Row className="addVilla">
                    <Col sm={3} className="pictureVilla">
                        <Image
                            src="https://i.pinimg.com/originals/ed/bf/ad/edbfad6bf79e808a880762bcb068f634.jpg"
                            fluid
                        />
                    </Col>
                    <Col className="addVillaTabsCss">
                        <AddVillaTabsComponent />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AddVillaComponent;
