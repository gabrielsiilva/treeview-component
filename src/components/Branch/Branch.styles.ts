import styled from 'styled-components';

interface ButtonProps {
  transformIcon: boolean;
}

interface ContentProps {
  level: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;

  background-color: #ededed;
  margin: 0.1rem;
  padding: 0.7rem;

  padding-left: ${props => props.level}rem;
`

export const ExpandButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  transform: ${props => props.transformIcon && 'rotate(90deg)'};
`;