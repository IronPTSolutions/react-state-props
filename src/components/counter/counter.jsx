import { useState } from "react";

function Counter({ className = '', initialCountValue = 0, min, max }) {
  const [count, setCount] = useState(() => {
    let initialValue = initialCountValue;
    if (min !== undefined) {
      initialValue = Math.max(min, initialValue);
    }
    if (max !== undefined) {
      initialValue = Math.min(max, initialValue);
    }
    return initialValue;
  });

  const handleCountUp = () => {
    if (max === undefined || count < max) {
      setCount(count + 1);
    }
  }

  const handleCountDown = () => {
    if (min === undefined || count > min) {
      setCount(count - 1);
    }
  }

  let counterColor = '';
  if (count === max) {
    counterColor = 'text-success';
  } else if (count === min) {
    counterColor = 'text-danger';
  }

  return (
    <div className={`rounded border p-3 bg-body-secondary d-flex gap-1 flex-column ${className}`}>
      <p className={`m-0 fs-2 fw-lighter text-center ${counterColor}`}>{count}</p>
      <div className="d-flex gap-2">
        <button className="btn btn-secondary btn-sm flex-fill" onClick={handleCountDown} disabled={count === min}>-</button>
        <button className="btn btn-primary btn-sm flex-fill" onClick={handleCountUp} disabled={count === max}>+</button>
      </div>
    </div>
  )
}

export default Counter;