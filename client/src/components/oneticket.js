import React, { Component } from 'react';
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Oneticket extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        axios.get(`http://localhost:3001/oneticket/${this.props.location.state}`).then(response=>{
            console.log("res"+JSON.stringify(response));
            this.setState({
                ticketinfo : response.data.ticket
            })
        }).catch(err=>{
            console.log("err"+err);
        })
    }
    render() { 
        var description = null;
        if(this.state && this.state.ticketinfo){
            return(
                <div>
            <Row>
            <b>Ticket ID :</b> {this.state.ticketinfo.id} 
            </Row>
            <Row>
            <b>Description :</b> {this.state.ticketinfo.description}
            </Row>
            </div>
            )
        }
        return <div>
           
        </div>;
    }
}
 
export default Oneticket;