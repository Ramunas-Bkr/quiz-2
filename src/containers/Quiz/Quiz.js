import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {

    state = {
        quiz: [
            {
                question: 'Kokia diena po pirmadienio?',
                rightAnswerId: 1,
                answers: [
                    {text: 'Antradienis', id: 1},
                    { text: 'Pirmanaktis', id: 2},
                    { text: 'Sekmadienis', id: 3},
                    { text: 'Kažkoksdienis', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId);
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Atsakykite į klausimus</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;
