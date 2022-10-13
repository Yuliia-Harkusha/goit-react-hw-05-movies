import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  margin: 20px auto 20px 20px;
`;

export const Input = styled.input`
  margin-right: 10px;
  padding: 5px;
  width: 250px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 5px 7px;
  border: solid 1px #a7051e;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    color: #db2944;
  }
`;
