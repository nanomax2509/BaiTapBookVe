import { createStore, combineReducers } from "redux";
import { BaiTapBookVeReducer } from "./bai-tap-book-ve/bai-tap-book-ve.reducer";

const rootReducer = combineReducers({
  // { count: 52, isLogin: false }: set up state mặc định
  // --- reducer:
  // 1. xử lý logic
  // 2. lưu trữ state

  // Chú ý: nên tạo một biến lưu trữ state default bên ngoài.
  BaiTapBookVeReducer,


});

// redux store. tập trung tất cả state của ứng dụng.

export const store = createStore(
  rootReducer,
  // extension cho redux.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
