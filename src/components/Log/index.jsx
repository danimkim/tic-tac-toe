export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        const { row, col } = turn.square;
        return <li>{`${turn.player} selected ${row},${col}`}</li>;
      })}
    </ol>
  );
}
