import "../style/about.css";

function About() {
  return (
    <>
    <div className="about" id="about">
      <div id="lastName" className="about__text">
        <div>NAMASTE.</div>
        <div>I &nbsp;AM </div>
        GURUNG,
        <span>&nbsp;&nbsp;TSHERING</span>
      </div>
      {/* <div className="about__text__name" anchor="lastName">TSHERING</div> */}
      <div className="about__text__body">
        I am from Nepal. I have
        worked in hotel and retail sector. I joined Pursuit,
        a codeing bootcamp where I learned full stack web development. I aim to challange myself and turn my ideas and my dreams into reality.
        <br/> When I am not infront of a computer, either I partake in pretend play with my son or whip something delicious in the kitchen.
      </div>
    </div>
      <div className="about__icon__wrapper">
        <div className="about__icon">HTML</div>
        <div className="about__icon">CSS</div>
        <div className="about__icon">BOOTSTRAP</div>
        <div className="about__icon">JAVASCRIPT</div>
        <div className="about__icon">REACT</div>
        <div className="about__icon">EXPRESS</div>
        <div className="about__icon">NODEJS</div>
        <div className="about__icon">POSTGRES</div>
        <div className="about__icon">SQL</div>
      </div>
      </>
  );
}

export default About;
