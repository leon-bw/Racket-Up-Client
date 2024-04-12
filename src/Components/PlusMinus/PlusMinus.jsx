import { useState, useEffect } from "react";
import Button from "../Button/Button";

const PlusMinus = () => {
  
  // const [level, setLevel] = useState(0);
  const [index, setIndex] = useState(0);

  const getLevels = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/matches/find-matches");
      getLevels(data.data);
      console.log(data.data)
    } catch (error) {
      console.log(error)
    }
  };
  
  useEffect(() => {
    getLevels();
  }, []);

  
  const levels = ["Beginner", "Good", "Intermediate", "Advanced", "Semi-Pro"];

  const mod = (n, m) => ((n % m) + m) % m;

  const up = useCallback(() => 
    setIndex(state => mod(state + 1, levels.length))
  , [setIndex, levels]);

  const down = useCallback(() => 
    setIndex(state => mod(state - 1, levels.length))
  , [setIndex, levels]);
  
  return (
    <section className="level">
      <div className="level__container">
        <div className="level__body">
          <h4 className="level__heading">Skill Level</h4>
          <p className="level__text">Choose desired skill level</p>
        </div>
        <div className="level__input">
          <Button className="level__down" onClick={down} ></Button>
          <div className="level__description">{skills[index]}</div>
          <Button className="level__up" onClick={up}></Button>
        </div>
      </div>
    </section>
  );
};

export default PlusMinus;
