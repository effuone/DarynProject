import React from "react"
import { Card, CardHeader, CardBody, Row, Col, InputGroup, Input, InputGroupAddon, Button } from "reactstrap"
import "../../assets/scss/pages/home.scss"

class Profile extends React.Component{
  render(){
    return <Card>
      <CardBody>
        <h1>Search</h1>
        <InputGroup className="mb-2">
          <Input placeholder="Search..."/>
          <InputGroupAddon addonType='append'>
            <Button color='primary'>
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <div>
          <Row>
            <Col xs="12" md="12" lg="12">
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
            <Col xs="12" md="12" lg="12">
              <Card>
                <CardHeader>
                  <h3>Al-Farabi Kazakh National University</h3>
                </CardHeader>
                <CardBody>
                  <p>Al-Farabi Kazakh National University, also called KazGU 
                    or KazNU, is a university in Almaty, Kazakhstan. Named 
                    after the Eastern philosopher and scholar al-Farabi, it 
                    is one of the country's largest universities.</p>
                  <Button className="see-btn" color="link">
                    See more
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>
  }
}

export default Profile