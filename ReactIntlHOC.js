import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

export function withReactIntl(WrappedComponent) {

  const ReactIntl = (props) => {
    const intl = useIntl(0);
    return (<WrappedComponent intl={intl} {...props} />);
  };

  withReactIntl.propTypes = {
    WrappedComponent: PropTypes.node.isRequired,
  };
  withReactIntl.displayName = `withReactIntl(${WrappedComponent.displayName})`;
  return ReactIntl;
};
