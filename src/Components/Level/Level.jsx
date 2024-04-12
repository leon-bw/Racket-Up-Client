const Level = ({setLevel}) => {
  
  return (
    <section className="signup__skill">
    <select name="skill_level" id="skill_level" onChange={(e) => {setLevel(e.target.value)}}>
      <option value="">Please select a skill level</option>
      <option value="Beginner">Beginner</option>
      <option value="Good">Good</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Advanced">Advanced</option>
      <option value="Semi-Pro">Semi-Pro</option>
    </select>
    </section>
  );
};

export default Level;
