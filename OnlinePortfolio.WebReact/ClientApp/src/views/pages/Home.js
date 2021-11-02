import React from "react"
import { Card, CardHeader, CardBody, Button, InputGroup, InputGroupAddon, Input, Row, Col } from "reactstrap"
import "../../assets/scss/pages/home.scss"

class Home extends React.Component{
  render(){
    return (
    <div>
      <Card className="search-block">
        <CardBody className="overlay d-flex align-items-center justify-content-center">
          <div className="py-3 w-50">
            <h1 className="text-offer">Submit your portfolio to the best universities in the world in one click!</h1>
            <p className="text-search">Enter the name of the university to search</p>
            <InputGroup>
              <Input placeholder="University name"/>
              <InputGroupAddon addonType='append'>
                <Button color='primary'>
                  Search
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </CardBody>
      </Card>
      <div>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h3>Nazarbayev University</h3>
                </CardHeader>
                <CardBody>
                  <p>Nazarbayev University is an autonomous research university 
                    in Nur-Sultan, the capital of Kazakhstan. Founded as a result 
                    of the initiative of the first President of Kazakhstan, 
                    Nursultan Nazarbayev in 2010, it is an English-medium institution, 
                    with an international faculty and staff.</p>
                  <Button className="see-btn" color="link">
                    See more
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader>
                  <h3>Nazarbayev University</h3>
                </CardHeader>
                <CardBody>
                  <p>Nazarbayev University is an autonomous research university 
                    in Nur-Sultan, the capital of Kazakhstan. Founded as a result 
                    of the initiative of the first President of Kazakhstan, 
                    Nursultan Nazarbayev in 2010, it is an English-medium institution, 
                    with an international faculty and staff.</p>
                  <Button className="see-btn" color="link">
                    See more
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader>
                  <h3>Nazarbayev University</h3>
                </CardHeader>
                <CardBody>
                  <p>Nazarbayev University is an autonomous research university 
                    in Nur-Sultan, the capital of Kazakhstan. Founded as a result 
                    of the initiative of the first President of Kazakhstan, 
                    Nursultan Nazarbayev in 2010, it is an English-medium institution, 
                    with an international faculty and staff.</p>
                  <Button className="see-btn" color="link">
                    See more
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h3>Nazarbayev University</h3>
                </CardHeader>
                <CardBody>
                  <p>Nazarbayev University is an autonomous research university 
                    in Nur-Sultan, the capital of Kazakhstan. Founded as a result 
                    of the initiative of the first President of Kazakhstan, 
                    Nursultan Nazarbayev in 2010, it is an English-medium institution, 
                    with an international faculty and staff.</p>
                  <Button className="see-btn" color="link">
                    See more
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader>
                  <h3>Nazarbayev University</h3>
                </CardHeader>
                <CardBody>
                  <p>Nazarbayev University is an autonomous research university 
                    in Nur-Sultan, the capital of Kazakhstan. Founded as a result 
                    of the initiative of the first President of Kazakhstan, 
                    Nursultan Nazarbayev in 2010, it is an English-medium institution, 
                    with an international faculty and staff.</p>
                  <Button className="see-btn" color="link">
                    See more
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader>
                  <h3>Nazarbayev University</h3>
                </CardHeader>
                <CardBody>
                  <p>Nazarbayev University is an autonomous research university 
                    in Nur-Sultan, the capital of Kazakhstan. Founded as a result 
                    of the initiative of the first President of Kazakhstan, 
                    Nursultan Nazarbayev in 2010, it is an English-medium institution, 
                    with an international faculty and staff.</p>
                  <Button className="see-btn" color="link">
                    See more
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
      <div>
        <Row>
          <Col xs="12" md="4" lg="3">
            <h3 className="pb-3">Universities of Kazakhstan</h3>
            <div>
              <a href="#"><p>Al-Farabi Kazakh National University</p></a>
              <a href="#"><p>Eurasian National University named after L.N. Gumilyov</p></a>
              <a href="#"><p>Kazakh National Academy of Arts named after T. Zhurgenov</p></a>
              <a href="#"><p>Kazakh National Agrarian University</p></a>
              <a href="#"><p>Kazakh National Research Technical University named after K.I. Satpayeva</p></a>
              <a href="#"><p>Kazakh National Academy of Choreography</p></a>
              <a href="#"><p>Kurmangazy Kazakh National Conservatory</p></a>
              <a href="#"><p>Kazakh National Women's Pedagogical University</p></a>
              <a href="#"><p>Kazakh National Medical University named after S.D. Asfendiyarova</p></a>
            </div>
          </Col>
          <Col xs="12" md="6" lg="7">
            <h3 className="pb-3">Popular universities in Kazakhstan</h3>
            <Row className="pb-2">
              <Col>
                <h4>Nazarbayev university</h4>
                <p>Nur-Sultan</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
              <Col>
                <h4>Nazarbayev university</h4>
                <p>Nur-Sultan</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
            </Row>
            <Row className="pb-2">
              <Col>
                <h4>Nazarbayev university</h4>
                <p>Nur-Sultan</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
              <Col>
                <h4>Nazarbayev university</h4>
                <p>Nur-Sultan</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
            </Row>
            <Row className="pb-2">
              <Col>
                <h4>Nazarbayev university</h4>
                <p>Nur-Sultan</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
              <Col>
                <h4>Nazarbayev university</h4>
                <p>Nur-Sultan</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
            </Row>
            <Row className="pb-2">
              <Col>
                <h4>Nazarbayev university</h4>
                <p>Nur-Sultan</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
              <Col>
                <h4>Nazarbayev university</h4>
                <p>Nur-Sultan</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
            </Row>
            <Row className="pb-2">
              <Col>
                <h4>Nazarbayev university</h4>
                <p>Nur-Sultan</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
              <Col>
                <h4>Nazarbayev university</h4>
                <p>Nur-Sultan</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
    )
  }
}

export default Home