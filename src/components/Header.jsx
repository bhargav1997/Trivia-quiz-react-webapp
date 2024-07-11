import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header() {
   return (
      <header id='header'>
         <h2 className='site-name'>
            <Link to='/'>Trivia</Link>
         </h2>
         <Nav />
      </header>
   );
}
