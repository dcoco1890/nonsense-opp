export default props => (
  <div className="poke-box">
    <h3 className="name-link">{props.name}</h3>
    <p>{props.type}</p>
    <div className="poke-img">
      <img src={props.img} alt={props.name} />
    </div>
  </div>
);
