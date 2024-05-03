import styles from "./Chip.module.css";
import classNames from "classnames";
import { ChipColor } from "./ChipColor.ts";

export type ChipProps = {
  /**
   * Chip short description text. Between 10 and 20 words.
   */
  label: string;
  /**
   * Chip color.
   * @default "green"
   */
  color?: ChipColor;
};

export const Chip = ({ label, color = ChipColor.GREEN }: ChipProps) => (
  <div className={classNames(styles.base, styles[color])}>
    <span>{label}</span>
  </div>
);
