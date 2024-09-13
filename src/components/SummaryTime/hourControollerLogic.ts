export const getCurrentTime = () => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
