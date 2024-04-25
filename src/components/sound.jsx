import mmh from "../assets/HomerHmmm.mp3";

function Sound(props) {
  return (
    <object type="audio/mpeg" width="0" height="0" data={mmh}>
      <param name="filename" value="roulement_tambour.mp3" />
      <param name="autostart" value="true" />
      <param name="loop" value="false" />
    </object>
  );
}

export default Sound;
