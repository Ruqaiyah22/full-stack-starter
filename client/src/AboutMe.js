import './AboutMe.scss';
import baby_kai from './baby_kai.jpg';

function AboutMe() {
  return (
    <div id="about-me">
      <img className="img-fluid mb-3" src={baby_kai} alt="My Name" />
      <h1>Ruqaiyah Angeles</h1>
      <p>Hola, soy Ruqaiyah! I'm a second-year compsci major.</p>
    </div>
  );
}

export default AboutMe;
