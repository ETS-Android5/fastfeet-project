import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content> {children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
