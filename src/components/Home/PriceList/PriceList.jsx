import "./PriceList.css";
import { Col, Container, Row } from "react-bootstrap"
import EnquireForm from "../../Layouts/EnquireForm/EnquireForm"

const PriceList = () => {
    return(
        <section className="home-pricelist-section padding-top padding-bottom" id="pricelist">
            <Container>
                <Row>
                    <Col>
                        <div className="price_list_contact_block">
                            <EnquireForm title="Vamana Flats – Latest Rates & Pricing" button={"Submit Enquiry"} formId={"pricelist"} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PriceList