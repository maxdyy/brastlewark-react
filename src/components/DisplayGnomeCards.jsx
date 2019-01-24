import React from "react";
import GnomeCard from "./GnomeCard";
import "../css/DisplayGnomeCards.css";

const createGnomeCards = (allGnomesData, searchValue, searchResult) => {
  if (searchResult.length) {
    return searchResult.map(gnome => <GnomeCard data={gnome} key={gnome.id} />);
  } else if ((searchValue && !searchResult.length) || !searchResult.length) {
    return <div>No Gnomes Found, try again!</div>;
  } else {
    return allGnomesData
      .slice(0, 4)
      .map(gnome => <GnomeCard data={gnome} key={gnome.id} />);
  }
};

const DisplayGnomeCards = ({ allGnomesData, searchValue, searchResult }) => (
  <div className="bc-app__gnome-cards__wrapper">
    {createGnomeCards(allGnomesData, searchValue, searchResult)}
  </div>
);

export default DisplayGnomeCards;
