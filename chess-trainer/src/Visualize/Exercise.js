import Chessboard from "chessboardjsx";

const Exercise = () => {
  const Chess = require("chess.js");
  const chess = new Chess();
  for (var i = 0; i < 8; i++) {
    const moves = chess.moves();
    const moveToMake = moves[Math.floor(Math.random() * moves.length)];
    chess.move(moveToMake);
  }

  const moves = chess.moves();
  const moveToVisualize = moves[Math.floor(Math.random() * moves.length)];
  const otherMoves = moves.filter((move) => move != moveToVisualize);
  const startingFen = chess.fen();

  var successBoard = new Chess(startingFen);
  successBoard.move(moveToVisualize);
  const emptyArrays = [null, null, null];
  const badBoards = emptyArrays.map((board) => {
    var badBoard = new Chess(startingFen);
    badBoard.move(otherMoves.pop());
    return badBoard;
  });

  const allBoards = [...badBoards, successBoard];

  return (
    <div className="startingPositionBoard">
      <h2>Starting position</h2>
      <Chessboard
        position={chess.fen()}
        calcWidth={(screenWidth) => screenWidth.screenHeight / 3}
      />
      <p>{moveToVisualize}</p>
      <div className="multChoiceContainer">
        {allBoards.map((board) => {
          return (
            <div className="chessBoard">
              <Chessboard
                position={board.fen()}
                calcWidth={(screenWidth) => screenWidth.screenHeight / 3}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exercise;
