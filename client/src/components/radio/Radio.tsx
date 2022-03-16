import classnames from 'classnames';
import React, { forwardRef } from 'react';
import { useId } from 'react-id-generator';

import styles from './Radio.module.scss';

export type RadioProps = {
  name: string;
  label: string;
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ id, label, hasError = false, className, ...props }, ref) => {
  const radioClassName = classnames({
    [styles.hasError]: hasError,
    className,
  });
  const [autoId] = useId();
  const finalId = id || autoId;

  return (
    <div className={radioClassName}>
      <input type="radio" role={hasError ? 'alert' : undefined} className={styles.radioInput} id={finalId} ref={ref} {...props} />
      <label className={styles.label} htmlFor={finalId}>
        {label}
      </label>
    </div>
  );
});

Radio.displayName = 'Radio';
