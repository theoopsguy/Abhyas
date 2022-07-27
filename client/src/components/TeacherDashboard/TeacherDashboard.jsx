import { Link } from 'react-router-dom'
import { Button,Alert} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavigationBar from '../Global/NavigationBar'
import LandingCard from "../Landing/LandingCard";
import "./TeacherDashboard.css";
import contributeImg from './contribute.png'
import generateImg from './generate.png'
import qbankImg from './qbank.png'


function TeacherDashboard() 
{
    return (
        
        <div>
           <NavigationBar/>
           <div className="mainHeading">
              {/* <Alert className='headerbox text-center'>Teacher Dashboard</Alert> */}
              <h1 className='text-center'><b>Teacher Dashboard</b></h1>
          </div>

            <div className="horizontalBox">
                <Container class='mt-60'>
                    <Row  md={3} className="g-4 ">
                        <Col className='d-flex justify-content-center mt-20'>
                            <div className="imagesOne">
                                <LandingCard  imgSource={contributeImg} link='/contribute' title='Contribute A Question'/>
                            </div>
                            
                        </Col>

                        <Col className='d-flex justify-content-center'>
                            <LandingCard imgSource={generateImg} link='/GenerateQPaper' title='Generate Question Paper'/>
                        </Col>
                        
                        <Col className='d-flex justify-content-center'>
                            <LandingCard imgSource={qbankImg} link='/qBank' title='Question Bank'/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        
      
    )
}

export default TeacherDashboard