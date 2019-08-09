import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard/QuestionCard';
import Scoreboard from './Scoreboard/Scoreboard';
import Card from '../../Card';

import './Quiz.scss';

class Quiz extends Component {
    render() {
        const { questions, currentQuestion } = this.props;

        if (currentQuestion < questions.length) {
            return (
                <main className='quiz'>
                    <Card className='quiz__intro'>
                        <h2 className='card__title'>'This' Context Quiz</h2>
                        <p className='card__body'>
                            Practicing with different contexts of 'this' is a good habit for Javascript
                            developers, both new and veterened. This quiz features various situations of the
                            occasionally confusing keyword to help you sharpen your skills.
                        </p>
                    </Card>
                    <Scoreboard stats={this.props.stats} />

                    <QuestionCard
                        key={questions[currentQuestion].id}
                        selectAnswer={this.props.selectAnswer}
                        question={questions[currentQuestion]}
                    />
                </main>
            );
        } else {
            return (
                <main className='quiz'>
                    <Card>
                        <h3 className='card__title'>Quiz Completed!</h3>
                        <section className='card__body'>
                            Congratulations! You scored {this.props.stats.correct} out of {questions.length}!
                            <button className='btn' onClick={this.props.playAgain}>
                                Play Again
                            </button>
                        </section>
                    </Card>
                </main>
            );
        }
    }
}

Quiz.propTypes = {
    questions: PropTypes.array.isRequired,
    currentQuestion: PropTypes.number.isRequired,
    selectAnswer: PropTypes.func.isRequired,
    stats: PropTypes.object.isRequired,
    playAgain: PropTypes.func.isRequired,
};

export default Quiz;
