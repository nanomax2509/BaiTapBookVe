import gioHang from "../../modules/bai-tap-book-ve/gio-hang";
import { BAI_TAP_BOOK_VE } from "./bai-tap-book-ve.const";


const STATE_DEFAULT = {
    gioHang:[
       
            { "soGhe": "B1", "gia": 75000, "daDat": false },
            
    ],
    modal: null,
};
export const BaiTapBookVeReducer = (state = STATE_DEFAULT, action) => {
  console.log("actionreducer", action)
    switch (action.type) {
      
      case BAI_TAP_BOOK_VE.ThemSanPham: {
        const sp = action.payload;
        const indexSp = state.gioHang.findIndex((item) => sp.soGhe === item.soGhe);
        let newGioHang = [...state.gioHang];
        if (indexSp === -1) {
          newGioHang.push({ ...sp });
        } else {
          // không làm gì cả vì sản phẩm đã tồn tại trong giỏ hàng  
        }
        return { ...state, gioHang: newGioHang };
      }
      case BAI_TAP_BOOK_VE.XoaSanPham: {
      
  
        const newGioHang = state.gioHang.filter(
          (item) => item.soGhe !== action.payload
        );
  
        state.gioHang = newGioHang; 
        return { ...state };
      }
      case BAI_TAP_BOOK_VE.ConfirmXoaSP: {
        state.modal = action.payload;
        return { ...state };
      }
      case BAI_TAP_BOOK_VE.ResetModal: {
        state.modal = null;
        return { ...state }; // redux phân biệt được state cũ và state mới để cập nhật lại state => state được dùng chỗ nào thì react sẽ tự động render để cập nhật state mới nhất
      }
      default:
        return state;
    }
  };