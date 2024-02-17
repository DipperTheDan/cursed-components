import React, { useState, useEffect } from "react";
import styles from "./date.module.css";

export interface DatePickerProps {
  min?: string;
  max?: string;
  value?: string;
  locale?: string;
  label: string;
}

const DatePicker = ({locale = "GB", label = "Select a date", min, max, value }: DatePickerProps) => {
  const [internalValue, setInternalValue] = useState(value ?? "");
  const formattedDate = new Date(Number(internalValue) * 1000).toLocaleDateString(locale);

  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(ev?.target?.value);
  };

  return (
    <label className={styles.label}>
      {label}
      <div>
        {internalValue ? `${formattedDate}` : null}
        <input className={styles.slider} type="range" min={min} max={max} value={internalValue} onChange={handleOnChange} />
      </div>
    </label>
  );
}

export default DatePicker;