import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    if (newCount <= 20) {
      setCount(newCount);
      localStorage.setItem("count", JSON.stringify(newCount));
    }
  };

  const decrement = () => {
    const newCount = count - 1;
    if (newCount >= 0) {
      setCount(newCount);
      localStorage.setItem("count", JSON.stringify(newCount));
    }
  };

  useEffect(() => {
    const oldCount = JSON.parse(localStorage.getItem("count")) || 0;
    setCount(oldCount);
  }, []);

  const reset = () => {
    setCount(0);
  };

  return (
    <>
    <div className="col-4 position-absolute translate-middle-x start-50 mt-3 text-center" >
    <div><h2><span className="text-info display-1 fw-medium">C</span><span className="fs-1 fw-light">ounter <span className="display-4 fw-bold" style={{color: "#6f42c1"}}>A</span>pplication</span></h2></div>
    <div className="card p-5 mt-5" style={{boxShadow:" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset", borderRadius: "58px"}}>
        
        <div className="card p-2 m-2" style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", borderRadius: "35px", background: "linear-gradient(136deg, #0dcaf0, #6f42c1)"}}>
            <h3 className="display-1 fw-medium text-light">{count}</h3>
        </div>
        
        <div>
            <button type="button" className="btn btn-info m-3 text-light fs-2 rounded-circle" onClick={decrement}><i class="bi bi-dash-lg"></i></button>
            <button type="button" className="btn m-3 text-light fs-2 rounded-circle" style={{background: "#6f42c1"}} onClick={increment}><i class="bi bi-plus-lg"></i></button>
            <button type="button" className="btn m-3 fs-2 rounded-circle" style={{border: "solid #0dcaf0", color: "#6f42c1"}} onClick={reset}><i class="bi bi-arrow-counterclockwise"></i></button>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Counter;
