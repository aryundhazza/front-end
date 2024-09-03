import { useRef } from "react";

export default function RefComp() {
  const inputRef = useRef();
  const elementRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
    elementRef.current.style.backgroundColor = "orange";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      <div
        style={{ backgroundColor: "teal", height: "100px" }}
        ref={elementRef}
      >
        Hello
      </div>
    </div>
  );
}
