"use client";

const getGreeting = (date: Date) => {
  const hour = date.getHours();

  if (hour >= 6 && hour < 12) {
    return "Good morning!";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
};

export const Greeting = () => {
  const date = new Date();

  return <h2>{getGreeting(date)}</h2>;
};
