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
                <h5>Сейчас на сайте</h5>
                <h1>Сеитов Алибек</h1>
                <h6>Мужчина, 17 лет, родился 20 сентября 2004</h6>
                <a href="#">Редактировать</a>
              </div>
              <hr/>
              <div className="pt-1">
                <h3>Контакты</h3>
                <p>+7 701 986 7333 - предпочитаемый способ связи
                  <br/><a href="#">email@gmail.com</a>
                  <br/><a href="#">Редактировать</a>
                </p>
              </div>
            </Col>
            <Col sm="12" md="4" xl="4" className="d-flex justify-content-end">
              <div className="w-50">
                <img 
                  className="w-100"
                  src={userImg} 
                  alt="Portfolio"/>
                <Button className="w-100" color="link">Изменить фото</Button>
              </div>
            </Col>
          </Row>
          <hr/>
          <Row className="py-2">
            <Col>
              <div className="d-flex align-items-center">
                <h2>Лист достижений</h2>
                <a className="pl-1 edit-btn" href="#">Редактировать</a>
              </div>
              <p>Мои достижения за весь период обучения</p>
              <Carousel
                autoPlay
                infinite
                responsive={responsive}
                className="pt-1">
                <div>
                  <img src={certImg} className="pb-1 w-100"/>
                  <h6 className="cert-text">Сертификат 1</h6>
                  <p className="cert-text">Описание</p>
                </div>
                <div>
                  <img src={certImg} className="pb-1 w-100"/>
                  <h6 className="cert-text">Сертификат 2</h6>
                  <p className="cert-text">Описание</p>
                </div>
                <div>
                  <img src={certImg} className="pb-1 w-100"/>
                  <h6 className="cert-text">Сертификат 3</h6>
                  <p className="cert-text">Описание</p>
                </div>
                <div>
                  <img src={certImg} className="pb-1 w-100"/>
                  <h6 className="cert-text">Сертификат 4</h6>
                  <p className="cert-text">Описание</p>
                </div>
                <div>
                  <img src={certImg} className="pb-1 w-100"/>
                  <h6 className="cert-text">Сертификат 5</h6>
                  <p className="cert-text">Описание</p>
                </div>
              </Carousel>
            </Col>
          </Row>
          <hr/>
          <Row className="py-2">
            <Col>
              <div className="d-flex align-items-center">
                <h2>Обо мне</h2>
                <a className="pl-1 edit-btn" href="#">Редактировать</a>
              </div>
              <p>Информационные технологии, интернет, телеком</p>
              <ul>
                <li>Программирование, Разработка</li>
                <li>Управление проектами</li>
                <li>Web мастер</li>
              </ul>
            </Col>
          </Row>
          <hr/>
          <Row className="py-2">
            <Col>
              <div className="d-flex align-items-center w-100">
                <h2>Внешняя деятельность</h2>
                <a className="pl-1 edit-btn" href="#">Редактировать</a>
              </div>
              <div className="py-1">
                <Row className="py-2">
                  <Col xs="12" md="3" lg="2">
                    <h5>Акселератор</h5>
                  </Col>
                  <Col xs="12" md="5" lg="5">
                    Проходил акселерацию в Астанахабе
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col xs="12" md="3" lg="2">
                    <h5>Компьютерная академия ШАГ</h5>
                  </Col>
                  <Col xs="12" md="5" lg="5">
                    Проходил курсы по программированию на ASP.NET, UML-проектирование, основы программирования, MySQL
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col xs="12" md="3" lg="2">
                    <h5>Акселератор</h5>
                  </Col>
                  <Col xs="12" md="5" lg="5">
                    Проходил акселерацию в Астанахабе
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