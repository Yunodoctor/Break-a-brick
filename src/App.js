import "./App.css";
import GameScreen from "./components/GameScreen/GameScreen";
import Paddle from "./components/Paddle/Paddle";
import Ball from "./components/Ball/Ball";

function App() {
  return (
    <div className="App">
      <div className="game-container">
        <GameScreen>
          <Paddle></Paddle>
        </GameScreen>
      </div>
    </div>
  );
}

export default App;
