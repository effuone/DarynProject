import React from "react"
import { Card, CardBody } from "reactstrap"
import aboutImg from "../../assets/img/backgrounds/search-block.jpg"

class About extends React.Component{
  render(){
    return <Card>
      <CardBody className="p-3">
        <h1 className="pb-2">About</h1>
        <p>Today, education is the key to a successful future and that is why all high school students are persistently preparing for admission to prestigious universities.
The purpose of my research is to create a product in the form of a website that will help university applicants with creating a portfolio and finding the necessary information.
Hypothesis: let's assume that based on the conducted research and the use of technology ASP.NET you can create a website that provides a service that will help incoming students with compiling a portfolio and storing it in an online cloud.
Stages of research: To identify the relevance of the research problem, I studied and analyzed a number of primary and secondary sources. The research stage was based on the stages of a personal international baccalaureate project, such as research, planning, creation and evaluation of an idea.
<br/><br/>
Research methods:
theoretical analysis of sources and comparison of various constructions;
conducting an experiment to create a model of the selected part;
conducting an interview/survey to evaluate the product;
drawing up ideas to improve the model.
<br/><br/>
The scientific novelty of the study is that the use of an online service and a database is much more convenient than conservative ways of storing files, folders, and videos in physical format. Research has shown high-quality website architecture using technology. .NET can be used to build software independently from scratch. The goal of the project has been achieved. Having studied the architecture in detail ASP.NET Core, I have created a full-fledged website where, after logging in, you can add all the necessary information about yourself, your achievements, academic skills, extracurricular activities, certificates, etc. to create a generalized page with text. The site also registers all the necessary information about universities so that students know what they need for admission. In the course of the work, the REST API microservice was written to interact with the database, and the layout of the client part was done. The hypothesis of the project is confirmed, as I was able to create a website with some solutions to help university applicants with the organization of a portfolio and its storage on the site. In the future, having a reflection on my website and feedback from specialists will make it easier for me to add new improvements to my site.
</p>
        <img className="w-100" src={aboutImg}/>
      </CardBody>
    </Card>
  }
}

export default About