import { styled } from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: orange;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 10px 14px;
  border: 1px solid black;
  border-radius: 4px;
  font-family: inherit;
  font-size: 20px;
  background-color: cyan;
  color: black;
  cursor: pointer;
`;
