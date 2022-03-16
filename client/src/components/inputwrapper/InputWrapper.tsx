import classNames from 'classnames';
import React, { ReactNode } from 'react';

import styles from './Inputwrapper.module.scss';

export type InputWidth = 'full' | 'limited';

interface InputWrapperProps {
  error?: boolean;
  className?: string;
  fixedHeight?: boolean; // With this you can remove the fixed height. Currently in use for the textarea
  inputWidth?: InputWidth;
  children: ReactNode;
}

export const InputWrapper = ({ error, fixedHeight = true, children, className, inputWidth }: InputWrapperProps) => {
  const inputWrapperClassName = classNames(
    {
      [styles['inputWrapper']]: fixedHeight,
      [styles['textareaWrapper']]: !fixedHeight,
      [styles['withMaxWidth']]: inputWidth == 'limited',
      [styles['error']]: error,
    },
    className
  );

  return <div className={inputWrapperClassName}>{children}</div>;
};
