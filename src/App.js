import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // Using state inside react to save variables for this sequence of the app.
  // Writing variables within the state to be used around the app
  // useState is a short term memory store
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition, always runs a function
  useEffect(() => {
    // run code...
    // this is the hash
    const hash = getTokenFromUrl();
    //We dont want to token to sit in the url, this clears the accesstoken from url
    window.location.hash = "";
    // access token is inside the object that gets returned.
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // We need to provide the access token to the Spotify API
      spotify.setAccessToken(_token);

      // Get userAccount, returns a promise
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    // Spotify playlist
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotify
      .getPlaylist("5la4fHupddbDAlak7BJBcz")
      .then((response) =>
        dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: response })
      );

    //console.log("I HAVE A TOKEN :point ", token);
  }, []);

  //console.log("Person: ", user);
  //console.log("Token: ", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
