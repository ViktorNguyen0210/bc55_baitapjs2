const kw_1 = 500;
const kw_2 = 650;
const kw_3 = 850;
const kw_4 = 1100;
const kw_5 = 1300;
var thanhTienKw1 = 0;
var thanhTienKw2 = 0;
var thanhTienKw3 = 0;
var thanhTienKw4 = 0;
var thanhTienKw5 = 0;

function tinhTienKw() {
  const kw = document.getElementById("kw").value;
  var tong = tinhTongTien(kw);
  const xuatTien = document.querySelector(".xuatTien");
  xuatTien.innerHTML = `Tiền của bạn là: ${tong}`;
}
function tinhTongTien(kw) {
  if (kw > 0 && kw <= 50) {
    thanhTienKw1 = tinhTienKw1(kw);
    tongTien = thanhTienKw1;
  } else if (kw > 50 && kw <= 100) {
    thanhTienKw1 = tinhTienKw1(50);
    thanhTienKw2 = tinhTienKw2(kw);
    tongTien = thanhTienKw1 + thanhTienKw2;
  } else if (kw > 100 && kw <= 200) {
    thanhTienKw1 = tinhTienKw1(50);
    thanhTienKw2 = tinhTienKw2(100);
    thanhTienKw3 = tinhTienKw3(kw);
    tongTien = thanhTienKw1 + thanhTienKw2 + thanhTienKw3;
  } else if (kw > 200 && kw <= 350) {
    thanhTienKw1 = tinhTienKw1(50);
    thanhTienKw2 = tinhTienKw2(100);
    thanhTienKw3 = tinhTienKw3(200);
    thanhTienKw4 = tinhTienKw4(kw);
    tongTien = thanhTienKw1 + thanhTienKw2 + thanhTienKw3 + thanhTienKw4;
  } else if (kw > 351) {
    thanhTienKw1 = tinhTienKw1(50);
    thanhTienKw2 = tinhTienKw2(100);
    thanhTienKw3 = tinhTienKw3(200);
    thanhTienKw4 = tinhTienKw4(350);
    thanhTienKw5 = tinhTienKw4(kw);
    tongTien =
      thanhTienKw1 + thanhTienKw2 + thanhTienKw3 + thanhTienKw4 + thanhTienKw5;
  }
  return tongTien;
}

function tinhTienKw1(kw) {
  var tongTienKw1 = 0;
  if (kw > 0 && kw <= 50) {
    for (let i = 1; i <= kw; i++) {
      tongTienKw1 = tongTienKw1 + kw_1;
    }
  }
  return tongTienKw1;
}
function tinhTienKw2(kw) {
  var tongtienKw2 = 0;
  if (kw > 50 && kw <= 100) {
    for (let i = 51; i <= kw; i++) {
      tongtienKw2 = tongtienKw2 + kw_2;
    }
  }
  return tongtienKw2;
}
function tinhTienKw3(kw) {
  var tongtienKw3 = 0;
  if (kw > 100 && kw <= 200) {
    for (let i = 101; i <= kw; i++) {
      tongtienKw3 = tongtienKw3 + kw_3;
    }
  }
  return tongtienKw3;
}
function tinhTienKw4(kw) {
  var tongtienKw4 = 0;
  if (kw > 200 && kw <= 350) {
    for (let i = 201; i <= kw; i++) {
      tongtienKw4 = tongtienKw4 + kw_4;
    }
  }
  return tongtienKw4;
}
function tinhTienKw5(kw) {
  var tongtienKw5 = 0;
  if (kw > 350) {
    for (let i = 351; i <= kw; i++) {
      tongtienKw5 = tongtienKw5 + kw_5;
    }
  }
  return tongtienKw5;
}
