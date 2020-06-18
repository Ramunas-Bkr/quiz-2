import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    How are you
                  <i className={"far fa-check-circle success " + classes.success}></i>
                </li>
                <li>
                    <strong>2. </strong>
                    How are you
                  <i className={"far fa-times-circle " + classes.error}></i>
                </li>
            </ul>
            <p>Teisingai 4 iš 10</p>
            <div>
                <button>Pakartoti</button>
            </div>
        </div>
    )
}

export default FinishedQuiz
