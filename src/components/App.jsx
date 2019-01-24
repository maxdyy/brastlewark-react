import React, { Component } from "react";
import Welcome from "./Welcome";
import SearchBar from "./SearchBar";
import DisplayGnomeCards from "./DisplayGnomeCards";
import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allGnomesData: null,
      searchFilter: "name",
      searchValue: null,
      searchResult: [],
      firstSearchOccurred: false
    };
  }

  componentDidMount() {
    const getBrastlewarkData = async () => {
      // Getting the data from the API
      const response = await fetch(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      );

      // Transforming the data in a json
      const json = await response.json();

      // Setting new data to the app state
      this.setState({ allGnomesData: json.Brastlewark });
    };

    getBrastlewarkData();
  }

  handleSearchFilter = searchFilter => {
    this.setState({ searchFilter });
  };

  handleSearch = searchValue => {
    const { searchFilter, allGnomesData, firstSearchOccurred } = this.state;
    let foundGnomes = [];

    if (searchFilter === "name") {
      foundGnomes = allGnomesData.filter(gnome =>
        gnome[searchFilter].toLowerCase().includes(searchValue.toLowerCase())
      );
    } else {
      foundGnomes = allGnomesData.filter(gnome =>
        gnome[searchFilter].find(item =>
          item.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }

    if (foundGnomes.length) {
      this.setState({ searchResult: foundGnomes, firstSearchOccurred: true });
    }
  };

  render() {
    const {
      firstSearchOccurred,
      allGnomesData,
      searchValue,
      searchResult
    } = this.state;

    return (
      <div className="bc-app">
        <div className="bc-app__wrapper">
          {!firstSearchOccurred ? <Welcome /> : null}
          <SearchBar
            handleSearchFilter={this.handleSearchFilter}
            handleSearch={this.handleSearch}
          />
          <DisplayGnomeCards
            allGnomesData={allGnomesData}
            searchValue={searchValue}
            searchResult={searchResult}
          />
        </div>
      </div>
    );
  }
}

export default App;
