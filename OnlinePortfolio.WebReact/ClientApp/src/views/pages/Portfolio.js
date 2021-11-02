import React from "react"
import { Row, Col, Card, CardBody, Button } from "reactstrap"
import userImg from "../../assets/img/portrait/small/avatar-s-11.jpg"
import certImg from "../../assets/img/сертификат.jpg"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import "../../assets/scss/pages/portfolio.scss"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class Portfolio extends React.Component{
  render(){
    return <div>
      <Card className="p-3">
        <CardBody>
          <Row className="py-2">
            <Col sm="12" md="8" xl="8">
              <div>
                <h5>Online</h5>
                <h1>Seitov Aliber</h1>
                <h6>Male, 17 years old, born September 20th 2004</h6>
                <a href="#">Edit</a>
              </div>
              <hr/>
              <div className="pt-1">
                <h3>Contacts</h3>
                <p>+7 701 986 7333 - preffered
                  <br/><a href="#">email@gmail.com</a>
                  <br/><a href="#">Edit</a>
                </p>
              </div>
            </Col>
            <Col sm="12" md="4" xl="4" className="d-flex justify-content-end">
              <div className="w-50">
                <img 
                  className="w-100"
                  src={userImg} 
                  alt="Portfolio"/>
                <Button className="w-100" color="link">Edit photo</Button>
              </div>
            </Col>
          </Row>
          <hr/>
          <Row className="py-2">
            <Col>
              <div className="d-flex align-items-center">
                <h2>List of achievements</h2>
                <a className="pl-1 edit-btn" href="#">Edit</a>
              </div>
              <p>My achievements for the entire period of study</p>
              <Carousel
                autoPlay
                infinite
                responsive={responsive}
                className="pt-1">
                <div>
                  <img src={certImg} className="pb-1 w-100"/>
                  <h6 className="cert-text">Certificate 1</h6>
                  <p className="cert-text">Description</p>
                </div>
                <div>
                  <img src={certImg} className="pb-1 w-100"/>
                  <h6 className="cert-text">Certificate 2</h6>
                  <p className="cert-text">Description</p>
                </div>
                <div>
                  <img src={certImg} className="pb-1 w-100"/>
                  <h6 className="cert-text">Certificate 3</h6>
                  <p className="cert-text">Description</p>
                </div>
                <div>
                  <img src={certImg} className="pb-1 w-100"/>
                  <h6 className="cert-text">Certificate 4</h6>
                  <p className="cert-text">Description</p>
                </div>
                <div>
                  <img src={certImg} className="pb-1 w-100"/>
                  <h6 className="cert-text">Certificate 5</h6>
                  <p className="cert-text">Description</p>
                </div>
              </Carousel>
            </Col>
          </Row>
          <hr/>
          <Row className="py-2">
            <Col>
              <div className="d-flex align-items-center">
                <h2>About me</h2>
                <a className="pl-1 edit-btn" href="#">Edit</a>
              </div>
              <p>Information technology, internet, telecom</p>
              <ul>
                <li>Programming, development</li>
                <li>Project management</li>
                <li>Web master</li>
              </ul>
            </Col>
          </Row>
          <hr/>
          <Row className="py-2">
            <Col>
              <div className="d-flex align-items-center w-100">
                <h2>External activities</h2>
                <a className="pl-1 edit-btn" href="#">Edit</a>
              </div>
              <div className="py-1">
                <Row className="py-2">
                  <Col xs="12" md="3" lg="2">
                    <h5>Accelerator</h5>
                  </Col>
                  <Col xs="12" md="5" lg="5">
                  Passed acceleration in Astanahub
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col xs="12" md="3" lg="2">
                    <h5>STEP Computer Academy</h5>
                  </Col>
                  <Col xs="12" md="5" lg="5">
                    Took courses in ASP.NET programming, UML-design, programming basics, MySQL
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col xs="12" md="3" lg="2">
                    <h5>Accelerator</h5>
                  </Col>
                  <Col xs="12" md="5" lg="5">
                  Passed acceleration in Astanahub
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  }
}

export default Portfolio