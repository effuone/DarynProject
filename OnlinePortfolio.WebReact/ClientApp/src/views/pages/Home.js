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
            <h1 className="text-offer">Подай свое портфолио в лучшие университеты мира в один клик!</h1>
            <p className="text-search">Введите название университета для поиска</p>
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
                  <h3>Nazarbayev Universityт</h3>
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
                  <h3>Nazarbayev Universityт</h3>
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
                  <h3>Nazarbayev Universityт</h3>
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
                  <h3>Nazarbayev Universityт</h3>
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
                  <h3>Nazarbayev Universityт</h3>
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
                  <h3>Nazarbayev Universityт</h3>
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
            <h3 className="pb-3">Университеты Казахстана</h3>
            <div>
              <a href="#"><p>Казахский национальный университет имени аль-Фараби</p></a>
              <a href="#"><p>Евразийский национальный университет имени Л.Н. Гумилева</p></a>
              <a href="#"><p>Казахская национальная академия искусств имени Т. Жургенова</p></a>
              <a href="#"><p>Казахский национальный аграрный университет</p></a>
              <a href="#"><p>Казахский национальный исследовательский технический университет им. К.И. Сатпаева</p></a>
              <a href="#"><p>Казахская национальная академия хореографии</p></a>
              <a href="#"><p>Казахская национальная консерватория имени Курмангазы</p></a>
              <a href="#"><p>Казахский национальный женский педагогический университет</p></a>
              <a href="#"><p>Казахский национальный медицинский университет имени С.Д. Асфендиярова</p></a>
            </div>
          </Col>
          <Col xs="12" md="6" lg="7">
            <h3 className="pb-3">Популярные университеты в Казахстане</h3>
            <Row className="pb-2">
              <Col>
                <h4>Nazarbayev university</h4>
                <p>г. Нур-Султан</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
              <Col>
                <h4>Nazarbayev university</h4>
                <p>г. Нур-Султан</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
            </Row>
            <Row className="pb-2">
              <Col>
                <h4>Nazarbayev university</h4>
                <p>г. Нур-Султан</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
              <Col>
                <h4>Nazarbayev university</h4>
                <p>г. Нур-Султан</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
            </Row>
            <Row className="pb-2">
              <Col>
                <h4>Nazarbayev university</h4>
                <p>г. Нур-Султан</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
              <Col>
                <h4>Nazarbayev university</h4>
                <p>г. Нур-Султан</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
            </Row>
            <Row className="pb-2">
              <Col>
                <h4>Nazarbayev university</h4>
                <p>г. Нур-Султан</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
              <Col>
                <h4>Nazarbayev university</h4>
                <p>г. Нур-Султан</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
            </Row>
            <Row className="pb-2">
              <Col>
                <h4>Nazarbayev university</h4>
                <p>г. Нур-Султан</p>
                <Button className="see-btn" color="link">See more</Button>
              </Col>
              <Col>
                <h4>Nazarbayev university</h4>
                <p>г. Нур-Султан</p>
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