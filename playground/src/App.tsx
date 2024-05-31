import { getAuthLocalStorage } from '@/type';
import { useEffect, useState } from 'react';
import Hello from './Hello';

const HelloWorld = () => {
  const [count, setCount] = useState(0);
  console.log(getAuthLocalStorage());

  useEffect(() => {
    console.log('HelloWorld mounted');
    return () => {
      console.log('HelloWorld unmounted');
    };
  }, [count]);

  return (
    <div>
      <h1>Rsbuild + React</h1>

      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>App.tsx</code> to test HMR
        </p>
      </div>

      <Hello />
    </div>
  );
};

export default HelloWorld;
