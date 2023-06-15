import Form from "./form";
import { useState } from "react";

function User(props) {
  const [input, setImput] = useState("");

  const handleChange = (event) => {
    setImput(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Submited! ' + input);
    props.handleSetUser(input);
  }

  return (
    <div>
      <h1>Enter Username: </h1>
      <Form
        buttonText={"Enter"}
        buttonType={"submit"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default User;
