import { useState } from "react";

const Sport = ({ setSport, usersSport }) => {
  const [selectedOption, setSelectedOption] = useState(usersSport);

  return (
    <section className="sport">
      <select
        name="sport"
        id="sport"
        value={selectedOption}
        onChange={(e) => {
          setSport(e.target.value)
          setSelectedOption(e.target.value);
        }}
      >
        <option value="">Please select a sport</option>
        <option value={1}>Tennis</option>
        <option value={2}>Squash</option>
        <option value={3}>Badminton</option>
      </select>
    </section>
  );
};

export default Sport;
