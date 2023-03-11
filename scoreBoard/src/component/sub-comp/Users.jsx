import { useState } from "react";
import User from "./User";

const data = [
  {
    name: "boldo",
    score: 10,
  },
  {
    name: "bata",
    score: 1,
  },
  {
    name: "chimge",
    score: 8,
  },
];

export default function Users() {
  const [dataq, setDataq] = useState(data);
  const [name, setName] = useState();
  const [score, setScore] = useState();

  function inp(e) {
    setName(e.target.value);
  }
  function inpu(e) {
    setScore(Number(e.target.value));
  }
  function save() {
    setDataq([...dataq, { name, score }]);
    ma(dataq);
  }
  function ma(e) {
    return e.map((user, index) => (
      <User name={user.name} score={user.score} index={index + 1} />
    ));
  }
  function byName() {
    dataq.sort((a, b) => {
      return a.score - b.score;
    });
    console.log(dataq);
    setDataq([...dataq]);
    ma(dataq);
  }
  return (
    <div>
      <div className="Headr">
        <h2 className="titl">Total Player:</h2>
        <button onClick={byName} className="titl-btn">
          By Name
        </button>
        <button className="titl-btn">By Score</button>
      </div>
      <div>{ma(dataq)}</div>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add user
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <label htmlFor="name">
                  name:
                  <input onChange={inp} id={"input"} type="text" />
                </label>
                <label htmlFor="">
                  score:
                  <input onChange={inpu} id={"input"} type="number" />
                </label>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={save}
                  data-bs-dismiss="modal"
                  type="button"
                  class="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
