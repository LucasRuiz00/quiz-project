export class Question{

    /**
     * 
     * @param {string} text este es el texto de la pregunta capo
     * @param {string[]} choices  estas son las opciones de las preguntas maquina
     * @param {string} answer esta es la rta forro bueee
     */


    constructor(text, choices, answer){
        this.text; text;
        this.choices; choices;
        this.answer; answer;

    }  

    /**
     * 
     * @param {string} choice algun texto pa adivinar
     * @returns {boolean} devuelve true si la rta esta bien 
     */
    
    correctAnswer(choice){
        return choice === this.answer
    }
}




