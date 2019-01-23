import React, { Component } from "react";
import GnomeCard from "./GnomeCard";
import SearchBar from "./SearchBar";
import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allGnomesData: null,
      searchFilter: "name"
    };
  }

  componentDidMount() {
    const getData = async () => {
      // Getting the data from the API
      const response = await fetch(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      );

      // Transforming the data in a json
      const json = await response.json();

      // Setting new data to the app state
      this.setState({ allGnomesData: json });
    };

    getData();
  }

  handleSearchFilter = searchFilter => {
    this.setState({ searchFilter });
  };

  handleSearch = searchValue => {
    const { searchFilter, allGnomesData } = this.state;
    const { Brastlewark } = allGnomesData;

    if (searchFilter === "name") {
      const gnomes = Brastlewark.filter(gnome =>
        gnome[searchFilter].toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(gnomes);
    } else {
      const gnomes = Brastlewark.filter(gnome =>
        gnome[searchFilter].find(item =>
          item.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      console.log(gnomes);
    }
  };

  render() {
    return (
      <div className="bc-app">
        <div className="bc-app__wrapper">
          <SearchBar
            handleSearchFilter={this.handleSearchFilter}
            handleSearch={this.handleSearch}
          />
          <GnomeCard />
        </div>
      </div>
    );
  }
}

export default App;
