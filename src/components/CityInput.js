import { useRef } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";

const CityInput = () => {
  const input = useRef();

  return (
    <div className="input-group">
      <span onClick={() => {}} style={{ background: "#37435a" }}>
        <FaLocationCrosshairs />
      </span>

      <input
        type="text"
        ref={input}
        style={{ background: "#232b39", color: "#fff" }}
        placeholder="Search for places ..."
        onInput={() => {}}
      />
    </div>
  );
};

export default CityInput;
