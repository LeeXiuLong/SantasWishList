import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {

  //create a new state object from the original state
  let newState = Object.assign(state, {});

  switch (action.type) {

    //add the item to the end of the wishlist array
    case ADD_ITEM:
      newState.wishList.push(action.payload);
      return newState;

    //find the item in the wishlist array and delete it
    case DELETE_ITEM:
      newState.wishList.forEach((wishlistItem, index) => {
        if(wishlistItem === action.payload){
          newState.wishList.splice(index, 1)
        }
      })
      console.log(newState);
      return newState;
    
    //return the original state
    default:
      return state;
  }
};

export default reducer;