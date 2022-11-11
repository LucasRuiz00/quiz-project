import {questions} from "./data/questions";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */

const renderpage = (quiz, ui) => {

    if (quiz.isEnded()) {
        ui.showScores(quiz.score)
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentchoice) => {
            quiz.guess(currentchoice);
            renderpage(quiz, ui);
        });
        ui.showProgress(quiz.questionIndex +1, quiz.questions.length);
    }

     }
     

     



function main() {
     const quiz = new Quiz(questions);
     const ui = new UI()

     renderpage(quiz, ui)

     




 
}


main()