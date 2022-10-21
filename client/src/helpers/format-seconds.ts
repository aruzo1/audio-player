function formatSeconds(seconds: number) {
  if (isNaN(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - minutes * 60);

  return `${minutes}:${seconds >= 10 ? seconds : "0" + seconds}`;
}

export default formatSeconds;
