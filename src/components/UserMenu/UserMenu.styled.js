import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  color: #f1ede1;
  background-color: #1d4ed8;
  cursor: pointer;
  &.active {
    color: #ada7cb;
  }
`;
