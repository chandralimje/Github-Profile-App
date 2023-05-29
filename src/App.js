import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  return (
    <>
      <h1>Github Users App</h1>
      <div className="content">
        {userData.map((client, index) => {
          return (
            <Card
              key={index}
              userName={client.login}
              profile={client.avatar_url}
              profileurl={client.html_url}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
