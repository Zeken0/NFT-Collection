import "./App.css";
import Header from "./components/Header";
import PunkList from "./components/PunkList";
import Main from "./components/Main";
import React, { useState, useEffect } from "react";
import axios from "axios";
// https://testnets-api.opensea.io/assets?asset_contract_address=0x7870d0e7Cac591dB68f0ebC14C984184c8eFd2aa&order_direction=asc
function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState([0]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://testnets-api.opensea.io/assets?asset_contract_address=0x7870d0e7Cac591dB68f0ebC14C984184c8eFd2aa&format=json&order_direction=asc"
      );
      console.log(openseaData);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
