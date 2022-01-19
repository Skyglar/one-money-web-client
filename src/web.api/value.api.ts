import { ApiUrlBuilder } from "../helpers/ApiUrlBuilder"
import * as api from "../web.api/api.constants";

export const GetOrganizationClientByIdEpic = (action$: any, store: any) =>
{
    debugger;
    let query = ApiUrlBuilder.Build(api.TEST_API_TRIGGER, "uk/") + action$;
    
    return fetch(query, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
      })
    .then((response) => response.json())
}
