import React, { FC } from 'react';

import styles from './Typography.module.scss';

interface CopyProps {
  component?: React.ElementType;
}

/**
 * Wrapper component for any kind of copy (marketing texts, blog articles etc.)
 */
export const Copy: FC<CopyProps> = ({ component: Component = 'div', children }) => {
  return <Component className={styles['copy']}>{children}</Component>;
};
