import styled from 'styled-components';

export const Botton = styled.button`
  width: 150px;
  height: 40px;
  margin-left: 20px;
  font-size: 1.1em;
  background: #fff;
  border: 1.5px solid #0ed46c;
  cursor: pointer;
  color: #0ed46c;
  transition: all .4s;
  border-radius: 8px;

  &:hover {
    font-weight: 600;
    border-width: medium;
    transform: scale(1, 1.1);
  }
`;
