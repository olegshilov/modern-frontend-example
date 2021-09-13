import styled from 'astroturf/react';

interface ButtonProps {
  primary?: boolean;
  color?: 'green' | 'red';
}

export const Button = styled<'button', ButtonProps>('button')`
  --button-color: black;
  --button-border-color: black;
  --button-color-red: red;
  --button-color-blue: blue;
  --button-color-green: green;

  display: inline-block;
  cursor: pointer;
  appearance: none;
  border-radius: 4px;
  padding: 4px 8px;
  line-height: 20px;
  font-size: 14px;
  color: var(--button-color);
  border: 1px solid var(--button-border-color);
  background-color: white;

  &.primary {
    --button-color: var(--button-color-blue);
    --button-border-color: var(--button-color-blue);
  }

  &.color-green {
    --button-color: var(--button-color-green);
  }

  &.color-red {
    --button-color: var(--button-color-red);
  }
`;
