import _ from 'lodash';
import Card from '../Card';
import { v4 as uuidv4 } from 'uuid';
import cardValues from '../cardValues';

let cards = [];
let playingCards = [];
let floorCards = [];

//It creates 8 copy of each playing cards
export const initializeCards = () => {
  for (let i = 0; i < 8; i++) {
    createPlayingCard();
  }

  //shufle cards array
  const shuffledCards = _.shuffle(cards);
  cards = shuffledCards;

  getRandomPlayGroundCards();

  getRemainingFloorCards();

  chunkPlayingCards();

  showFrontSideOfLastCardsInChunks();

  return { playingCards, floorCards };
};

//It creates 13 playing cards
const createPlayingCard = () => {
  const constructedCards = cardValues.map((cardItem) => {
    return new Card(cardItem.value, cardItem.image, uuidv4());
  });

  cards.push(...constructedCards);
};

const getRandomPlayGroundCards = () => {
  // lower and upper bounds
  let lower = 0;
  let upper = 103;

  let randomIndexes = [];

  // Calculating 54 random values in range 0 and 103
  while (playingCards.length !== 54) {
    let randomNum = _.random(lower, upper);
    if (randomIndexes.includes(randomNum)) continue;
    playingCards.push(cards[randomNum]);
    randomIndexes.push(randomNum);
  }
};

const getRemainingFloorCards = () => {
  // floorCards = cards.filter((card) => {
  //   let filtered = playingCards.filter((playCard) => playCard.id === card.id);
  //   if (filtered.length === 0) return card;
  // });
  floorCards = cards.filter((card) =>
    playingCards.every((playingCard) => playingCard.id !== card.id)
  );
};

const chunkPlayingCards = () => {
  const overflowingItems = playingCards.slice(-4); // first 100
  playingCards = playingCards.slice(
    0,
    playingCards.length - 4
  );
  playingCards = _.chunk(playingCards, 5); // 5 group of 20
  for (let i = 0; i < overflowingItems.length; i++) {
    playingCards[i].push(overflowingItems[i]);
  }
};

const showFrontSideOfLastCardsInChunks = () => {
  for (let i = 0; i < playingCards.length; i++) {
    const length = playingCards[i].length;
    playingCards[i][length - 1].showFront = true;
  }
};

const checkMove = (evt) => {
  return evt.draggedContext.element.showFront;
};

const dealFloorCards = () => {
  for (let i = 0; i < 10; i++) {
    const card = floorCards.shift();
    card.showFront = true;
    playingCards[i].push(card);
  }
};

const showLastElementWhenAllChunkIsReversed = (chunkIndex) => {
  const chunkLength = playingCards[chunkIndex].length;
  const lastCardOfChunk = playingCards[chunkIndex][chunkLength - 1];
  if (!lastCardOfChunk.showFront) lastCardOfChunk.showFront = true;
};
