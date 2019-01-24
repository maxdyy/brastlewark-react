import React from "react";
import { Card } from "antd";
import Description from "./Description";

const { Meta } = Card;

const GnomeCard = ({ data }) => {
  const { thumbnail, name, professions, friends } = data;

  const gnomeDescription = { professions, friends };

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
      <Meta
        title={name}
        description={<Description info={gnomeDescription} />}
      />
    </Card>
  );
};

export default GnomeCard;
