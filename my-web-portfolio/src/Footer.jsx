import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
      
<footer >
    <div className="line">
    <p>© 2024 Catherine Gichina. All rights reserved.</p>
    </div>

<div className="iconContainer">
<p>Reach out :</p>
<a href = "https://github.com/Catherinekaburagichina">
<FontAwesomeIcon icon={faGithub} style={{color: "#000000"}}/>
</a>

<a href = "https://www.linkedin.com/in/catherine-gichina-489b6320a/">
<FontAwesomeIcon icon={faLinkedin} style={{color: "#000000"}}/>
</a>
</div>
</footer>   
       
    )
}

