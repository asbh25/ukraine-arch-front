import React, { useState, useEffect } from "react";
import { MuseumsMap } from "../MuseumsMap";
import axios from 'axios';

export const Stadiums = () => {
  const [stadiums, setStadiums] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios({ method: "get", url: "http://localhost:3001/stadiums" });

    setStadiums(res.data);
  };

  return (
    <div>
      <h1 align="center">Стадіони України</h1>
      { stadiums && (<MuseumsMap museums={stadiums} indicator="stadium" />) }
    </div>
  );
};
