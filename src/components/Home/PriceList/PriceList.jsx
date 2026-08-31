import "./PriceList.css";
import { Col, Container, Row } from "react-bootstrap"
import EnquireForm from "../../Layouts/EnquireForm/EnquireForm"
import bg from "./vamana-hero.png"
const PriceList = () => {
    return(
<section
  className="home-pricelist-section padding-top padding-bottom"
  id="pricelist"
>
    <img src={bg} className="backgorndImg" alt="" />
    <Container>
        <Row>
            <Col lg={6}>
                <div className="procelistFormSection mb-[80px]">
                    <h2 className="!text-[30px] font-semibold text-white">
                        Book Your Free Consultation
                    </h2>

                    <span className="font-normal text-[18px] text-white mt-[40px] flex mb-[60px]">
                        Connect with our property experts for project insights,
                        exclusive developer pricing, site visit assistance,
                        home loan support, and limited-time offers.
                    </span>

                    <div className="rearNO flex flex-col font-semibold gap-2 text-[16px] text-white">
                        <span>RERA Number : PBRERA-SAS79-PR1018</span>
                        {/* <span>Contact Number : +91 7339903423</span> */}
                        <span>Contact Number : +91 7717689799</span>

                        
 
                    </div>
                </div>
            </Col>

            <Col lg={6}>
                <div className="price_list_contact_block">
                    <EnquireForm
                        title="Vamana Flats – Latest Rates & Pricing"
                        button="Download Now"
                        formId="pricelist"
                    />
                </div>
            </Col>
        </Row>
    </Container>
</section>
    )
}

export default PriceList