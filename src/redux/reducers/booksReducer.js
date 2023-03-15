import actionTypes from "../actions/actionTypes";

const initialState = {
  pending: true,
  success: false,
  books: [],
  error: false,
  errorMessage: "",
};
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.bookActions.GET_BOOKS_START:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.bookActions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        error: false,
        books: action.payload,
      };
    case actionTypes.bookActions.GET_BOOKS_FAIL:
      return {
        ...state,
        pending: false,
        success: false,
        error: true,
        errorMessage: action.payload,
      };
    case actionTypes.bookActions.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case actionTypes.bookActions.DELETE_BOOK:
      let filteredBooks = state.books.filter(
        (item) => item.id !== action.payload
      );

      /* let emptyArray=[]
            for(let i=0;i<state.books.length;i++){
                if(state.books[i].id !== action.payload){
                    emptyArray.push(state.books[i])
                }
            } */
      return {
        ...state,
        books: filteredBooks,
      };
    case actionTypes.bookActions.EDIT_BOOK:
      /* filter ile */
      /* const filteredArr=state.books.filter(item => item.id !== action.payload.id)
      return{
        ...state,
        books: [...filteredArr,action.payload]
      } */
      /* for ile */
      const tempArr=[]
      for(let i=0;i<state.books.length;i++){
        if(state.books[i].id !== action.payload.id){
          tempArr.push(state.books[i])
        }else{
          tempArr.push(action.payload)
        }
      }
      return{
        ...state,
        books: tempArr
      }
    default:
      return state;
  }
};

export default booksReducer;
