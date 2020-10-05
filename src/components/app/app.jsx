import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Welcome from "../welcome/welcome";
import SignIn from "../sign-in/sign-in";
import DevArtist from "../dev-artist/dev-artist";
import DevGenre from "../dev-genre/dev-genre";
import Result from "../result/result";
import GameOver from "../game-over/game-over";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome errorsCount={errorsCount} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/dev-artist">
          <DevArtist />
        </Route>
        <Route exact path="/dev-genre">
          <DevGenre />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
        <Route exact path="/lose">
          <GameOver />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
