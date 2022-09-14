import useVolumeControler from "./use-volume-controler";

function VolumeControler() {
  const { volume, volumeHandler } = useVolumeControler();

  return (
    <input
      type="range"
      step={0.01}
      min={0}
      max={1}
      value={volume}
      onChange={volumeHandler}
    />
  );
}

export default VolumeControler;
