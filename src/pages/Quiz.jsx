import { useState, useEffect } from "react";
import "../styles/Quiz.css";

const Quiz = () => {
   const [categories, setCategories] = useState([]);
   const [category, setCategory] = useState("9");
   const [difficulty, setDifficulty] = useState("easy");
   const [type, setType] = useState("boolean");
   const [questions, setQuestions] = useState([]);
   const [answers, setAnswers] = useState({});

   const fetchCategories = async () => {
      const response = await fetch("https://opentdb.com/api_category.php");
      const responseData = await response.json();
      if (responseData && responseData.trivia_categories) {
         setCategories(responseData.trivia_categories);
      }
   };

   const fetchQuestions = async () => {
      const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`;
      const response = await fetch(url);
      const responseData = await response.json();
      if (responseData.results > 0) {
         setQuestions(responseData.results);
      }
   };

   const handleAnswerChange = (e, questionIndex) => {
      setAnswers({
         ...answers,
         [questionIndex]: e.target.value,
      });
   };

   const checkAnswer = (question, index) => {
      const correctAnswer = question.correct_answer;
      const userAnswer = answers[index];

      if (userAnswer === correctAnswer) {
         return <p className='correct'>Correct!</p>;
      } else if (userAnswer) {
         return <p className='incorrect'>Incorrect! The correct answer is {correctAnswer}.</p>;
      }
      return null;
   };

   useEffect(() => {
      document.title = "Trivia Quiz";
   }, []);

   useEffect(() => {
      fetchCategories();
      fetchQuestions();
   }, [category, difficulty, type]);

   return (
      <div className='quiz-container'>
         <h1>Trivia Quiz</h1>
         <div className='quiz-options'>
            <div>
               <label>Category:</label>
               <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  {categories &&
                     categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                           {cat.name}
                        </option>
                     ))}
               </select>
            </div>
            <div>
               <label>Difficulty:</label>
               <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                  <option value='easy'>Easy</option>
                  <option value='medium'>Medium</option>
                  <option value='hard'>Hard</option>
               </select>
            </div>
            <div>
               <label>Type:</label>
               <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value='boolean'>True/False</option>
                  <option value='multiple'>Multiple Choice</option>
               </select>
            </div>
            <button onClick={fetchQuestions}>Get Questions</button>
         </div>
         <div className='quiz-questions'>
            {questions &&
               questions.map((question, index) => (
                  <div key={index} className='quiz-question'>
                     <p dangerouslySetInnerHTML={{ __html: question.question }} />
                     {type === "multiple" ? (
                        question.incorrect_answers.concat(question.correct_answer).map((answer, i) => (
                           <div key={i}>
                              <input
                                 type='radio'
                                 name={`question-${index}`}
                                 value={answer}
                                 onChange={(e) => handleAnswerChange(e, index)}
                              />
                              <label dangerouslySetInnerHTML={{ __html: answer }} />
                           </div>
                        ))
                     ) : (
                        <>
                           <div>
                              <input type='radio' name={`question-${index}`} value='True' onChange={(e) => handleAnswerChange(e, index)} />
                              <label>True</label>
                           </div>
                           <div>
                              <input type='radio' name={`question-${index}`} value='False' onChange={(e) => handleAnswerChange(e, index)} />
                              <label>False</label>
                           </div>
                        </>
                     )}
                     {checkAnswer(question, index)}
                  </div>
               ))}
         </div>
      </div>
   );
};

export default Quiz;
