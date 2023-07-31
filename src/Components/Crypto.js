import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CriptoCard from "./CryptoCard";
import CryptoSearch from "./CryptoSearch";
import style from "./Crypto.module.css";

const Crypto = () => {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    const fechData = async () => {
      try {
        let response = await axios.get(
          `https://api.coinstats.app/public/v1/coins?skip=0`
        );
        console.log("==>", response);
        setList(response.data.coins);
      } catch (error) {
        alert(error);
      }
    };
    fechData();
  }, []);

  const filteredArr = list.filter((item) =>
    item.name.toUpperCase().includes(searchParams.toUpperCase())
  );

  return (
    <div className={style.continerBody}>
      <CryptoSearch
        onSearchparams={(e) => {
          setSearchParams(e);
        }}
      />
      <h3 className={style.heading}>List of Crypto</h3>
      <div className={style.displayCrypto}>
        {filteredArr &&
          filteredArr.map((item) => (
            <CriptoCard
              key={item.name}
              name={item.name}
              img={item.icon}
              price={item.price}
              link={item.websiteUrl}
            />
          ))}
      </div>
      {!filteredArr.length && <h5>Nothing Here</h5>}
    </div>
  );
};

export default Crypto;
