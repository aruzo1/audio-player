import useControlButtons from "./use-control-buttons";

function ControlButtons() {
  const { isPlaying, play, pause } = useControlButtons();

  return (
    <div>
      {isPlaying ? (
        <button onClick={pause}>Pause</button>
      ) : (
        <button onClick={play}>Play</button>
      )}
    </div>
  );
}

export default ControlButtons;
