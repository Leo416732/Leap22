import { useState } from "react";
import "../styles/login.css"

export default function Login(prop) {
  const { check } = prop;
  const { setDataa } = prop;
  const { users } = prop;
  const [username, setName] = useState("");
  const [userpassword, setPass] = useState("");
  function loginHandler(e) {
    e.preventDefault();
    setName(e.target.userName.value);
    setPass(e.target.password.value);
    check(username, userpassword);
  }

  // save button
  const [name, setDataName] = useState("");
  const [password, setDataPass] = useState("");
  function save() {
    if (name === "") {
      console.error("wrong");
    } else {
      setDataa([...users, { name, password }]);
    }
  }
  return (
    <div className="Login">
      <form onSubmit={loginHandler}>
        <input placeholder="User Name" type="text" name="userName" />
        <input placeholder="Password" type="password" name="password" />
        <button type="submit">Login</button>
        <p>or sign up</p>
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
                    type="password"
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
      </form>
    </div>
  );
}
