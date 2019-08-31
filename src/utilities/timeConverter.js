const timeConverter = dateString => {
  const date = new Date(dateString * 1000);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  return date.toLocaleString("en-US", options);
};

export default timeConverter;
