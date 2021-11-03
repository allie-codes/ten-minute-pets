import { React, useState } from "react";

const CreatePet = () => {
  const [petStats, setStats] = useState({
    friendship: 0,
    species: "frog",
    weight: 0,
    name: "",
    age: 0,
  });

  //hatchPet
  const [name, setName] = useState("");

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log(petStats);
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStats({ ...petStats, name: name });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default CreatePet;
