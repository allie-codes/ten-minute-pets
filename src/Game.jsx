import { useState, useEffect } from "react";

import frog from "./assets/frog.png";
import egg from "./assets/egg.png";
import baby from "./assets/baby.png";
import bird from "./assets/bird.png";
import hamster from "./assets/hamster.png";
import bun from "./assets/bun.png";

import Feed from "./Feed";
import MessageHistory from "./MessageHistory";
import Play from "./Play";
import Talk from "./Talk";

const Game = () => {
  const { minutes = 10, seconds = 0 } = 0;
  const [[mins, secs], setTime] = useState([0, 0]);

  const [petStats, setStats] = useState({
    friendship: 0,
    weight: 20,
    happiness: 0,
  });
  const [tempStats, setTempStats] = useState({
    fullness: 0,
    fun: 0,
  });
  const [activePet, setActivePet] = useState(false);
  let [currentPic, setCurrentPic] = useState(egg);

  //hatchPet
  const [name, setName] = useState("");

  const [messageHistory, setMessageHistory] = useState([
    "Your past messages will show here.",
  ]);

  const [currentMessage, setCurrentMessage] = useState("");
  const [isButtonDisabled, setButtonDisable] = useState(false);
  const [isFirstGame, setIsFirstGame] = useState(true);
  const [tester, setTester] = useState("this is a test");
  const [typedMessage, setTypedMessage] = useState("");

  const typeMessage = () => {
    setTypedMessage(["test"]);
    let toType = [];
    for (let i = 0; i < currentMessage.length - 1; i++) {
      toType.push(currentMessage[i]);
      //setTimeout(setTypedMessage(toType), 1000);
      setTimeout(setTypedMessage(i), 2000);
      //setTypedMessage(toType);
    }
    //setTypedMessage("frog");
    console.log("TEST!!!!", typedMessage);
  };

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log(petStats);
  // });

  // const handleChange = (e) => {
  //   setName({ name: e.target.value });
  //   setStats({ ...petStats, name });
  //   console.log(petStats);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStats({ ...petStats, name: name });
  // };

  const tick = () => {
    if (mins === 0 && secs === 0 && activePet === true) {
      //alert(`Your pet ${name} has died.`);
      setMessageHistory([currentMessage, ...messageHistory]);
      setCurrentMessage(`Your pet ${name} has died.`);
      setActivePet(false);
      return;
    } else if (mins === 0 && secs === 0) {
      return;
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }

    if (secs % 5 === 0) {
      setTester("tada!");
    } else {
      setTester("🐸");
    }

    if (mins === 9 && secs === 55) {
      setCurrentMessage(`${name} looks a little shy...`);
      setMessageHistory([currentMessage, ...messageHistory]);
      setButtonDisable(true);

      setTimeout(() => setButtonDisable(false), 3000);
    }

    if (mins === 8 && secs === 58) {
      var item = pets[Math.floor(Math.random() * pets.length)];
      setCurrentPic(item);
      setCurrentMessage(`${name} has grown up!`);
      setMessageHistory([currentMessage, ...messageHistory]);
      setButtonDisable(true);

      setTimeout(() => setButtonDisable(false), 3000);
    }

    if (mins === 0 && secs === 58) {
      setCurrentMessage(`${name} is feeling rather old...`);
      setMessageHistory([currentMessage, ...messageHistory]);
      setButtonDisable(true);

      setTimeout(() => setButtonDisable(false), 3000);
    }
  };

  const handleFeedClick = () => {
    setStats({ ...petStats, weight: petStats.weight + 1 });
    setTempStats({ ...tempStats, fullness: tempStats.fullness + 1 });

    //console.log("NEW STAT: ", petStats);
    var item = foodItems[Math.floor(Math.random() * foodItems.length)];
    setCurrentMessage(`You give ${name} ${item}.`);
    setMessageHistory([currentMessage, ...messageHistory]);
    typeMessage();
    //console.log(messageHistory);
    setButtonDisable(true);

    setTimeout(() => setButtonDisable(false), 3000);
  };

  const handlePlayClick = () => {
    setStats({
      ...petStats,
      weight: petStats.weight - 1,
      happiness: petStats.happiness + 1,
    });
    //console.log("NEW STAT: ", petStats);
    var item = gameItems[Math.floor(Math.random() * gameItems.length)];
    setCurrentMessage(`You and ${name} play ${item} together.`);
    setMessageHistory([currentMessage, ...messageHistory]);
    setButtonDisable(true);

    setTimeout(() => setButtonDisable(false), 3000);
  };

  const handleTalkClick = () => {
    setStats({ ...petStats, friendship: petStats.friendship + 1 });
    var item = chatTopics[Math.floor(Math.random() * chatTopics.length)];
    setCurrentMessage(`You and ${name} talk about ${item}.`);
    setMessageHistory([currentMessage, ...messageHistory]);
    setButtonDisable(true);

    setTimeout(() => setButtonDisable(false), 3000);
  };

  const reset = () => {
    setActivePet(true);
    console.log(petStats);
    setTime([parseInt(minutes), parseInt(seconds)]);
    setCurrentMessage(`Your new pet, ${name}, has been born!`);
    setCurrentPic(baby);
    setIsFirstGame(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    console.log(name);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  let chatTopics = [
    "bunnies",
    "the economy",
    "breakfast foods",
    "traveling",
    "baking",
    "heavy metal",
  ];

  let foodItems = [
    "some bacon",
    "a cupcake",
    "a serving of veggies",
    "a pumpkin spice latte",
    "ramen noodles",
  ];

  let pets = [frog, hamster, bird, bun];

  let gameItems = [
    "rock paper scissors",
    "video games",
    "tag",
    "hide and seek",
  ];

  //show how many times you talked to your pet, etc at the end

  return (
    <>
      <div className="game-container">
        {/* <h1>{counter}</h1> */}
        <h1 className="time">{`${mins.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}`}</h1>
        {/* {console.log(display)} */}
        <div className="game">
          {activePet ? (
            <>
              <div className="actions-container">
                <Feed
                  handleFeedClick={handleFeedClick}
                  isButtonDisabled={isButtonDisabled}
                />
                <Play
                  handlePlayClick={handlePlayClick}
                  isButtonDisabled={isButtonDisabled}
                />
                <Talk
                  handleTalkClick={handleTalkClick}
                  isButtonDisabled={isButtonDisabled}
                />
              </div>

              {/* <div className="actions-container-2">
            <Feed />
            <Play />
            <Travel />
          </div> */}

              <img className="pet-img" src={currentPic} alt="your pet" />
              {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form> */}

              <div className="message">
                <p className="typewriter">{currentMessage}</p>
                <p>{typedMessage}</p>
                {/* <p>{tester}</p> */}
              </div>
              <div className="stats-display">
                <h5>fullness: {tempStats.fullness}</h5>
                <h5>boredom: 💢💢💢💢</h5>
                <h5>weight: {petStats.weight}</h5>
                <h5>fun: {petStats.happiness}</h5>
                <h5>friendship: {petStats.friendship}</h5>
              </div>
              <div className="history">
                <MessageHistory messageHistory={messageHistory} />
              </div>
            </>
          ) : (
            <>
              {isFirstGame ? (
                <h3>Welcome! Would you like to create a pet?</h3>
              ) : (
                <h3>
                  We're sorry for your loss. Would you like to create a new pet?
                </h3>
              )}
              <img className="pet-img" src={currentPic} alt="your pet" />
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleChange}
                  type="text"
                  value={name}
                  placeholder="name"
                ></input>
                <input type="submit" value="create pet"></input>
              </form>
            </>
          )}
        </div>
      </div>
      <p>stats: {JSON.stringify(petStats)}</p>
    </>
  );
};

export default Game;
