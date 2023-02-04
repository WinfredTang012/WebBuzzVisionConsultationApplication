import React from "react";

const Loading = () => {
  return (
    <div
      className="position-fixed w-100 h-100 text-center loading"
      style={{
        background: " #C6EFF9",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <svg width="300" height="350" viewBox="0 0 40 50">
        <circle
          stroke="#fff"
          strokeWidth="1"
          fill="none"
          points="20,1 40,40 1,40"
      ></circle>
       
        <text fill="#fff" x="1" y="30">
          Loading.................
        </text>
      </svg>
    </div>
  );
};

export default Loading;
