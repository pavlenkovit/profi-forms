import styled, {css} from 'styled-components';

export const Form = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 5px 30px rgb(0 0 0 / 5%);
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 28px;
`;

export const Elements = styled.div`
  flex: 1 1 auto;
  height: 1%;
`;

export const Button = styled.button<{dataType: string}>(
  ({dataType}) => css`
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    flex-basis: 50%;
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
    ${dataType === 'secondary' &&
    css`
      color: #141c25;
      background: #f3f3f4;
    `}
    ${dataType === 'primary' &&
    css`
      color: #fff;
      background: #141c25;
    `}
  `,
);

export const Footer = styled.div`
  margin-top: 36px;
  display: flex;
  gap: 8px;
`;
