import { usePeople } from "../services/fetchPeople";
import ErrorPage from "./ErrorPage";
import Spinner from "./Spinner";

function TeamPeople() {
  const { dataPeople, isLoading, error } = usePeople();
  console.log(dataPeople);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorPage />;

  return (
    <div className="team">
      {dataPeople.map(person => (
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
