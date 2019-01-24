import React from "react";
import { Input, Select } from "antd";
import "../css/SearchBar.css";

const { Search } = Input;
const { Option } = Select;

const SearchBar = ({ handleSearchFilter, handleSearch }) => {
  return (
    <div className="bc-searchBar__wrapper">
      <Select
        onChange={handleSearchFilter}
        defaultValue="name"
        size="large"
        className="bc-searchBar__select"
      >
        <Option value="name">Name</Option>
        <Option value="professions">Works as</Option>
        <Option value="friends">Friends with</Option>
      </Select>
      <Search
        className="bc-searchBar__input"
        placeholder="input search text"
        enterButton
        size="large"
        onSearch={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
