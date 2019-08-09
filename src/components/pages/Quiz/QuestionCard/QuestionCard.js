import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../Card';

import './QuestionCard.scss';

class QuestionCard extends Component {
    render() {
        const { example, context, options, id } = this.props.question;

        return (
            <Card className='question'>
                <h3 className='card__title question__context'>Context: {context}</h3>
                <section className='card__body'>
                    <p className='question__prompt'>What will this console log produce?</p>
                    {example}
                    <section className='question__options'>
                        {options
                            // Randomizes order of answers
                            .sort(() => Math.random() - 0.5)
                            // Creates a button for each answer
                            .map((option) => (
                                <button
                                    className='btn question__option'
                                    key={option.id}
                                    onClick={this.props.selectAnswer.bind(this, option.id, id)}
                                >
                                    {option.value}
                                </button>
                            ))}
                    </section>
                </section>
            </Card>
        );
    }
}

QuestionCard.propTypes = {
    selectAnswer: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
};

export default QuestionCard;
