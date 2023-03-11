import Users from "./sub-comp/Users";

export default function Profile(prop) {
  const { setIsLoggedIn } = prop;
  return (
    <div>
      <div>
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      </div>
      <div>
        <Users />
      </div>
    </div>
  );
}
