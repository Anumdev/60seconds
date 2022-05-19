import React, { Component } from 'react';
import { Button, Card, Container, Row, Col, FormControl, Form, FormGroup } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import ProgressBar from './ProgressBar';
import configData from './../../config.json';
import './InstantOffer.css';
import axios from 'axios';
import Moment from 'react-moment';
import './Appointment.css';
import HomeCheck from './../../assets/home-check.png';
import HomePrice from './../../assets/home-price.png';
import HomeTime from './../../assets/appointment.png';
import HomeEmail from './../../assets/home-email.png';
import CheckList from './../../assets/checklist.png';

class InstantOffer extends Component{

    constructor(props){
        super(props);
        this.state = {
            step: this.props.inputValues.step,
        } 
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }


    componentDidMount() {
        const {inputValues: { address, area_sq_ft, partial_bathroom, built_year, floors, bedrooms, covered_parking, full_bathroom, carport_spaces, property_condition, firstName, lastName, email, city, state, zip }} = this.props;
        let date = new Date();
        date.setDate(date.getDate() + 5 );
        this.setState({
            validity: date
        });
    }

    render(){

        const {inputValues: { address, area_sq_ft, partial_bathroom, built_year, floors, bedrooms, covered_parking, full_bathroom, carport_spaces, property_condition, firstName, lastName, email }} = this.props;
        
        return (
            <Container className='p-md-5 w-xl-75 m-auto'>
                <p className="text-center text-dark m-0">Preparing cash offer for: <br/><b>{this.props.inputValues.address}</b></p>
                <ProgressBar active={this.state.step} changeStep={this.props.changeStep}/>
                <h1 className="text-default text-center w-md-75 mb-5 m-auto p-3">Schedule a video walktrough</h1>
                <Container className="w-md-75">
                    <Row>
                        <Col className="border-right pe-5">
                            <ul className=" mt-1 text-dark check-list mb-5">
                                <li className="">
                                    An Expert will review your infoIcon
                                </li>
                                <li className="">
                                    You'll get a final offer in few days
                                </li>
                            </ul>
                            {/* <Card className="p-0 bg-light mb-5">
                                <Card.Body>
                                </Card.Body>
                            </Card> */}

                            <Card className="p-0 mb-5 bb-2">
                                <Card.Body>
                                    <div className="d-flex justify-content-start">
                                        <div className="">
                                            <img src="https://cdn.carrot.com/uploads/sites/12789/2022/05/cropped-Sell-My-House-Fast-San-Antonio-Texas-Icon-300x300.png" width="50" alt="calendar" className="icon-calendar"/>
                                        </div>
                                        <div className="ms-3">
                                            <p className="text-dark mb-0">
                                                Earliest available time
                                            </p>
                                            <p className="text-dark mb-0">
                                                <strong>Sat, May 21 at 12:00 PM</strong>
                                            </p>
                                        </div>
                                        {/* <div className="ms-auto rounded-circle border edit-icon-wrapper pointer">
                                            <i class="edit-icon"></i>
                                        </div> */}
                                    </div>
                                    <div className='py-3 p-2'>
                                        <p className="text-dark mb-2">
                                            <strong>
                                                What's your mobile phone number?
                                            </strong>
                                        </p>
                                        <Form.Group className="mb-1" as={Col} controlId="phone_number">
                                            <NumberFormat 
                                                format="+1 (###) ###-####"
                                                mask="_" 
                                                defaultValue={this.props.inputValues.phoneNumber}
                                                name="phoneNumber"
                                                placeholder="(201) 555 5555"
                                                required
                                                onChange={this.props.handleChange}
                                            />
                                        </Form.Group>
                                            
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className="pl-xl-5">
                            <Card className="p-0 border-0 text-left bg-white">
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        <h3>How It works</h3>
                                    </Card.Title>
                                    <Card className="border-1 shadow-sm my-3">
                                        <div className="d-flex m-2 ms-0 gap-3 justify-content-start">
                                            <div className="">
                                                <img src={HomeCheck} width="50" alt="calendar" className="icon-calendar"/>
                                            </div>
                                            <div className="">
                                                <p className="text-dark mb-0">
                                                    Show us your home with a video call or self-guided walktrough
                                                </p>
                                            </div>
                                        </div>

                                    </Card>
                                    <Card className="border-1 shadow-sm my-3">
                                        <div className="d-flex m-2 ms-0 gap-3 justify-content-start">
                                            <div className="">
                                                <img src={HomeTime} width="50" alt="calendar" className="icon-calendar"/>
                                            </div>
                                            <div className="">
                                                <p className="text-dark mb-0">
                                                    Schedule time for us to visit your home and assess the exterior
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="border-1 shadow-sm my-3">
                                        <div className="d-flex m-2 ms-0 gap-3 justify-content-start">
                                            <div className="">
                                                <img src={HomePrice} width="50" alt="calendar" className="icon-calendar"/>
                                            </div>
                                            <div className="">
                                                <p className="text-dark mb-0">
                                                    Pricing expert will review your info to calculate your final offer
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="border-1 shadow-sm my-3">
                                        <div className="d-flex m-2 ms-0 gap-3 justify-content-start">
                                            <div className="">
                                                <img src={HomeEmail} width="50" alt="calendar" className="icon-calendar"/>
                                            </div>
                                            <div className="">
                                                <p className="text-dark mb-0">
                                                    Get an email in few days with your final offer and any repair cost
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default InstantOffer;