import {GameType} from "../const";

const AVATAR_URL = `https://www.fillmurray.com/`;
const AVATAR_MIN_SIZE = 125;
const AVATAR_MAX_SIZE = 135;

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export default [
  {
    type: GameType.GENRE,
    genre: `rock`,
    answers: [{
      src: `https://drive.google.com/file/d/18uDKMoC31vOrvkyIHv7C1st9wbXQ7hnS/view?usp=sharing`,
      genre: `rock`,
    }, {
      src: `https://drive.google.com/file/d/1hZSOkJfTirPeRErdHYEIG6_YSVlQsOMO/view?usp=sharing`,
      genre: `pop`,
    }, {
      src: `https://drive.google.com/file/d/1yn27SaEBr8f0ZtB0WavUIM4-8EhaexDl/view?usp=sharing`,
      genre: `pop`,
    }, {
      src: `https://drive.google.com/file/d/1fl5TOFCncXKoXJO3-wIy3G3Ebj8L1P-X/view?usp=sharing`,
      genre: `rock`,
    }]
  }, {
    type: GameType.ARTIST,
    song: {
      artist: `Malchishnik`,
      src: `https://drive.google.com/file/d/1n14Gwr_Xx9tcd64NENg5t_2bAh60bTcD/view?usp=sharing`,
    },
    answers: [{
      picture: `${AVATAR_URL}${getRandomInteger(AVATAR_MIN_SIZE, AVATAR_MAX_SIZE)}/${getRandomInteger(AVATAR_MIN_SIZE, AVATAR_MAX_SIZE)}`,
      artist: `Niletto`,
    }, {
      picture: `${AVATAR_URL}${getRandomInteger(AVATAR_MIN_SIZE, AVATAR_MAX_SIZE)}/${getRandomInteger(AVATAR_MIN_SIZE, AVATAR_MAX_SIZE)}`,
      artist: `Malchishnik`,
    }, {
      picture: `${AVATAR_URL}${getRandomInteger(AVATAR_MIN_SIZE, AVATAR_MAX_SIZE)}/${getRandomInteger(AVATAR_MIN_SIZE, AVATAR_MAX_SIZE)}`,
      artist: `Hensy`,
    }],
  }
];
