import React, { Component } from 'react';

export default class HangGhe extends Component {
  state = {
    buttonColors: Array(this.props.ghe.danhSachGhe.length).fill(''), // khởi tạo mảng các màu nền ban đầu là trống
    isButtonClicked: Array(this.props.ghe.danhSachGhe.length).fill(false), // khởi tạo mảng các trạng thái ban đầu là false
  };

  render() {
    const item = this.props.ghe;
    const { onAddSanPham } = this.props;
    const { buttonColors, isButtonClicked } = this.state; // lấy giá trị các biến trạng thái

    return (
      <>
        <tr>
          <td className='rowNumber'>{item.hang}</td>
          {item.danhSachGhe.map((ghe, index) => {
            return (
              <td className='px-2' key={ghe.soGhe}>
                <button
                  onClick={() => {
                    onAddSanPham(ghe);
                    const newButtonColors = [...buttonColors]; // tạo một bản sao của mảng các màu nền
                    const newIsButtonClicked = [...isButtonClicked]; // tạo một bản sao của mảng các trạng thái
                    newButtonColors[index] = 'rgb(109, 238, 109)'; // cập nhật màu nền của nút được nhấn thành màu đỏ
                    newIsButtonClicked[index] = true; // cập nhật trạng thái của nút được nhấn thành true
                    this.setState({
                      buttonColors: newButtonColors, // cập nhật mảng các màu nền
                      isButtonClicked: newIsButtonClicked, // cập nhật mảng các trạng thái
                    });
                  }}
                  className={`ghe ${ghe.daDat ? 'gheDuocChon' : ''} ${
                    isButtonClicked[index] ? 'gheDangChon' : '' // thêm lớp gheDangChon nếu nút đã được nhấn
                  }`}
                  style={{
                    backgroundColor: buttonColors[index], // sử dụng màu nền tương ứng với nút đó
                  }}
                >
                  {ghe.soGhe}
                </button>
              </td>
            );
          })}
        </tr>
      </>
    );
  }
}