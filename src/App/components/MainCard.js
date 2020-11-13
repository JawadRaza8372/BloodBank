import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import windowSize from 'react-window-size';

import Aux from "../../hoc/_Aux";
class MainCard extends Component {
    state = {
        isOption: this.props.isOption,
        fullCard: false,
        collapseCard: false,
        loadCard: false,
        cardRemove: false
    };


    render() {
        let cardHeaderRight, cardHeader;
        let card = '';
        let cardClass = [];


        cardHeader = (
            <Card.Header>
                <Card.Title as='h5'>{this.props.title}</Card.Title>
                {cardHeaderRight}
            </Card.Header>
        );

        
        if (this.props.cardClass) {
            cardClass = [...cardClass, this.props.cardClass];
        }

        card = (
            <Card className={cardClass.join(' ')}>
                {cardHeader}
                    <div>
                        <Card.Body>
                            {this.props.children}
                        </Card.Body>
                    </div>
            </Card>
        );

        return (
            <Aux>
                {card}
            </Aux>
        );
    }
}

export default windowSize(MainCard);
