import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {

    state = {
        quiz: [
            {
                answers: [
                    {text: 'Klausimas 1'},
                    {text: 'Klausimas 2'},
                    {text: 'Klausimas 3'},
                    {text: 'Klausimas 4'}
                ]
            }
        ]
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Atsakykite į klausimus</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;
