import React from "react";
import "./Body.css";
import SongRow from "./SongRow";
import PLayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import Favorite from "@material-ui/icons/Favorite";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PLayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {/*List of songs*/}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
