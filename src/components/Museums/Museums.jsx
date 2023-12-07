import React, { useState, useEffect } from "react";
import { MuseumsMap } from "../MuseumsMap";
import axios from 'axios';

export const Museums = () => {
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios({ method: "get", url: "http://localhost:3001/museums" });

    setMuseums(res.data);
  };

  return (
    <div>
      <h1 align="center">Музеї України</h1>
      { museums && (<MuseumsMap museums={museums}/>) }
    </div>
  );
};
