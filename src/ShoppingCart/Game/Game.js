import React, { useEffect } from "react";
import { GameContext } from "../ContextStore/ContexStore";
import { useLocation } from "react-router-dom";
import { Loanding } from "../Loanding/Loading";
import { useFetch } from "../CustomHook/useFech";
import "./Games.css";
import { Modal } from "../Modal/Modal";

function Game() {
  const { onAddGames } = React.useContext(GameContext);

  const location = useLocation();

  const url = `game${location.search}`;
  const { data, uLoanding } = useFetch(url);

  return (
    <>
      {uLoanding ? (
        <Loanding />
      ) : (
        <div className="container-game">
          <section className="Left-column">
            <img src={data.thumbnail} alt="game thumbnail" />
            <h3>Additional information</h3>
            <p>{data.short_description}</p>
            <p>Gender: {data.genre}</p>
            <p>Platform: {data.platform}</p>
            <p>Developer: {data.developer}</p>
            <p>Game status: {data.status}</p>
            <p>Price: ${data.id}.00</p>
            <button onClick={() => onAddGames(data)}>🛒 Add to cart</button>
          </section>
          <section className="right-column">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h3>{data.title} Screenshots</h3>
            <div className="images">
              <img
                src={data.screenshots[0].image}
                alt="game thumbnail image1"
              />
              <img
                src={data.screenshots[1].image}
                alt="game thumbnail image2"
              />
              <img
                src={data.screenshots[2].image}
                alt="game thumbnail image3"
              />
            </div>
          </section>
          <Modal></Modal>
        </div>
      )}
    </>
  );
}

export { Game };
