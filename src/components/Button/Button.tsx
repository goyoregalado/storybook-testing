import styles from "./Button.module.css";
import classNames from "classnames";

export type ButtonProps = {
  /**
   * Button title
   */
  title: string;
  /**
   * Button type. Primary is darker, secondary is lighter
   */
  type?: "primary" | "secondary";
  /**
   * Button click handler
   */
  onClick?: () => void;
};

export const Button = ({ title, type = "primary", onClick }: ButtonProps) => (
  <button className={classNames(styles.base, styles[type])} onClick={onClick}>
    {title}
  </button>
);
