import React from "react";
import { Input, Select } from "antd";
import "../css/SearchBar.css";

const { Search } = Input;
const { Option } = Select;

const SearchBar = () => {
  return (
    <div className="bc-searchBar__wrapper">
      <Select defaultValue="name" size="large" className="bc-searchBar__select">
        <Option value="name">Name</Option>
        <Option value="job">Works as</Option>
        <Option value="friend">Friends with</Option>
      </Select>
      <Search
        className="bc-searchBar__input"
        placeholder="input search text"
        enterButton
        size="large"
        onSearch={value => console.log(value)}
      />
    </div>
  );
};

export default SearchBar;
