function App() {
  return (
    <div className="App">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro className="intro" />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="wolf-img.jpg" alt="Long Nguyen" />;
}

function Intro() {
  return (
    <div>
      <h1>Long Nguyen</h1>
      <p>
        Graduate Student from Latrobe University with bachelor of Information
        Technology in major Software Engineering. When not studying and working,
        I usually spend my time to read book, playing game, and sometimes self
        study on Udemy. Cooking is the best way to relax (^.^)
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="lightblue" />
      <Skill skill="HTML and CSS" color="orangered" />
      <Skill skill="Git and Github" color="yellow" />
      <Skill skill="Docker" color="lightgreen" />
      <Skill skill="JavaScript" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <span style={{ backgroundColor: props.color }}>{props.skill}</span>
    </div>
  );
}

export default App;
