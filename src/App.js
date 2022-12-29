import React, { useState, useEffect } from "react";

function UserStorage() {
  console.log("in UseStorage");
  const [user, setUser] = useState("Sanjiv");

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");
    console.log("in the first useEffect");
    if (storedUser) {
      setUser(storedUser);
      console.log("localStorage has value");
      console.log(`localStorage vaule is ${storedUser}`);
    }
  }, []);

  useEffect(() => {
    console.log("in the second useEffect");
    console.log(`user is ${user}`);
    window.localStorage.setItem("user", user);
  }, [user]);

  function eventHandler(event) {
    console.log("event triggered!");
    setUser(event.target.value);
  }

  console.log("useStorge start to render");
  return (
    <select value={user} onChange={eventHandler}>
      <option>Jason</option>
      <option>Akiko</option>
      <option>Clarisse</option>
      <option>Sanjiv</option>
    </select>
  );
}

export default function App() {
  console.log("in APP");
  return (
    <div className="App">
      <UserStorage />
    </div>
  );
}
