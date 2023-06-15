import List from "./list";
import User from "./user";
import { useState } from "react";

function Todo() {
  const [user, setUser] = useState("");

  const handleDefineUser = (user) => {
    console.log("User: " + user);
    setUser(user);
  };

  return user ? (
    <List user={user} />
  ) : (
    <User handleSetUser={handleDefineUser} />
  );
}

export default Todo;
