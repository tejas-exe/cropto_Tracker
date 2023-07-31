import React from "react";
import style from "./Crypto.module.css";

const CryptoSearch = ({ onSearchparams }) => {
  return (
    <div className={style.searchbar}>
      <input
        type="text"
        placeholder="Serch crypto  you like here"
        className={style.searchInput}
        onChange={(e) => {
          onSearchparams(e.target.value);
        }}
      />
    </div>
  );
};

export default CryptoSearch;
