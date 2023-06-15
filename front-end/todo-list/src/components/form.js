import React from "react";

import "./list.css";

function Form(props) {
  return (
    <form>
      <input type="text" onChange={props.handleChange} />
      <button className="button" type={props.buttonType} onClick={props.handleSubmit}>
        {props.buttonText}
      </button>
    </form>
  );
}

export default Form;
