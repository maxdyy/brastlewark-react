import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const GnomeCard = ({ data }) => {
  const { thumbnail, name, professions, friends } = data;
  const description = (professions, friends) => (
    <div>
      <div>
        <span>Professions: </span>
        <span>{professions.join(", ")}</span>
      </div>
      <div>
        <span>Friends: </span>
        <span>{friends.join(", ")}</span>
      </div>
    </div>
  );
  return (
    <Card
      className="bc-app__gnome-cards__card"
      style={{ width: 240, margin: 10 }}
      cover={
        <img
          alt="avatar"
          src={thumbnail}
          className="bc-app__gnome-cards__card__img"
        />
      }
    >
      <Meta title={name} description={description(professions, friends)} />
    </Card>
  );
};

export default GnomeCard;
