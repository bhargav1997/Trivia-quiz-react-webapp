import { useEffect } from "react";

const About = () => {
   useEffect(() => {
      document.title = "Trivia Quiz - About";
   }, []);

   return (
      <main id='about'>
         <h2>About</h2>
         <p>This is a trivia game, made with React.</p>
      </main>
   );
};
export default About;
