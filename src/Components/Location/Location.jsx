const Location = ({setLocation}) => {
  
    return (
      <section className="location">
      <select name="location" id="location" onChange={(e) => {setLocation(e.target.value)}}>
        <option value="">Please select a location</option>
        <option value={1}>London Fields Tennis Courts</option>
        <option value={2}>Southwark Park Tennis Courts</option>
        <option value={3}>Central Park Tennis Courts</option>
        <option value={4}>Royal Automobile Club</option>
        <option value={5}>Elephant & Castle Leisure Centre</option>
        <option value={6}>Polygon Badminton Club</option>
        <option value={7}>Finsbury Leisure Centre</option>
        <option value={8}>Wimbledon Tennis Club</option>
        <option value={9}>Hackney Downs Tennis Courts</option>
        <option value={10}>Regent's Park Tennis Centre</option>
        <option value={11}>Islington Tennis Centre</option>
        <option value={12}>Battersea Park Tennis Courts</option>
        <option value={13}>Greenwich Park Tennis Courts</option>
        <option value={14}>Clapham Common Tennis Courts</option>
      </select>
      </section>
    );
  };
  
  export default Location;
  