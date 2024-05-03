import styles from "./TextField.module.css";

export type TextFieldProps = {
  label: string;
  id: string;
  placeholder?: string;
  type?: "email" | "password" | "text";
  error?: string;
  value: string;
  setValue: (value: string) => void;
};

export const TextField = ({
  id,
  label,
  placeholder,
  type,
  error,
  value,
  setValue,
}: TextFieldProps) => {
  return (
    <div className={styles.base}>
      <div className={styles.inputLabel}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <p className={styles.error}>{error}</p>
      </div>
    </div>
  );
};
