import "./item.css";

function Item(props) {
  const handleClick = () => {
    console.log("Clicked item " + props.id);
  };

  const deletionMode = () => {
    if (props.mode) return <input type="checkbox" onClick={handleClick} />;
  };

  return (
    <div className="item">
      {deletionMode()}
      <li>{props.text}</li>
    </div>
  );
}

export default Item;
