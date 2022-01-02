import react from "react";
import "./App.css";
import Header from "./components/Header";
import PunkList from "./components/PunkList";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x7870d0e7Cac591dB68f0ebC14C984184c8eFd2aa&order_direction=asc"
      );
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
