import React, { useState, useEffect } from "react";
import styles from "./toggle.module.scss";
import classnames from "classnames";
import { MdCheck } from "react-icons/md";

// const toggleContainer = (disabled: boolean) => css`
//   position: relative;
//   cursor: ${disabled ? "default" : "pointer"};
//   width: min-content;
// `;

// const toggleBackground = (
//   isPressed: boolean,
//   colors: IColors,
//   isSecondLabel: boolean,
//   disabled: boolean
// ) => css`
//   display: block;
//   width: 36px;
//   height: 20px;
//   background: ${disabled
//     ? colors.tx_text_disabled
//     : isSecondLabel
//     ? colors.tx_text_primary
//     : isPressed
//     ? colors.t_green
//     : colors.tx_text_teriaty};
//   border-radius: 100px;
// `;

// const toggleCircle = (
//   isPressed: boolean,
//   colors: IColors,
//   isSecondLabel: boolean,
//   disabled: boolean
// ) => css`
//   display: block;
//   position: absolute;
//   width: 16px;
//   height: 16px;
//   top: 2px;
//   left: 2px;
//   border-radius: 100px;
//   cursor: ${disabled ? "default" : "pointer"};
//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 150ms;
//   margin-left: ${isPressed ? "16px" : "0"};
//   background: ${colors.bg_white};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   svg {
//     color: ${colors.tx_text_primary};
//   }
// `;
// const iconCss = css`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   div {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const mainContainer = (colors: IColors, disabled: boolean) => css`
//   display: flex;
//   align-items: center;

//   label {
//     color: ${disabled ? colors.tx_text_disabled : colors.tx_text_primary};
//     font-family: Montserrat;
//     font-style: normal;
//     font-weight: normal;
//   }
//   .l {
//     margin: 0;
//     margin-left: 8px;
//   }
//   .r {
//     margin: 0;
//     margin-right: 8px;
//   }
//   .S {
//     font-size: 14px;
//     line-height: 130%;
//   }
//   .M {
//     font-size: 16px;
//     line-height: 20px;
//   }
// `;

export interface Props {
  checked?: boolean;
  setPressed?: (value: boolean) => void;
  label?: string;
  secondLabel?: string;
  disabled?: boolean;
}

export const Toggle = ({
  setPressed,
  label = "",
  secondLabel = "",
  disabled = false,
  ...props
}: Props) => {
  const [innerPressed, setInnerPressed] = useState(props.checked || false);

  useEffect(() => {
    setInnerPressed((props as { checked: boolean }).checked);
  }, [(props as { checked: boolean }).checked]);

  const handlePress = () => {
    if (!disabled) {
      if (setPressed) {
        setPressed(!innerPressed);
      }
      setInnerPressed(!innerPressed);
      //@ts-ignore
      if (props.onChange) {
        //@ts-ignore
        props.onChange(!innerPressed);
      }
    }
  };

  const isSecondLabel = secondLabel ? true : false;

  return (
    <div className={styles.mainContainer}>
      {secondLabel && <label className="r">{secondLabel}</label>}
      <div
        className={classnames(styles.toggleContainer, {
          [styles.disabled]: disabled,
        })}
        onClick={handlePress}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === " ") {
            e.preventDefault();
            handlePress();
          }
        }}
      >
        <span
          className={classnames(styles.toggleBackground, {
            [styles.pressed]: innerPressed,
            [styles.disabled]: disabled,
            [styles.secondLabel]: isSecondLabel,
            [styles.singleLabel]: !isSecondLabel,
          })}
        ></span>
        <span
          className={classnames(styles.toggleCircle, {
            [styles.pressed]: innerPressed,
            [styles.disabled]: disabled,
            [styles.secondLabel]: isSecondLabel,
            [styles.singleLabel]: !isSecondLabel,
          })}
        >
          {isSecondLabel && <MdCheck />}
        </span>
      </div>
      {label && <label className="l">{label}</label>}
    </div>
  );
};
