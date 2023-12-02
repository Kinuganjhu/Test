import Square from './Square';

export default function Board(value) {
  return (
    <>
      {/* First line row */}
      <div className='board-row'>
        <Square value= {0} />
        <Square value = {1}/>
        <Square value = { 2}/>
      </div>
      {/* Second line row */}
      <div className='board-row'>
        <Square value= {3} />
        <Square value = {4}/>
        <Square value = {5}/>
      </div>
      {/* Third line row */}
      <div className='board-row'>
        <Square value= {6} />
        <Square value = {7}/>
        <Square value = {8}/>
      </div>
    </>
  );
}
