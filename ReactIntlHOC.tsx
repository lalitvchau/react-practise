import React from 'react';
import { useIntl } from 'react-intl';

/**
 * An HOC (high-order-component) for using react-intl in Class components.
 * @param Component 
 * @returns JSX.element
 */
function withIntl<P extends object>(Component: React.ComponentType<P>): any {
  return (props: P) => {
    const intl = useIntl();
    return <Component intl={intl} {...props as P} /> as any;
  }
};

export default withIntl;
