import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, border-style, #root{
  height: 100%;
}
* , button, input{
  font-family: 'Poppins', sans-serif;
  border: 0;
  outline: 0;
 }
button {
   cursor: pointer;
 }
`;
