import PropTypes from "prop-types";

const Question = ({ category, question, answer, reveal, revealAnswer, error }) => {
   return (
      <div id='quizContainer'>
         <h3>{"True or False :"}</h3>

         {category && question && answer ? (
            <div id='questionContainer'>
               <p id='category'>{category}</p>

               <p id='questionText' dangerouslySetInnerHTML={{ __html: question }} />

               <p id='answerText'>{reveal ? answer : ""}</p>

               <button id='revealAnswer' onClick={revealAnswer} type='button'>
                  Reveal Answer
               </button>
            </div>
         ) : error ? (
            <p id='error'>{error}</p>
         ) : (
            <p id='loading'>Loading...</p>
         )}
      </div>
   );
};

Question.propTypes = {
   category: PropTypes.string,
   question: PropTypes.string,
   answer: PropTypes.string,
   reveal: PropTypes.bool,
   revealAnswer: PropTypes.func,
   error: PropTypes.string,
};

export default Question;
