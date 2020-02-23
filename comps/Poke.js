import Link from "next/link";

export default props => (
  <div className="poke-box">
    <Link href="/mon/[name]" as={`/mon/${props.name}`}>
      <h3 className="name-link">{props.name}</h3>
    </Link>
    <div className="poke-img">
      <img src={props.img} alt={props.name} />
    </div>
  </div>
);
