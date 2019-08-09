import React, { Component } from 'react';

import './Card.scss';

class Card extends Component {
    render() {
        return <article className={`card ${this.props.className}`}>{this.props.children}</article>;
    }
}

export default Card;
