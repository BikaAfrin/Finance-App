import axios from 'axios';
import { CompanySearch } from "./company"

const api_key = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJnaXZlbl9uYW1lIjoic2Fmd2FuIiwibmJmIjoxNzE1ODU3OTIyLCJleHAiOjE3MTY0NjI3MjIsImlhdCI6MTcxNTg1NzkyMiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MjQ2IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MjQ2In0.jXMbLUyB3wtvD_SkIrbR6V03IZVC8XTlvBWCJ9wPR6gL_XTThMrWE2qh0qgzAovC72J592gE8s2vlLsSoIzHig";

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