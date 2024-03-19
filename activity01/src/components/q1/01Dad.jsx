import Child from './01Child';

function Dad() {
  return (
    <div>
      <h2>Dad</h2>
      <Child height={1.8} weight={90}/>
    </div>
  );
}

export default Dad;