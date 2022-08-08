import { Col, Form } from "react-bootstrap";

interface IProps {
    label: string;
    name: string;
    OnChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Checkbox(props: IProps) {
    return (
        <Col>
            <Form.Check
                type="checkbox"
                label={props.label}
                name={props.name}
                onChange={props.OnChange}
            />
        </Col>
    );
}

export default Checkbox;
