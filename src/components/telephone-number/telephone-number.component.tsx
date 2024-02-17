import React, { useState } from "react";
import styles from "./telephone-number.module.css";

export interface TelephoneNumberProps {
  min?: string;
  max?: string;
  value?: string;
  countryCode?: string;
  label: string;
}

const TelephoneNumber = ({countryCode = "+44", label = "Telephone number", min, max, value }: TelephoneNumberProps) => {
  const [internalValue, setInternalValue] = useState(value ?? "");

  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(ev?.target?.value);
  };

  return (
    <label className={styles.label}>
      {label}
      <div>
        {internalValue ? `${countryCode} ${internalValue}` : null}
        <input className={styles.slider} type="range" min={min} max={max} value={internalValue} onChange={handleOnChange} />
      </div>
    </label>
  );
}

export default TelephoneNumber;