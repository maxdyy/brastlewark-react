import React from "react";
import "../css/Description.css";

const Description = ({ info }) => {
  const { professions, friends } = info;
  return (
    <div className="bc-app__gnome-cards__card__description">
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
