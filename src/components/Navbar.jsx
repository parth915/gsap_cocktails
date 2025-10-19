import {navLinks} from "../../constants/index.js";

const Navbar = () => (
   <nav>
       <div>
           <a href="#home" className="flex items-center gap-2">
               <p>Velvet pour</p>
           </a>

           <ui>
               {navLinks.map((link, index) => (
                   <li key={index}>
                       <a href ={`#${link.id}`}>{link.title}</a>
                   </li>
               ))}
           </ui>
       </div>
   </nav>
)

export default Navbar