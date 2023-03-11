import "../style/blog-all.css";

export default function All(props) {
  return (
    <div className="card">
      <img className="props-img" src={props.image} alt="" />
      <p className="props-title">{props.title}</p>
      <p className="props.desc">{props.description}</p>
      <a href="">readmore</a>
    </div>
  );
}
