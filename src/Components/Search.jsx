import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GeoOptions, GeoUrl } from "./GeoApi";

export default function Search({ onSearchChange }) {
  const handelOnChange = (e) => {
    setSearch(e);
    onSearchChange(e);
  };
  const [search, setSearch] = useState(null);

  const loadOptions = async (input) => {
    const response = await fetch(
      `${GeoUrl}/cities?limit=10&minPopulation=200000&namePrefix=${input}`,
      GeoOptions
    );

    const responseJSON = await response.json();
    const options = (responseJSON.data || []).map((e) => ({
      value: `${e.latitude} ${e.longitude}`,
      label: `${e.name} ${e.countryCode}`,
    }));

    return {
      options,
      hasMore: responseJSON.has_more,
    };
  };

  return (
    <div style={{ width: "800px", margin: "20px auto" }}>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={900}
        value={search}
        onChange={handelOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}
