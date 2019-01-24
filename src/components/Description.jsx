import React from "react";
import "../css/Description.css";

const Description = ({ info }) => {
  const { professions, friends, hair_color, height, weight } = info;
  return (
    <div className="bc-app__gnome-cards__card__description">
      <div className="bc-app__gnome-cards__card__description__row">
        <div>
          <span className="bc-app__gnome-cards__card__description--bold">
            Hair Color:{" "}
          </span>
          <span>{hair_color}</span>
        </div>
        <div>
          <span className="bc-app__gnome-cards__card__description--bold">
            Height:{" "}
          </span>
          <span>{Math.round(height)} cm</span>
        </div>
        <div>
          <span className="bc-app__gnome-cards__card__description--bold">
            Weight:{" "}
          </span>
          <span>{Math.round(weight)} kg</span>
        </div>
      </div>
      {professions.length ? (
        <div className="bc-app__gnome-cards__card__description__row">
          <span className="bc-app__gnome-cards__card__description--bold">
            Professions:{" "}
          </span>
          <span>{professions.join(", ")}</span>
        </div>
      ) : null}
      {friends.length ? (
        <div className="bc-app__gnome-cards__card__description__row">
          <span className="bc-app__gnome-cards__card__description--bold">
            Friends:{" "}
          </span>
          <span>{friends.join(", ")}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Description;
