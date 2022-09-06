import { Col, Container, Pagination, Row } from "react-bootstrap";
import SearchFilterVilla from "./SearchFilterVilla";
import VillaCard from "./VillaCard";

function FindVilla() {
    return (
        <Container>
            <Row className="villa">
                <Col sm={4} className="searchVilla">
                    <SearchFilterVilla />
                </Col>
                <Col>
                    <Row>
                        <VillaCard />
                    </Row>
                    <Row className="villa pagination">
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item>{14}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default FindVilla;
