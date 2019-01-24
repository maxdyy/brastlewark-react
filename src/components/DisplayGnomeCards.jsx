import React from "react";
import GnomeCard from "./GnomeCard";
import Error from "./Error";
import "../css/DisplayGnomeCards.css";

const createGnomeCards = (searchValue, searchResult) => {
  if (
    !searchValue ||
    !searchResult.length ||
    (searchValue && !searchResult.length)
  ) {
    return <Error message="No Gnomes Found, try again!" />;
  } else if (searchResult.length) {
    return searchResult.map(gnome => <GnomeCard data={gnome} key={gnome.id} />);
  } else {
    return null;
  }
};

const DisplayGnomeCards = ({ searchValue, searchResult }) => (
  <div className="bc-app__gnome-cards__wrapper">
    {createGnomeCards(searchValue, searchResult)}
  </div>
);

export default DisplayGnomeCards;
