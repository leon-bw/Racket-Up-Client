import "./Loader.scss";

const Loader = () => {
    return (
      <section className="loader">
        <div className="loader__container">
          <h1 className="loader__heading">Loading Profile</h1>
          <div className="loader__bar">
            <div className="loader__circle loader__circle--one"></div>
            <div className="loader__circle loader__circle--two"></div>
            <div className="loader__circle loader__circle--three"></div>
            <div className="loader__circle loader__circle--four"></div>
            <div className="loader__circle loader__circle--five"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Loader;