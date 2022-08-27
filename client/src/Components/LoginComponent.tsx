import "./Styles/stylesConnexion.css";
import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

function LoginComponent({ setToken }: any) {
    const [username, setUserName] = useState<any>();
    const [password, setPassword] = useState<any>();

    return (
        <div className="backgroundConnexion">
            <Form>
                <Container className="login-box">
                    <h3>Page de connexion</h3>
                    <Row>
                        <Form.Floating className="user-box">
                            <input type="text" name="" required></input>
                            <label htmlFor="floatingInputCustom">
                                Identifiant
                            </label>
                        </Form.Floating>
                    </Row>
                    <Row>
                        <div className="user-box">
                            <input type="password" name="" required></input>
                            <label>Mot de passe</label>
                        </div>
                    </Row>
                    <Row>
                        <Button
                            variant="info"
                            type="submit"
                            className="buttonSubmitProfil btnConnexion"
                        >
                            Connexion
                        </Button>
                    </Row>
                </Container>
            </Form>
        </div>
    );
}

export default LoginComponent;
