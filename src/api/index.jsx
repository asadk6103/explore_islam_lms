import { API_URL_AUTH_LOGIN, API_URL_AUTH_SIGN_UP, API_URL_OWO_LIST_OF_CASES} from "./constants"
import { post, get } from "./utils";

export const getAuthorizationApi = ({ email, password }) => {
    return get(API_URL_AUTH_LOGIN, {}, { email, password })
}
