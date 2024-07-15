import { useEffect, useState } from "react";
import Question from "../components/Question";

const Home = () => {
   const [question, setQuestion] = useState(null);
   const [category, setCategory] = useState(null);
   const [answer, setAnswer] = useState(null);
   const [reveal, setReveal] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      document.title = "Trivia Quiz - Home";

      const fetchQuestion = async () => {
         try {
            const response = await fetch("https://opentdb.com/api.php?amount=1&type=boolean");

            const data = await response.json();

            if (data.response_code === 5) {
               setError("Too Many Requests, Please try again later!");
               return;
            }

            if (data && data.results && data.results.length === 0) {
               return;
            }

            setQuestion(data.results[0].question);
            setCategory(data.results[0].category);
            setAnswer(data.results[0].correct_answer);
         } catch (error) {
            console.error("Error fetching question", error);
         }
      };

      fetchQuestion();
   }, []);

   const revealAnswer = () => {
      setReveal(!reveal);
   };

   return (
      <main id='home'>
         <h2 id='welcomeMsg'>Welcome to Trivia</h2>
         <p id='welcomeSubMessage'>{"Here's your Random Question"}</p>

         <Question category={category} question={question} answer={answer} reveal={reveal} revealAnswer={revealAnswer} error={error} />
      </main>
   );
};

export default Home;
