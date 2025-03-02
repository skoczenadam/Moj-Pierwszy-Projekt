"use client";
import { useState } from "react";
import styles from "./LanguageSelector.module.css";

export function LanguageSelector() {
  const [selectedOption, useSelectedOption] = useState("PL");
  return (
    <>
      <p>Wybrana opcja: {selectedOption}</p>
      <select
        className={styles.languageSelector}
        onChange={(e) => useSelectedOption(e.target.value)}
      >
        <option value="PL">Polski</option>
        <option value="EN">Angielski</option>
      </select>
    </>
  );
}
