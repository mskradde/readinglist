import React from "react";
import styled from "@emotion/styled";

const AddButton = styled.button`
  border: none;
  border-radius: 50px;
  color: black;
  background: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);

  img {
    height: 40px;
  }
`;
function Button({ src, alt }) {
  return (
    <AddButton>
      {" "}
      <img src={src} alt={alt} />{" "}
    </AddButton>
  );
}

export default Button;
