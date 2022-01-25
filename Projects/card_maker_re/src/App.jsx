import { useState, useRef } from 'react';
import { isCompositeComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development';
import './App.css';
import Habits from './component/habits';

function App() {
  const [data, setData] = useState([]);
  const inputref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputref.current.value;
    setData([...data, { name, count: 0 }]);
    inputref.current.value = '';
  };

  const onPlus = (item) => {
    console.log(typeof item);
    const items = data.filter((d) => d.name !== item.name);
    setData([...items, { name: data.name, count: data.count + 1 }]);
  };
  const onMinus = () => {};

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={inputref} />
        <input type='submit' />
      </form>
      {data &&
        data.map((item, index) => (
          <Habits key={index} data={item} handlePlus={() => onPlus(item)} />
        ))}
    </div>
  );
}

export default App;
