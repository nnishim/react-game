import React, { useState } from "react";
import "./Board.css";
import brain from "./img/brain.png";
import coins from "./img/coins.png";
import idea from "./img/idea.png";
import moneyBag from "./img/money-bag.png";
import rocket from "./img/rocket.png";
import target from "./img/target.png";
import question from './img/question.png'

import { shuffle } from "lodash";

const data = [
  { src: brain, id: 1 },
  { src: coins, id: 2 },
  { src: idea, id: 3 },
  { src: moneyBag, id: 4 },
  { src: rocket, id: 5 },
  { src: target, id: 6 },
];
const double = shuffle([...data, ...data]);
function Board() {
  return (
    <div className="board">
      {double.map((icon, index) => {
        return (
					<div className="board__item">
						<div className="card__face card__face--front">
							<img key={index} src={icon.src} className="board__icon" alt="" />
						</div>
						<div className="card__face card__face--back">
							<img src={question} className="board__icon" alt="" />
						</div>
					</div>
        );
      })}
    </div>
  );
}

export default Board;
