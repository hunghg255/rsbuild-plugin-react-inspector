import { useEffect, useState } from 'react';

const HelloWorld = () => {
  const [count, setCount] = useState(0);

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
    </div>
  );
};

export default HelloWorld;
