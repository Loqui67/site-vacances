import ProfilLeft from "./ProfilLeft";
import ProfilRight from "./ProfilRight";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/styles.css";

function ProfilPage() {
    return (
        <div className="backgroundColorProfil">
            <div className="banniere"></div>
            <Container>
                <Row>
                    <Col sm={3} className="profilCss">
                        <ProfilLeft></ProfilLeft>
                    </Col>
                    <Col sm="auto" className="profilCss">
                        <ProfilRight></ProfilRight>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProfilPage;
