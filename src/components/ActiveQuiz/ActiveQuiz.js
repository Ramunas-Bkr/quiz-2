import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>2.</strong>&nbsp;
                    Kaip laikais?
                </span>
                <small>4 klausimas iš 12</small>
            </p>

            <AnswersList 
                answers={props.answers}

            />
        </div>
    )
}

export default ActiveQuiz
