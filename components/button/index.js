// @flow
/**
 * @author renmaomin@126.com
 */
import React from 'react';
import styled from 'styled-components';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';

type PropTypes = {
  color: 'primary' | 'default',
  children: any
};

const ButtonStyled = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${({ color }) => ((color === 'primary') ? 'palevioletred' : 'white')};
  color: ${({ color }) => ((color === 'primary') ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Button = ({ children, ...props }: PropTypes) => (
  <ButtonStyled {...props}>
    {children}
  </ButtonStyled>
);

const loadingHOC = compose(
  defaultProps({
    color: 'default',
  }),
);

export default loadingHOC(Button);
