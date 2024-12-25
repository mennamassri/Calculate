import React from "react";


interface ResultProps {
    value : string | number;
}

const Result=(props :ResultProps) => {
    const value = props.value

    return(
        <div
        style={{
          fontSize: "24px",
          padding: "10px",
          backgroundColor: "#f5f4f5",
          textAlign: "center",
          margin: "20px auto",
          width: "200px",
          borderRadius: "10px",
        }}
      >
       {value}
      </div>
    )
}


export default Result;