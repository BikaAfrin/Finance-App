import axios from 'axios';
import { CompanyBalanceSheet, CompanyCashFlow, CompanyCompData, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK, } from "./company"

const api_key = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpa2FiaW1hQGV4YW1wbGUuY29tIiwiZ2l2ZW5fbmFtZSI6IkJpa2EiLCJuYmYiOjE3MTY1NzM5OTMsImV4cCI6MTcxNzE3ODc5MywiaWF0IjoxNzE2NTczOTkzLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUyNDYiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUyNDYifQ.FO-5BWljClAsgavTe4NMsggkirvvQWSK2nalOhF82SPS4--TRuyRJTMzlX7jd0R6JRrKuYIC3ylNXWplLZGThA";
const web_api_key = '7de6e7e5b2f29076903ea31b019f70cd';
interface SearchResponse{
    data : CompanySearch[];
}
export const searchCompanies = async (query: string) => {
    try {
      const data = await axios.get<SearchResponse>(
        `https://localhost:7194/api/stock?Symbol=${query}`,
        {
          headers: {
            Authorization: `Bearer ${api_key}`, // Assuming 'api_key' is your access token
          },
        }
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error_message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An expected error has occured.";
      }
    }
};
export const getCompanyProfile = async (query : string) => {
  try{
    const data = await axios.get<CompanyProfile[]>(
      `https://localhost:7194/api/stock?Symbol=${query}`,
        {
          headers: {
            Authorization: `Bearer ${api_key}`, // Assuming 'api_key' is your access token
          },
        }
    );
    return data;
  }
  catch(error:any){
    console.log("ërror message: ", error.message);
  }
};
export const getKeyMetrics = async (query: string) => {
  try{
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${web_api_key}`);

    return data;
  } catch(error: any){
    console.log("Error from API: ", error.message);
  }
}
export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=20&apikey=${web_api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${web_api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
export const getCashFlow = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${web_api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
export const getCompData = async (query: string) => {
  try {
    const data = await axios.get<CompanyCompData[]>(
      `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${web_api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
export const getTenK = async (query: string) => {
  try {
    const data = await axios.get<CompanyTenK[]>(
      `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=${web_api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};