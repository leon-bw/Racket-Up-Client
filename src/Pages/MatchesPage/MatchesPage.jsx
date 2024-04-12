import { useEffect } from "react";
import "./MatchesPage.scss";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MatchesPage = () => {
  const [matches, setMatches] = useState(null);

  const location = useLocation();

  const getMatches = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/matches/find-matches`
      );
      setMatches(data.data);

      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.state) {
      setMatches(location.state.filteredMatches);
    } // Read values passed on state
    else {
      getMatches();
    }
  }, []);

  return (
    <section className="matches">
      <div className="matches__container">
        <h1 className="matches__heading">Find a Game</h1>
        <div className="matches__card">
          <div className="matches__body">
            <ul className="matches-list">
              {matches &&
                matches.map((match) => {
                  return (
                    <li className="matches-list__item" key={match.id}>
                      <div className="matches-list__body">
                        <div className="matches-list__details">
                          <h3 className="matches-list__heading">Sport</h3>
                          <p className="matches-list__name">{match.name}</p>
                          <div className="matches-list__info">
                            <h3 className="matches-list__heading">Location</h3>
                            <p className="matches-list__text">
                              {match.location}
                            </p>
                          </div>
                          <div className="matches-list__info">
                            <h3 className="matches-list__heading">Level</h3>
                            <p className="matches-list__text">
                              {match.skill_level}
                            </p>
                          </div>
                          <div className="matches-list__info">
                            <h3 className="matches-list__heading">
                              Availability
                            </h3>
                            <p className="matches-list__text">
                              {match.availability}
                            </p>
                          </div>
                        </div>
                        <div className="matches-list__info">
                          <h4 className="matches-list__heading">Players</h4>
                          {!match.users[1] ? (
                            <p>Looking for a game?</p>
                          ) : (
                            <p className="matches-list__text">
                              {match.users[0].first_name}{" "}
                              {match.users[0].last_name}{" "}
                              <p className="matches-list__vs">VS</p>
                              {match.users[1].first_name}{" "}
                              {match.users[1].last_name}{" "}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchesPage;
