import { useState } from "react";

export default function WelcomePage(prop) {
  const { setDataa } = prop;
  const [name, setDataName] = useState("");
  const [password, setDataPass] = useState("");
  function save() {
    if (name === "") {
      console.error("wrong");
    } else {
      setDataa([...prop.data, { name, password }]);
    }
  }
  const { setLogin } = prop;
  const [userName, setUserName] = useState("");
  const [password1, setPassword] = useState("");
  return (
    <>
      <div className="login">
        <input onChange={(e) => setUserName(e.target.value)} type="text" />
        <input onChange={(e) => setPassword(e.target.value)} type="text" />
        <button onClick={() => setLogin(userName, password1)}>Login</button>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Sign in
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
                    Sign in
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <input
                    onChange={(e) => setDataName(e.target.value)}
                    type="text"
                    placeholder="name"
                  />
                  <input
                    onChange={(e) => setDataPass(e.target.value)}
                    type="text"
                    placeholder="password"
                  />
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
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
