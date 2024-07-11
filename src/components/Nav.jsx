import { NavLink } from "react-router-dom";
export default function Nav() {
   return (
      <nav id='main-navigation'>
         <ul>
            <li>
               <NavLink to='/'>Home</NavLink>
            </li>
            <li>
               <NavLink to='/about'>About</NavLink>
            </li>
            <li>
               <NavLink to='/quiz'>Quiz</NavLink>
            </li>
         </ul>
      </nav>
   );
}
