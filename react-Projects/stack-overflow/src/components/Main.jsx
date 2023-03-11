import Aside from "./sub-components/Aside.jsx";
import MainBody from "./sub-components/MainBody.jsx";
import SecondAside from "./sub-components/SecondAside.jsx";

export default function Main() {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      <Aside />
      <MainBody />
      <SecondAside />
    </div>
  );
}
