import { useState, useMemo } from "react";
import "./BirthDate.css";

interface BirthDateProps {
  onDateChange: (date: string) => void;
}

export function BirthDate({ onDateChange }) {
  const [day, setDay] = useState(6);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2023);
  const [date, setDate] = useState("06/01/2023");

  const handleChange = useMemo(
    () =>
      (setState: (value: number) => void) =>
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value);
        setState(value);
        const formattedDate = formatDate(day, month, year);
        setDate(formattedDate);
        onDateChange(formattedDate);
      },
    [day, month, year, onDateChange]
  );

  const formatDate = (day: number, month: number, year: number) => {
    return `${padWithZero(day)}/${padWithZero(month)}/${year}`;
  };

  const padWithZero = (number: number) => {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  };

  return (
    <div className="birthdate-container">
      <select value={day} onChange={handleChange(setDay)}>
        {[...Array(31)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <select value={month} onChange={handleChange(setMonth)}>
        {[
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ].map((month, i) => (
          <option key={i + 1} value={i + 1}>
            {month}
          </option>
        ))}
      </select>
      <select value={year} onChange={handleChange(setYear)}>
        {[...Array(123)].map((_, i) => (
          <option key={i + 1900} value={i + 1900}>
            {i + 1900}
          </option>
        ))}
      </select>
    </div>
  );
}
