/** 
 * Bài 1
 * Giả sử: 
 *  Lương đi làm 1 ngày là 100.000đ
 *  Nhân viên đi làm được 30 ngày
 *  tongTienLuong : 
 * 
 * Input:
 * - Tạo biến soNgayLam gán giá trị 0
 * - Tạo biến Salar gán giá trị 100.000
 * 
 * Process:
 * - TienLuong = Salar * N
 * 
 * Output
 * Show tiền lương
*/

/**
 * Bài 1
 */
var btnTinhNao = document.getElementById("btnTinhNao");
btnTinhNao.onclick = function () {
  //Đầu vào: DOM tới các thẻ input lấy value
  var tongTien = document.getElementById("tongTien").value * 1;
  var slcTip = document.getElementById("slcTip").value * 1;
  var share = document.getElementById("share").value * 1;

  //Xử lý: tongTien * (slcTip / 100) / share
  var total = (tongTien * (slcTip / 100)) / share;
  var result = "";
  result += "<p>Tip Amount</p>";
  result += "<p>" + total + "</p>";
  result += "<p>mỗi người</p>";

  //Đầu ra
  var footerTip = document.getElementById("footerTip");
  footerTip.innerHTML = result;
};
