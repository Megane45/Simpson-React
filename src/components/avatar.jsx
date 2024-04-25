import Sound from "./sound";

import { useState } from "react";
function Avatar(props) {
  // const [audio] = useState(new Audio("../assets/HomerHmmm.mp3"));
  const [lectureEnCours, setLectureEnCours] = useState(false);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setLectureEnCours(!lectureEnCours);
  };

  return (
    <div className="Simpson">
      <img src={props.src} alt={props.firstName + props.lastName} />
      <h1>{props.firstName + props.lastName}</h1>
      <button onClick={handleClick}>
        &#x1F369;{lectureEnCours ? "Pause" : "Play"}
        {count}
      </button>
      {lectureEnCours ? <Sound son={props.audio} /> : ""}
    </div>
  );
}

export default Avatar;
