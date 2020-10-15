import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Welcome from "../welcome/welcome";
import SignIn from "../sign-in/sign-in";
import DevArtist from "../dev-artist/dev-artist";
import DevGenre from "../dev-genre/dev-genre";
import Result from "../result/result";
import GameOver from "../game-over/game-over";
import Game from "../game/game";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <Welcome
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/dev-artist">
          <DevArtist
            question={secondQuestion}
          />
        </Route>
        <Route exact path="/dev-genre">
          <DevGenre
            question={firstQuestion}
          />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
        <Route exact path="/lose">
          <GameOver />
        </Route>
        <Route exact path="/game">
          <Game
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
