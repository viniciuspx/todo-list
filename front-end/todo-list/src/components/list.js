import Item from "./item";
import React from "react";
import { useState, useEffect } from "react";

import "./list.css";
import Form from "./form";

let id = 0;

function List(props) {
  const user = props.user;
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([]);
  const [saved, setSaved] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, { name: message, id: id++ }]);
    console.log("ID: " + id + " Item: " + message + " User: " + user);
    setSaved(false);
  };

  const cleanList = () => {
    setSaved(false);
    setItems([]);
    id = 0;
  };

  const handleSave = () => {
    setSaved(true);
    saveData(items);
  };

  const dbResponse = () => {
    if (saved) {
      return (
        <div>
          <hr />
          <h3>Saved in DB</h3>
        </div>
      );
    } else {
      return <hr />;
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/get")
      .then((response) => response.json())
      .then((res) => setResponse(JSON.stringify(res.content)));
  }, []);

  const saveData = async (array) => {
    const response = await fetch("http://localhost:8080/post", {
      method: "POST",
      body: JSON.stringify(array),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <div className="submit-station">
        <h1>{!props.listName && "List:"}</h1>

        <Form
          buttonText={"Add"}
          buttonType={"button"}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <button className="button" type="submit" onClick={cleanList}>
          Clean
        </button>
        <button className="button" type="submit" onClick={handleSave}>
          Save
        </button>
      </div>
      <div className="main-list">
        <hr />
        <ol>
          {items.map((item) => (
            <Item text={item.name} key={item.id} id={item.id} />
          ))}
        </ol>
        {dbResponse()}
        {response}
      </div>
    </div>
  );
}

export default List;
