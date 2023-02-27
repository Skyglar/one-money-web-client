import { ApiUrlBuilder } from "../shared/helpers/ApiUrlBuilder"
import * as api from "../web.api/api.constants";

export const GetOrganizationClientByIdEpic = async (action$: any, store: any) =>
{
    debugger;
    let query = ApiUrlBuilder.Build(api.TEST_API_TRIGGER, "uk/") + action$;
    
    const response = await fetch(query, {
    method: 'GET',
    mode: 'cors', // no-cors, *cors, same-origin
  });
  
  return await response.json();
}
