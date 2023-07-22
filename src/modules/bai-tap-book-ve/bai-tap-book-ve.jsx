import React, { Component } from 'react'
import "./style.css"
import HangGhe from './hang-ghe';
import GioHang from './gio-hang';
import { themSanPhamCreator } from '../../redux/bai-tap-book-ve/bai-tap-book-ve.action'
import { connect } from 'react-redux';
import Modal from './modal';
const ghe = [
    {
        "hang": "A",
        "danhSachGhe": [
            { "soGhe": "A1", "gia": 75000, "daDat": false },
            { "soGhe": "A2", "gia": 75000, "daDat": false },
            { "soGhe": "A3", "gia": 75000, "daDat": false },
            { "soGhe": "A4", "gia": 75000, "daDat": false },
            { "soGhe": "A5", "gia": 75000, "daDat": false },
            { "soGhe": "A6", "gia": 75000, "daDat": false },
            { "soGhe": "A7", "gia": 75000, "daDat": false },
            { "soGhe": "A8", "gia": 75000, "daDat": false },
            { "soGhe": "A9", "gia": 75000, "daDat": false },
            { "soGhe": "A10", "gia": 75000, "daDat": false },
            { "soGhe": "A11", "gia": 0, "daDat": true },
            { "soGhe": "A12", "gia": 0, "daDat": true }
        ]
    },
    {
        "hang": "B",
        "danhSachGhe": [
            { "soGhe": "B1", "gia": 75000, "daDat": false },
            { "soGhe": "B2", "gia": 75000, "daDat": false },
            { "soGhe": "B3", "gia": 75000, "daDat": false },
            { "soGhe": "B4", "gia": 75000, "daDat": false },
            { "soGhe": "B5", "gia": 75000, "daDat": false },
            { "soGhe": "B6", "gia": 75000, "daDat": false },
            { "soGhe": "B7", "gia": 75000, "daDat": false },
            { "soGhe": "B8", "gia": 75000, "daDat": false },
            { "soGhe": "B9", "gia": 75000, "daDat": false },
            { "soGhe": "B10", "gia": 75000, "daDat": false },
            { "soGhe": "B11", "gia": 75000, "daDat": false },
            { "soGhe": "B12", "gia": 75000, "daDat": false }
        ]
    },
    {
        "hang": "C",
        "danhSachGhe": [
            { "soGhe": "C1", "gia": 75000, "daDat": false },
            { "soGhe": "C2", "gia": 75000, "daDat": false },
            { "soGhe": "C3", "gia": 75000, "daDat": false },
            { "soGhe": "C4", "gia": 75000, "daDat": false },
            { "soGhe": "C5", "gia": 75000, "daDat": false },
            { "soGhe": "C6", "gia": 75000, "daDat": false },
            { "soGhe": "C7", "gia": 75000, "daDat": false },
            { "soGhe": "C8", "gia": 75000, "daDat": false },
            { "soGhe": "C9", "gia": 75000, "daDat": false },
            { "soGhe": "C10", "gia": 75000, "daDat": false },
            { "soGhe": "C11", "gia": 75000, "daDat": false },
            { "soGhe": "C12", "gia": 75000, "daDat": false }
        ]
    }, {
        "hang": "D",
        "danhSachGhe": [
            { "soGhe": "D1", "gia": 75000, "daDat": false },
            { "soGhe": "D2", "gia": 75000, "daDat": false },
            { "soGhe": "D3", "gia": 75000, "daDat": false },
            { "soGhe": "D4", "gia": 75000, "daDat": false },
            { "soGhe": "D5", "gia": 75000, "daDat": false },
            { "soGhe": "D6", "gia": 75000, "daDat": false },
            { "soGhe": "D7", "gia": 75000, "daDat": false },
            { "soGhe": "D8", "gia": 75000, "daDat": false },
            { "soGhe": "D9", "gia": 75000, "daDat": false },
            { "soGhe": "D10", "gia": 75000, "daDat": false },
            { "soGhe": "D11", "gia": 75000, "daDat": false },
            { "soGhe": "D12", "gia": 75000, "daDat": false }
        ]
    }, {
        "hang": "E",
        "danhSachGhe": [
            { "soGhe": "E1", "gia": 75000, "daDat": false },
            { "soGhe": "E2", "gia": 75000, "daDat": false },
            { "soGhe": "E3", "gia": 75000, "daDat": false },
            { "soGhe": "E4", "gia": 75000, "daDat": false },
            { "soGhe": "E5", "gia": 75000, "daDat": false },
            { "soGhe": "E6", "gia": 75000, "daDat": false },
            { "soGhe": "E7", "gia": 75000, "daDat": false },
            { "soGhe": "E8", "gia": 75000, "daDat": false },
            { "soGhe": "E9", "gia": 75000, "daDat": false },
            { "soGhe": "E10", "gia": 75000, "daDat": false },
            { "soGhe": "E11", "gia": 75000, "daDat": false },
            { "soGhe": "E12", "gia": 75000, "daDat": false }
        ]
    }, {
        "hang": "F",
        "danhSachGhe": [
            { "soGhe": "F1", "gia": 75000, "daDat": false },
            { "soGhe": "F2", "gia": 75000, "daDat": false },
            { "soGhe": "F3", "gia": 75000, "daDat": false },
            { "soGhe": "F4", "gia": 75000, "daDat": false },
            { "soGhe": "F5", "gia": 75000, "daDat": false },
            { "soGhe": "F6", "gia": 75000, "daDat": false },
            { "soGhe": "F7", "gia": 75000, "daDat": false },
            { "soGhe": "F8", "gia": 75000, "daDat": false },
            { "soGhe": "F9", "gia": 75000, "daDat": false },
            { "soGhe": "F10", "gia": 75000, "daDat": false },
            { "soGhe": "F11", "gia": 75000, "daDat": false },
            { "soGhe": "F12", "gia": 75000, "daDat": false }
        ]
    }, {
        "hang": "G",
        "danhSachGhe": [
            { "soGhe": "G1", "gia": 75000, "daDat": false },
            { "soGhe": "G2", "gia": 75000, "daDat": false },
            { "soGhe": "G3", "gia": 75000, "daDat": false },
            { "soGhe": "G4", "gia": 75000, "daDat": false },
            { "soGhe": "G5", "gia": 75000, "daDat": false },
            { "soGhe": "G6", "gia": 75000, "daDat": false },
            { "soGhe": "G7", "gia": 75000, "daDat": false },
            { "soGhe": "G8", "gia": 75000, "daDat": false },
            { "soGhe": "G9", "gia": 75000, "daDat": false },
            { "soGhe": "G10", "gia": 75000, "daDat": false },
            { "soGhe": "G11", "gia": 75000, "daDat": false },
            { "soGhe": "G12", "gia": 75000, "daDat": false }
        ]
    }, {
        "hang": "H",
        "danhSachGhe": [
            { "soGhe": "H1", "gia": 75000, "daDat": false },
            { "soGhe": "H2", "gia": 75000, "daDat": false },
            { "soGhe": "H3", "gia": 75000, "daDat": false },
            { "soGhe": "H4", "gia": 75000, "daDat": false },
            { "soGhe": "H5", "gia": 75000, "daDat": false },
            { "soGhe": "H6", "gia": 75000, "daDat": false },
            { "soGhe": "H7", "gia": 75000, "daDat": false },
            { "soGhe": "H8", "gia": 75000, "daDat": false },
            { "soGhe": "H9", "gia": 75000, "daDat": false },
            { "soGhe": "H10", "gia": 75000, "daDat": false },
            { "soGhe": "H11", "gia": 75000, "daDat": false },
            { "soGhe": "H12", "gia": 75000, "daDat": false }
        ]
    }, {
        "hang": "I",
        "danhSachGhe": [
            { "soGhe": "I1", "gia": 75000, "daDat": false },
            { "soGhe": "I2", "gia": 75000, "daDat": false },
            { "soGhe": "I3", "gia": 75000, "daDat": false },
            { "soGhe": "I4", "gia": 75000, "daDat": false },
            { "soGhe": "I5", "gia": 75000, "daDat": false },
            { "soGhe": "I6", "gia": 75000, "daDat": false },
            { "soGhe": "I7", "gia": 75000, "daDat": false },
            { "soGhe": "I8", "gia": 75000, "daDat": false },
            { "soGhe": "I9", "gia": 75000, "daDat": false },
            { "soGhe": "I10", "gia": 75000, "daDat": false },
            { "soGhe": "I11", "gia": 75000, "daDat": false },
            { "soGhe": "I12", "gia": 75000, "daDat": false }
        ]
    }, {
        "hang": "J",
        "danhSachGhe": [
            { "soGhe": "J1", "gia": 75000, "daDat": false },
            { "soGhe": "J2", "gia": 75000, "daDat": false },
            { "soGhe": "J3", "gia": 75000, "daDat": false },
            { "soGhe": "J4", "gia": 75000, "daDat": false },
            { "soGhe": "J5", "gia": 0, "daDat": true },
            { "soGhe": "J6", "gia": 75000, "daDat": false },
            { "soGhe": "J7", "gia": 75000, "daDat": false },
            { "soGhe": "J8", "gia": 75000, "daDat": false },
            { "soGhe": "J9", "gia": 75000, "daDat": false },
            { "soGhe": "J10", "gia": 75000, "daDat": false },
            { "soGhe": "J11", "gia": 75000, "daDat": false },
            { "soGhe": "J12", "gia": 75000, "daDat": false }
        ]
    },
];
class BaiTapBookVe extends Component {

