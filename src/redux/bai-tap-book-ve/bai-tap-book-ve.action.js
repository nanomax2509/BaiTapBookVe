import { BAI_TAP_BOOK_VE } from "./bai-tap-book-ve.const";

export const themSanPhamCreator = (payload) => {
  return {
    type: BAI_TAP_BOOK_VE.ThemSanPham,
    payload,
  };
};

export const xoaSanPhamCreator = (payload) => {
  return {
    type: BAI_TAP_BOOK_VE.XoaSanPham,
    payload,
  };
};



export const confirmXoaSPCreator = (payload) => {
  return {
    type: BAI_TAP_BOOK_VE.ConfirmXoaSP,
    payload,
  };
};
export const resetModalCreator = (payload) => {
  return {
    type: BAI_TAP_BOOK_VE.ResetModal,
    payload,
  };
};