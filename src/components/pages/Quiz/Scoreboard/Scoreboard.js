import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../Card';

import './Scoreboard.scss';

class Scoreboard extends Card {
    render() {
        const { correct, incorrect } = this.props.stats;

        return (
            <Card className='scoreboard__card'>
                <h3 className='card__title'>Scoreboard</h3>
                <section className='card__body scoreboard'>
                    <div>
                        <h4>Correct: </h4>
                        {correct}
                    </div>
                    <div>
                        <h4>Incorrect: </h4>
                        {incorrect}
                    </div>
                </section>
            </Card>
        );
    }
}

Scoreboard.propTypes = {
    stats: PropTypes.object.isRequired,
};

export default Scoreboard;
