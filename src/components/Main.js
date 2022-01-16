import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./css/Main.css";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt="of the highlighted nft"
            />
          </div>
        </div>

        <div className="allDetails">
          <div className="punkDetails">
            <div className="title">{activePunk.name}</div>
            <span className="itemNumber">#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerLeftSideContent">
              <div className="ownerImageContainer">
                <img
                  src={activePunk.owner.profile_img_url}
                  alt="of the owner"
                />
              </div>
              <div className="ownerDetails">
                <div className="ownerNameAndHandle">
                  <div className="ownerName">{activePunk.owner.address}</div>
                  <div className="ownerHandle">@Ahmed J. Jibril</div>
                </div>
              </div>
            </div>
            <div className="ownerRightSideContent">
              <div className="ownerGroupLinks">
                <div className="ownerLink">
                  <img src={instagramLogo} alt="of Instagrams logo" />
                </div>
                <div className="ownerLink">
                  <img src={twitterLogo} alt="of Titters logo" />
                </div>
                <div className="ownerLink">
                  <img src={moreIcon} alt="of three dots" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
