
import Button from "../button/Button";
import "./Footer.css";


function Footer() {
    return (
        <footer>
<h2>Ready to start a career in <span style={{color: "orange"}}>tech?</span></h2>
<p>Choose a bootcamp, join 7000+ women building their career.</p>
   <Button
        text="View bootcamps"
        buttonBackground="rgb(251, 175, 0)"
        buttonColor="#fff"
      /> 
    </footer>
      
    );
}
export default Footer;