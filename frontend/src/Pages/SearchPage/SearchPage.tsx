import React from 'react'
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import CardList from '../../Components/CardList/CardList';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import Search from '../../Components/Search/Search';
import { searchCompanies } from '../../api';
import { CompanySearch } from '../../company';


interface Props{}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const handleSearchChange = (e : ChangeEvent<HTMLInputElement>) =>{
    setSearch(e.target.value);
    //console.log(e);
};
const onPortfolioCreate =(e : any) => {
  e.preventDefault();
  const exists = portfolioValues.find((value) => value === e.target[0].value);
  if(exists) return;
  const updatePortfolio = [...portfolioValues, e.target[0].value];
  setPortfolioValues(updatePortfolio);
};
const onSearchSubmit = async(e : SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    //setSearchResult(result.) //need type Narrowing (doing on next line->)

    if(typeof result === "string"){
      setServerError(result);
    } else if(Array.isArray(result.data)){
      setSearchResult(result.data);
    }
};
const onPortfolioDelete = async(e : any) => {
  const remove = portfolioValues.filter((value) => {
    return value !== e.target[0].value;
  });
  setPortfolioValues(remove);
}
  return (
    <>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      <ListPortfolio portfolioValues = {portfolioValues} onPortfolioDelete = {onPortfolioDelete}/>
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
      {serverError && <div>Unable to connect to API</div>}
    </>
  );
}

export default SearchPage