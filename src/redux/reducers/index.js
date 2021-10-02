import { combineReducers } from 'redux';
import user from '../user/user.reducer';
import contact from '../contact/contact.reducer';

const rootReducer = combineReducers({
  user,
  contact,
});

export default rootReducer;
