export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "5904fd99dcbd4b26bf191d9d51da9319";

// You are now letting spotify display the following scopes through the data, for now it is only read data only.
// Allowing the app to do the following:
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  //
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessToken=mysupersecretkey&name=martin&
      // split at the = and only return accessToken value
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
