import { REQUEST_APPS,  RECEIVE_APPS, CLEAR_APPS } from './actions';

function apps( state = {isFetching: false, apps: []}, action) {
  switch (action.type) {
    case REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        apps: action.apps
      });
    case CLEAR_APPS:
      return {
        apps: [],
        isFetching: false,
      }
    default:
      return state
  }
}

export default apps
