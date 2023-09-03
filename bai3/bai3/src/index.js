const thueSuat1 = 5 / 100;
const thueSuat2 = 10 / 100;
const thueSuat3 = 15 / 100;
const thueSuat4 = 20 / 100;
const thueSuat5 = 25 / 100;
const thueSuat6 = 30 / 100;
const thueSuat7 = 35 / 100;
var thuNhapChiuThue = 0;
var thueThuNhapCaNhan = 0;

function tinhTienThue() {
  var hoTen = document.getElementById("hoTen").value;
  var thuNhapNam = document.getElementById("thuNhapNam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  if (hoTen == "" || (thuNhapNam == "") | (soNguoiPhuThuoc == "")) {
    alert("Bạn chưa nhập đủ thông tin");
  } else {
    var result = tinhThueThuNhapCaNhan(thuNhapNam, soNguoiPhuThuoc);
    const xuatKetQua = document.querySelector(".xuatKetQua");
    xuatKetQua.innerHTML = `Tên: ${hoTen} - Thuế thu nhập cá nhân là: ${result}`;
  }
}

function thueThuNhap(tongThuNhapNam, soNguoiPhuThuoc) {
  return tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
}
function tinhThueThuNhapCaNhan(thuNhapNam, soNguoiPhuThuoc) {
  if (thuNhapNam > 0 && thuNhapNam <= 60000000) {
    thuNhapChiuThue = thueThuNhap(thuNhapNam, soNguoiPhuThuoc);
    thueThuNhapCaNhan = thuNhapChiuThue * thueSuat1;
  } else if (thuNhapNam > 60000000 && thuNhapNam <= 120000000) {
    thuNhapChiuThue = thueThuNhap(thuNhapNam, soNguoiPhuThuoc);
    thueThuNhapCaNhan = thuNhapChiuThue * thueSuat2;
  } else if (thuNhapNam > 120000000 && thuNhapNam <= 210000000) {
    thuNhapChiuThue = thueThuNhap(thuNhapNam, soNguoiPhuThuoc);
    thueThuNhapCaNhan = thuNhapChiuThue * thueSuat3;
  } else if (thuNhapNam > 210000000 && thuNhapNam <= 384000000) {
    thuNhapChiuThue = thueThuNhap(thuNhapNam, soNguoiPhuThuoc);
    thueThuNhapCaNhan = thuNhapChiuThue * thueSuat4;
  } else if (thuNhapNam > 384000000 && thuNhapNam <= 624000000) {
    thuNhapChiuThue = thueThuNhap(thuNhapNam, soNguoiPhuThuoc);
    thueThuNhapCaNhan = thuNhapChiuThue * thueSuat5;
  } else if (thuNhapNam > 624000000 && thuNhapNam <= 960000000) {
    thuNhapChiuThue = thueThuNhap(thuNhapNam, soNguoiPhuThuoc);
    thueThuNhapCaNhan = thuNhapChiuThue * thueSuat6;
  } else if (thuNhapNam > 960000000) {
    thuNhapChiuThue = thueThuNhap(thuNhapNam, soNguoiPhuThuoc);
    thueThuNhapCaNhan = thuNhapChiuThue * thueSuat7;
  }
  return thueThuNhapCaNhan;
}
