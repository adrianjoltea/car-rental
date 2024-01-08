import { useState } from "react";
import useFetchPeople from "../services/fetchPeople";

function TeamPeople() {
  const [team, setTeam] = useState([]);
  useFetchPeople(setTeam);
  console.log(team);

  return (
    <div className="team">
      {team.map(person => (
        <Person
          img={person.img}
          name={person.name}
          specialization={person.function}
          key={person.id}
        />
      ))}
    </div>
  );
}

function Person({ img, name, specialization }) {
  return (
    <div className="team-container">
      <img src={img} />
      <div className="team-container-text">
        <h2>{name}</h2>
        <p>{specialization}</p>
      </div>
    </div>
  );
}

export default TeamPeople;
