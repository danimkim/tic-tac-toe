import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players">
          <Player defaultName="Player1" symbol="X" />
          <Player defaultName="Player2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
