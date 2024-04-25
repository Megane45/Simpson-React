// import { useState } from "react";
import Avatar from "./components/avatar";
import "./App.css";
import mmh from "./assets/HomerHmmm.mp3";

function App() {
  return (
    <>
      <img
        className="Titre"
        src="https://www.stickees.com/files/cartoon/the-simpsons/2257-the-simpsons-logo-sticker.png"
        alt="The Simpsons"
      />
      <section>
        <div>
          <Avatar
            src="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
            firstName="Bart"
            lastName=" SIMPSON"
            audio={mmh}
          />
        </div>
        <Avatar
          src="https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png"
          firstName="Homer"
          lastName=" SIMPSON"
          audio={mmh}
        />
        <Avatar
          src="https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png"
          firstName="Maggie"
          lastName=" SIMPSON"
          audio={mmh}
        />
        <Avatar
          src="https://www.stickees.com/files/cartoon/the-simpsons/2262-itunes-lisa-sticker.png"
          firstName="Lisa"
          lastName=" SIMPSON"
          audio={mmh}
        />
        <Avatar
          src="https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png"
          firstName="Marge"
          lastName=" SIMPSON"
          audio={mmh}
        />
        <Avatar
          src="https://i.pinimg.com/originals/79/52/db/7952db4493a9d3e9193aee54e9098821.png"
          firstName="Abraham"
          lastName=" SIMPSON"
          audio={mmh}
        />
      </section>
    </>
  );
}

export default App;
