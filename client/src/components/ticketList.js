import React, { Component } from 'react';
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class ticketList extends React.Component {
    componentWillMount(){
        axios.get("http://localhost:3001/tickets/").then(response=>{
            console.log("res"+JSON.stringify(response));
            this.setState({
                ticketlist : response.data.tickets
            })
        }).catch(err=>{
            console.log("err"+err);
        })
    }
    render() { 
        var disptickets=null
        if(this.state && this.state.ticketlist){
            disptickets = this.state.ticketlist.map(ticket=>{
                return(
                <Row>
                    <Col>
                    <Link  to={{pathname: '/oneticket',state:ticket.id} }>
                    <b>{ticket.id}</b>&nbsp;&nbsp;
                    &nbsp;{ticket.subject}
                    </Link>
                    </Col>
                </Row>
                )
            })
        }
        return <div>
          {disptickets}
        </div>;
    }
}
 
export default ticketList;
