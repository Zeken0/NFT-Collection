import weth from "../assets/weth.png";
import "./css/CollectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="image of the nft" />
      <div className="details">
        <div className="name">{name}</div>
        <div className="id">#{id}</div>
        <div className="priceContainer">
          <img
            src={weth}
            className="wethImage"
            alt="image of the ethereum blockchain"
          />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
