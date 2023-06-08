import "./App.css";
import CenterPane from "./CenterPane";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

function App() {
  return (
    <div className="container">
      <LeftPane />
      <CenterPane />
      <RightPane />
    </div>
  );
}

export default App;