    render() {
        return (
            <div className='bookingMovie background'>
                {this.props.modal ? <Modal modal={this.props.modal} /> : null}
                <div className='row'>
                    <div className="col-8">
                        <h1 className='tieude text-center mb-4'>Đặt vé xem phim</h1>
                        <h3 className='text-center text-white'>Màn hình</h3>
                        <div className='screen text-center'></div>
                        <div className="soDoGhe">
                            <div className="mt-2">
                                <table className="table">
                                    <tbody>
                                    <div>
                                    <tr className='rowNumber'>
                                            <td></td>

                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>

                                        </tr>
                                    </div>
                                        {ghe.map((item) => {
                                            return (
                                                <div key={item.soGhe} >
                                                    <HangGhe
                                                        onAddSanPham={this.props.handleAddSanPham}
                                                        ghe={item}
                                                    />
                                                </div>
                                            );
                                        })}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div className="col-4">
                        <h1 className='text-white '>DANH SÁCH GHẾ BẠN ĐANG CHỌN</h1>
                        <div>
                            <div className="d-flex align-items-center">
                                <h3 className='gheDaDat ' style={{ display: "inline-block", marginRight: "10px" }}></h3>
                                <span className='text-white'>Ghế đã đặt</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <h3 className='gheDangChon ' style={{ display: "inline-block", marginRight: "10px" }}></h3>
                                <span className='text-white'>Ghế đang chọn</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <h3 className='gheChuaDat ' style={{ display: "inline-block", marginRight: "10px" }}></h3>
                                <span className='text-white'>Ghế chưa đặt</span>
                            </div>
                        </div>
                        <div>
                            <GioHang

                            />
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        gioHang: rootReducer.BaiTapBookVeReducer.gioHang,
        modal: rootReducer.BaiTapBookVeReducer.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddSanPham: (sanPham) => {

            const action = themSanPhamCreator(sanPham);
            console.log(action)
            dispatch(action);
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBookVe);