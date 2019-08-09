import React from 'react';
import Normalize from 'react-normalize';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Quiz from './components/pages/Quiz/Quiz';
import About from './components/pages/About/About';

import './App.scss';

class App extends React.Component {
    state = {
        stats: {
            correct: 0,
            incorrect: 0,
        },
        currentQuestion: 0,
        questions: [
            {
                id: uuid.v4(),
                context: 'Global',
                example: (
                    <pre>
                        <code>{`
const num = 33;
console.log(this.num);
                        `}</code>
                    </pre>
                ),
                options: [
                    { id: uuid.v4(), value: '33', correct: true },
                    { id: uuid.v4(), value: 'undefined', correct: false },
                    { id: uuid.v4(), value: 'null', correct: false },
                ],
            },
            {
                id: uuid.v4(),
                context: 'Function',
                example: (
                    <pre>
                        <code>{`
function funkyTown() {
    console.log(this)
}                        
                        `}</code>
                    </pre>
                ),
                options: [
                    { id: uuid.v4(), value: 'window', correct: true },
                    { id: uuid.v4(), value: 'function', correct: false },
                    { id: uuid.v4(), value: 'funkyTown', correct: false },
                ],
            },
            {
                id: uuid.v4(),
                context: 'Method',
                example: (
                    <pre>
                        <code>{`
const object = {
    num: 42,
    method: function() {
        console.log(this.num)
    }
};
                        `}</code>
                    </pre>
                ),
                options: [
                    { id: uuid.v4(), value: '42', correct: true },
                    { id: uuid.v4(), value: 'num', correct: false },
                    { id: uuid.v4(), value: 'undefined', correct: false },
                ],
            },
            {
                id: uuid.v4(),
                context: 'Method',
                example: (
                    <pre>
                        <code>{`
const parent = {
    child: {
        method: function() {
            console.log(this)
        }
    }
};
                        `}</code>
                    </pre>
                ),
                options: [
                    { id: uuid.v4(), value: 'child', correct: true },
                    { id: uuid.v4(), value: 'parent', correct: false },
                    { id: uuid.v4(), value: 'window', correct: false },
                ],
            },
            {
                id: uuid.v4(),
                context: 'Method',
                example: (
                    <pre>
                        <code>{`
function funkyFries() {
    console.log(this)
}

const object = {
    method: funkyFries
};
                        `}</code>
                    </pre>
                ),
                options: [
                    { id: uuid.v4(), value: 'object', correct: true },
                    { id: uuid.v4(), value: 'window', correct: false },
                    { id: uuid.v4(), value: 'funkyFries', correct: false },
                ],
            },
            {
                id: uuid.v4(),
                context: 'Method',
                example: (
                    <pre>
                        <code>{`
const objectOne = {
    method: function() {
        console.log(this)
    }
};

const objectTwo = {
    method: objectOne.method
}
                        `}</code>
                    </pre>
                ),
                options: [
                    { id: uuid.v4(), value: 'objectTwo', correct: true },
                    { id: uuid.v4(), value: 'objectOne', correct: false },
                    { id: uuid.v4(), value: 'window', correct: false },
                ],
            },
            {
                id: uuid.v4(),
                context: 'Class',
                example: (
                    <pre>
                        <code>{`
class Classy {
    whereAmI() {
        return this;
    }
}

const me = new Classy;

console.log(me.whereAmI())

                        `}</code>
                    </pre>
                ),
                options: [
                    { id: uuid.v4(), value: 'me', correct: true },
                    { id: uuid.v4(), value: 'Classy', correct: false },
                    { id: uuid.v4(), value: 'window', correct: false },
                ],
            },
            {
                id: uuid.v4(),
                context: 'Arrow Function',
                example: (
                    <pre>
                        <code>{`
const arrow = () => console.log(this);
                        `}</code>
                    </pre>
                ),
                options: [
                    { id: uuid.v4(), value: 'window', correct: true },
                    { id: uuid.v4(), value: 'arrow', correct: false },
                    { id: uuid.v4(), value: 'undefined', correct: false },
                ],
            },
            {
                id: uuid.v4(),
                context: 'Arrow Function',
                example: (
                    <pre>
                        <code>{`
const object = {
    method: () => console.log(this)
}
                        `}</code>
                    </pre>
                ),
                options: [
                    { id: uuid.v4(), value: 'window', correct: true },
                    { id: uuid.v4(), value: 'method', correct: false },
                    { id: uuid.v4(), value: 'object', correct: false },
                ],
            },
        ],
    };

    render() {
        return (
            <Router>
                <div className='App'>
                    <Normalize />
                    <Header />

                    <Route
                        exact
                        path='/'
                        render={(props) => (
                            <Quiz
                                questions={this.state.questions}
                                currentQuestion={this.state.currentQuestion}
                                selectAnswer={this.selectAnswer}
                                stats={this.state.stats}
                                playAgain={this.playAgain}
                            />
                        )}
                    />

                    <Route path='/about' component={About} />

                    <Footer />
                </div>
            </Router>
        );
    }

    selectAnswer = (guessId, questionId) => {
        this.state.questions.forEach((question) => {
            if (question.id === questionId) {
                question.options.forEach((option) => {
                    if (guessId === option.id) {
                        if (option.correct) {
                            this.setState((prevState) => ({
                                stats: {
                                    ...prevState.stats,
                                    correct: prevState.stats.correct + 1,
                                },
                                currentQuestion: prevState.currentQuestion + 1,
                            }));
                        } else {
                            this.setState((prevState) => ({
                                stats: {
                                    ...prevState.stats,
                                    incorrect: prevState.stats.incorrect + 1,
                                },
                                currentQuestion: prevState.currentQuestion + 1,
                            }));
                        }
                    }
                });
            }
        });
    };

    playAgain = () => {
        this.setState({
            stats: {
                correct: 0,
                incorrect: 0,
            },
            currentQuestion: 0,
        });
    };
}

export default App;
