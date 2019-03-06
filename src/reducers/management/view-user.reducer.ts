import { IViewUserState } from '.';
import { viewUserTypes } from '../../actions/view-user/view-user.actions';

const initialState: IViewUserState = {
  enabled: false,
    newUser: {
    address: {
      addressId: 0,
      alias: '',
      city: '',
      country: '',
      state: '',
      zip: ''
    },
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  },
}

export const viewUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case viewUserTypes.TOGGLE:
      return {
        ...state,
        enabled: !state.enabled
      }
    case viewUserTypes.VIEW_USER_LOCATION:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          address: action.payload.location
        }
      }
    case viewUserTypes.VIEW_USER:
      return {
        ...state,
        newUser: action.payload.newUser
      }
  }
  return state;
}
