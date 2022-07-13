import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  display: none;
`;

export const DecorativeInput = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 2px solid #7e8287;
  box-sizing: border-box;
  pointer-events: none;
  transition: border 0.15s ease-out;
  &:before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    left: 4px;
    top: 4px;
    border-radius: 50%;
    transition: background-color 0.15s ease-out;
  }
`;

export const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding: 0 0 0 42px;
  user-select: none;
  &:hover {
    & ${DecorativeInput} {
      border: 2px solid #141c25;
    }
  }
`;

export const ItemWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  & ${Input}:checked + ${Label} {
    & ${DecorativeInput} {
      border-color: #141c25;
      &:before {
        background-color: #141c25;
      }
    }
  }
`;
