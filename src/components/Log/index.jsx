export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        const { row, col } = turn.square;
        return (
          <li
            key={`${row}${col}`}
          >{`${turn.player} selected ${row},${col}`}</li>
        );
      })}
    </ol>
  );
}
