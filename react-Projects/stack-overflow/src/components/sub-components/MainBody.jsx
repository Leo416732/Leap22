import SingleResult from "./SingleResult";
import "./sub-style/main.body.css"

const results = [
  {
    title: "component to rerender without calling setState?",
    description:
      "observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 2000,
    answers: 32,
    view: "7k",
  },
  {
    title: "force a React component to rerender without calling setState?",
    description:
      "(to the component), observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 100,
    answers: 2,
    view: "7m",
  },
  {
    title: "rerender without calling setState?",
    description:
      "that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 20,
    answers: 3,
    view: "10k",
  },
];


export default function MainBody() {
  return (
    <div
      className="d-flex gap-4 flex-wrap main-body"
    >
      <div className="search" style={{display: "flex"}}>
        <div className="search-title">
          <h3>Search Results</h3>
          <p>Result for ?</p>
          <p>Search option ?</p>
          <h5>? results</h5>
        </div>
        <div style={{display: "flex"}}>
          <div>
            <a href="">Advenced Search Tips</a>
            <button className="button">Ask Question</button>
          </div>
        </div>
      </div>
      <SingleResult
        title={results[0].title}
        description={results[0].description}
        vote={results[0].vote}
        answers={results[0].answers}
        view={results[0].view}
      />
      <SingleResult
        title={results[1].title}
        description={results[1].description}
        vote={results[1].vote}
        answers={results[1].answers}
        view={results[1].view}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answers={results[2].answers}
        view={results[2].view}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answers={results[2].answers}
        view={results[2].view}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answers={results[2].answers}
        view={results[2].view}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answers={results[2].answers}
        view={results[2].view}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answers={results[2].answers}
        view={results[2].view}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answers={results[2].answers}
        view={results[2].view}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answers={results[2].answers}
        view={results[2].view}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answers={results[2].answers}
        view={results[2].view}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answers={results[2].answers}
        view={results[2].view}
      />
      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answers={results[2].answers}
        view={results[2].view}
      />
    </div>
  );
}
