import React, { Component } from 'react'
import "./style.css"
import { xoaSanPhamCreator,confirmXoaSPCreator,resetModalCreator } from '../../redux/bai-tap-book-ve/bai-tap-book-ve.action';
import { connect } from 'react-redux';
 class GioHang extends Component {
  render() {
    const {gioHang} = this.props;
    console.log("giohang", this.props);
    return (
      <div>
        <table class="table table-bordered text-white">
          <thead>
            <tr className='rowNumber' style={{fontSize: "20px"}}>
              <th scope="col">Số ghế</th>
              <th scope="col">Giá</th>
              <th scope="col">Huỷ</th>
            </tr>
          </thead>
          <tbody >
            {gioHang.map((sp) => {
              return (
                <tr >
                  <td className='rowNumber'>{sp.soGhe}</td>
                  <td style={{fontSize: "20px"}}>{sp.gia}</td>
                  <td>
                  <button
                      onClick={() => {
                        // dispatch trực tiếp.
                        // this.props.dispatch(xoaSanPhamCreator(sp.maSP));

                        this.props.dispatch(
                          confirmXoaSPCreator({
                            status: "",
                            title: "Xóa Sản Phẩm",
                            content:
                              "Bạn có chắc chắn muốn xóa sản phẩm hay không?",
                            onOk: () => {
                              this.props.dispatch(xoaSanPhamCreator(sp.soGhe));

                              this.props.dispatch(resetModalCreator());
                            },
                            onCancle: () => {
                              this.props.dispatch(resetModalCreator());
                            },
                          })
                        );
                      }}
                      className="btn btn-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}


const mapStateToProps = (rootReducer) => {
  return {
      gioHang: rootReducer.BaiTapBookVeReducer.gioHang,
  };
};
export default connect(mapStateToProps)(GioHang);