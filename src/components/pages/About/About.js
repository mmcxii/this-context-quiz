import React, { Component } from 'react';
import Card from '../../Card';

import './About.scss';

class About extends Component {
    render() {
        return (
            <main className='about'>
                <Card className='about__card'>
                    <h2 className='card__title'>About the App</h2>

                    <p className='card__body'>
                        This is the second app I made with React. For this project I wanted to practice
                        working with sending data up and down the prop chain, as well as managing a more
                        complex state. I believe I could improve this project by implementing Redux for state
                        managment, and by storing the questions in a database when I add more to the quiz.
                    </p>
                    <p className='card__body'>
                        If you have the time I would greatly appreciate code reviews for this project as I am
                        very eager to learn more about React and the best practices associated with it. You
                        can find the Github Reposity for this project{' '}
                        <a href='https://github.com/mmcxii/this-context-quiz'>
                            here <i className='far fa-external-link' />
                        </a>
                        , and a link to the rest of my projects{' '}
                        <a href='https://github.com/mmcxii/'>
                            here <i className='far fa-external-link' />
                        </a>
                        .
                    </p>
                </Card>
            </main>
        );
    }
}

export default About;
