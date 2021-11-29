import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Oneticket from './oneticket';
import ticketList from './ticketList';


class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ticketList} />
                <Route path="/oneticket" component={Oneticket} />
            </div>
        )
    }
}
export default Main;