import { useEffect } from "react";
import "./MatchesPage.scss";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Anchor from "../../Components/Anchor/Anchor";
import MatchCard from "../../Components/MatchCard/MatchCard";

const MatchesPage = () => {
  const [matches, setMatches] = useState(null);

  const getMatches = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/matches/matches`
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
    } else {
      getMatches();
    }
  }, []);

  return (
    <section className="matches">
      <div className="matches__container">
        <h1 className="matches__heading">Find a Game</h1>
              <MatchCard />
        <div className="matches__card">
          <div className="matches__body">
            <ul className="matches-list">
              {matches &&
                matches.map((match) => {
                  return (
                    <li className="matches-list__item" key={match.id}>
                      <div className="matches-list__body">
                        <div className="matches-list__details">
                          <h3 className="matches-list__heading">
                            {match.users[0].sport}
                          </h3>
                          <div className="matches-list__info">
                            <h3 className="matches-list__heading">Location</h3>
                            <p className="matches-list__text">
                              {match.location}
                            </p>
                          </div>
                          <div className="matches-list__info">
                            <h4 className="matches-list__heading">Level</h4>
                            <p className="matches-list__text">
                              {match.skill_level}
                            </p>
                          </div>
                          <div className="matches-list__info">
                            <h4 className="matches-list__heading">
                              Availability
                            </h4>
                            <p className="matches-list__text">
                              {match.availability}
                            </p>
                          </div>
                        </div>
                        <div className="matches-list__info">
                          <h4 className="matches-list__heading">Created By</h4>
                          {match.users[0].first_name} {match.users[0].last_name}
                          <h4 className="matches-list__heading">Players</h4>
                          {!match.users[1] ? (
                            <p>Looking for a game?</p>
                          ) : (
                            <p className="matches-list__text">
                              {match.users[0].first_name}{" "}
                              {match.users[0].last_name} VS{" "}
                              {match.users[1].first_name}{" "}
                              {match.users[1].last_name}{" "}
                            </p>
                          )}
                          <div className="matches-list__controls">
                            <Button className="matches-list__edit">Edit</Button>
                          </div>
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
