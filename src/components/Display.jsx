import React from "react";

function Display({ input, answer }) {
  return (
    <div className="display">
      {answer === "" ? (
        <>
          <input
            readOnly
            type="text"
            name="input"
            className="input"
            value={input}
            placeholder="0"
            maxLength={10}
            autoComplete="off"
          />
        </>
      ) : (
        <>
          <input
            readOnly
            type="text"
            name="input"
            className="value"
            value={input}
            placeholder="0"
            maxLength={10}
            disabled
          />
          <input
            readOnly
            type="text"
            name="value"
            className="input"
            value={answer}
            disabled
          />
        </>
      )}
    </div>
  );
}

export default Display;
