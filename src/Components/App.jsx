import { React, useState, useEffect } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
    return window.removeEventListener("resize", handleResize);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return <div>{windowWidth}</div>;
}
