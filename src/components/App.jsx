import React, { Component } from "react";
import GnomeCard from "./GnomeCard";
import SearchBar from "./SearchBar";
import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { allGnomesData: null };
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

  render() {
    return (
      <div className="bc-app">
        <div className="bc-app__wrapper">
          <SearchBar />
          <GnomeCard />
        </div>
      </div>
    );
  }
}

export default App;
