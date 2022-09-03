import { useGetGoodsQuery } from './redux/goodsAPI';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState('')
  const { data = [], isLoading } = useGetGoodsQuery(count)

  if (isLoading) { return <h1>Loading...</h1> }     

  return (
    <div className="App">
      <div>
        <select value={count} onChange={ (e) => { setCount(e.target.value) }}>
          <option value="''">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>  
      </div>
      <ul>
        { data.map( item => <li key={item.id}>{item.name}</li> ) }
      </ul>
    </div>
  );
}

export default App;
