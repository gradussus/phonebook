import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 450px;
  border: tomato solid;
  border-radius: 10px;
  padding: 23px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  text-align: start;
`;
export const Name = styled.span`
  font-weight: 600;
  flex-basis: 200px;
  font-family: 'La Belle Aurore', cursive;
`;
export const Number = styled.span`
  flex-basis: 150px;
  font-family: 'La Belle Aurore', cursive;
`;
export const DeleteBtn = styled.button`

  padding: 0px 20px;
  margin-top: -4px;
  height: 19px;
`;
