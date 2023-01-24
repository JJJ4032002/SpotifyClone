import React from "react";
import styled from "styled-components/macro";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { setPopularity } from "../features/filter/filterSlice";
import RadioGroup from "./RadioGroup";
import { Countries, Popularity } from "../data";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountries,
  selectPopularity,
  setCountry,
} from "../features/filter/filterSlice";
const List = styled.div`
  gap: 1em;
  display: flex;
  flex-direction: column;
`;
const FilterHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
const RowOption = styled(FilterHeadingContainer)``;
const ColumnOption = styled(List)`
  gap: 0.5em;
`;

function FilterList() {
  let CountriesState = useSelector(selectCountries);
  let PopularityState = useSelector(selectPopularity);
  let dispatch = useDispatch();
  function CountriesOnChange(event) {
    let action = {
      value: event.target.value,
    };
    dispatch(setCountry(action));
  }
  function PopularityOnChange(event) {
    let foundObj = Popularity.find(
      (element) => element.name === event.target.value
    );
    let action = {
      value: event.target.value,
      maxRating: foundObj.maxRate,
      minRating: foundObj.minRate,
    };
    dispatch(setPopularity(action));
  }
  return (
    <List>
      <FilterHeadingContainer>
        <FilterAltIcon></FilterAltIcon>
        <p>Filters</p>
      </FilterHeadingContainer>
      <ColumnOption>
        Countries :
        <RadioGroup
          value={CountriesState}
          onChangeFunc={CountriesOnChange}
          Arr={Countries}
          name="Countries"
        ></RadioGroup>
      </ColumnOption>
      <ColumnOption>
        Popularity :
        <RadioGroup
          value={PopularityState.value}
          onChangeFunc={PopularityOnChange}
          Arr={Popularity}
          name="Popularity"
        ></RadioGroup>
      </ColumnOption>
    </List>
  );
}

export default FilterList;
