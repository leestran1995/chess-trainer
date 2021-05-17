import logo from "./logo.svg";
import "./App.css";
import Chessboard from "chessboardjsx";
import MultiChoiceBoardSelection from "./Visualize/MultiChoiceBoardSelection";
import StartingPosition from "./Visualize/StartingPosition";
import Exercise from "./Visualize/Exercise";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <StartingPosition />
        <div className="multChoiceContainer">
          <MultiChoiceBoardSelection />
          <MultiChoiceBoardSelection />
          <MultiChoiceBoardSelection />
          <MultiChoiceBoardSelection />
        </div> */}
        <Exercise />
      </header>
    </div>
  );
}

export default App;
