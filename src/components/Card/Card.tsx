import styles from "./Card.module.css";
import classNames from "classnames";

export type CardProps = {
  /**
   * Card title
   */
  title: string;
  /**
   * Card long description text. Between 50 and 100 words.
   */
  description: string;
  /**
   * Card thumbnail image URL
   */
  image?: string;
};

export const Card = ({ title, description, image }: CardProps) => (
  <div className={classNames(styles.base)}>
    {image && <img src={image} alt={title} />}
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
