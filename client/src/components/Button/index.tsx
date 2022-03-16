import React, { forwardRef, ReactElement } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export type ButtonTheme =
  | 'dark'
  | 'darkInverted'
  | 'brand'
  | 'linkUnderlined'
  | 'linkBold'
  | 'outline'
  | 'outlineWhite'
  | 'danger'
  | 'darkWithMortarOutline'
  | 'brandWithMortarOutline';

type CommonButtonProps = {
  icon?: ReactElement;
  disabled?: boolean;
  fakeDisabled?: boolean;
  block?: boolean;
  theme?: ButtonTheme;
  component?: React.ElementType;
};

// @TODO  Interface needs to be improved
export type ButtonProps = CommonButtonProps &
  (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>);

export const Button = forwardRef<HTMLElement, ButtonProps>(
  ({ children, icon, disabled, theme, block, component: Component = 'button', fakeDisabled, className, ...props }, ref) => {
    const iconOnly = icon !== undefined && children === undefined;

    const buttonClassname = classNames(styles.button, className, {
      // Styles
      [styles.outlineWhite]: theme === 'outlineWhite',
      [styles.outline]: theme === 'outline' || (theme === undefined && iconOnly),
      [styles.dark]: theme === 'dark' || theme === undefined,
      [styles.darkInverted]: theme === 'darkInverted',
      [styles.brand]: theme === 'brand',
      [styles.brandWithMortarOutline]: theme === 'brandWithMortarOutline',
      [styles.darkWithMortarOutline]: theme === 'darkWithMortarOutline',
      [styles.linkUnderlined]: theme === 'linkUnderlined',
      [styles.fakeDisabled]: fakeDisabled,
      [styles.danger]: theme === 'danger',
      [styles.linkBold]: theme === 'linkBold',
      [styles.block]: block,
      [styles.iconOnly]: iconOnly,
    });

    if (Component === 'button' && props.type === undefined) {
      // Buttons should not submit by default, this should be set explicitly.
      props.type = 'button';
    }

    return (
      <Component disabled={disabled} className={buttonClassname} {...props} ref={ref}>
        {icon}
        {children && <span>{children}</span>}
      </Component>
    );
  }
);

Button.displayName = 'Button';
