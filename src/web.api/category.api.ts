import { ApiUrlBuilder } from "../shared/helpers/ApiUrlBuilder"
import * as api from "../web.api/api.constants";

export const GetAllCategoriesEpic = async (action$: any, store: any) =>
{
    let query = ApiUrlBuilder.Build(api.GET_ALL_CATEGORIES, "uk/") + action$;
    
    const response = await fetch(query, {
    method: 'GET',
    mode: 'cors', // no-cors, *cors, same-origin
  });
  
  return await response.json();
}
