import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        quiz: [
            {
                id: 1,
                question: 'Kokia diena po pirmadienio?',
                rightAnswerId: 1,
                answers: [
                    {text: 'Antradienis', id: 1},
                    { text: 'Pirmanaktis', id: 2},
                    { text: 'Sekmadienis', id: 3},
                    { text: 'Kažkoksdienis', id: 4}
                ]
            },
            {
                id: 2,
                question: 'Kiek bus 2+2?',
                rightAnswerId: 3,
                answers: [
                    {text: '2', id: 1},
                    { text: '3', id: 2},
                    { text: '4', id: 3},
                    { text: '5', id: 4}
                ]
            },
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId);

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Atsakykite į klausimus</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;
