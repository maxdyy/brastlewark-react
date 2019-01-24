import React from "react";
import { Input, Select } from "antd";
import "../css/SearchBar.css";

const { Search } = Input;
const { Option } = Select;

const SearchBar = ({ handleSearchFilter, handleSearch }) => {
  const selectBefore = (
    <Select
      onChange={handleSearchFilter}
      defaultValue="name"
      className="bc-searchBar__select"
    >
      <Option value="name">Name</Option>
      <Option value="professions">Works as</Option>
      <Option value="friends">Friends with</Option>
    </Select>
  );
  return (
    <div className="bc-searchBar__wrapper">
      <Search
        className="bc-searchBar__input"
        placeholder="Search for a Gnome"
        size="large"
        onSearch={handleSearch}
        addonBefore={selectBefore}
      />
    </div>
  );
};

export default SearchBar;
