const diemKhuVucA = 2;
const diemKhuVucB = 1;
const diemKhuVucC = 0.5;
const diemKhuVucX = 0;
const diemDoiTuong1 = 2.5;
const diemDoiTuong2 = 1.5;
const diemDoiTuong3 = 1;
const diemDoiTuongX = 0;

// Điểm tổng kết >= điểm chuẩn thì đậu và không có môn nào 0 điểm
// Điểm tổng kết: tổng điểm 3 môn thi và điểm ưu tiên

var btnTinhDiem = document.getElementById("btnTinhDiem");

function tinhDiem() {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const diemThi1 = document.getElementById("diemThi1").value * 1;
  const diemThi2 = document.getElementById("diemThi2").value * 1;
  const diemThi3 = document.getElementById("diemThi3").value * 1;
  var xuatDiem = document.querySelector(".xuatDiem");
  var diemUutien = tinhDiemUuTienChiTiet();
  var diem = tinhDiemTongKet(
    diemThi1,
    diemThi2,
    diemThi3,
    diemUutien,
    diemChuan
  );
  if (diemThi1 == 0 || diemThi2 == 0 || diemThi3 == 0) {
    xuatDiem.innerHTML = `Điểm tổng kết của bạn là: ${diem}  bạn đã rớt vì có điểm 0`;
  } else {
    if (diem >= diemChuan) {
      xuatDiem.innerHTML = `Bạn đã đậu rồi. Điểm của bạn là :${diem}`;
    } else {
      xuatDiem.innerHTML = `Bạn đã rớt rồi. Điểm của bạn là :${diem}`;
    }
  }
}

function layKhuVuc() {
  var khuVuc = "";
  const kv_A = document.getElementById("KVA");
  const kv_B = document.getElementById("KVB");
  const kv_C = document.getElementById("KVC");
  const kv_X = document.getElementById("KVX");
  if (kv_A.checked) {
    khuVuc = "Khu vực A";
  } else if (kv_B.checked) {
    khuVuc = "Khu vực B";
  } else if (kv_C.checked) {
    khuVuc = "Khu vực C";
  } else if (kv_X.checked) {
    khuVuc = "Khu vực X";
  } else {
    alert("Vui lòng chọn khu vực");
  }
  return khuVuc;
}
function layDoiTuong() {
  var doiTuong = "";
  const dt_1 = document.getElementById("DT1");
  const dt_2 = document.getElementById("DT2");
  const dt_3 = document.getElementById("DT3");
  const dt_x = document.getElementById("DTX");
  if (dt_1.checked) {
    doiTuong = "Đối tượng 1";
  } else if (dt_2.checked) {
    doiTuong = "Đối tượng 2";
  } else if (dt_3.checked) {
    doiTuong = "Đối tượng 3";
  } else if (dt_x.checked) {
    doiTuong = "Đối tượng X";
  } else {
    alert("Vui lòng chọn đối tượng");
  }
  return doiTuong;
}

function tinhDiemUuTien(diemKhuVuc, diemDoiTuong) {
  return diemKhuVuc + diemDoiTuong;
}
function tinhDiemUuTienChiTiet() {
  var resultUuTien = 0;
  var doiTuong = layDoiTuong();
  var khuVuc = layKhuVuc();
  //   Khu vực A
  if (khuVuc == "Khu vực A" && doiTuong == "Đối tượng 1") {
    resultUuTien = tinhDiemUuTien(diemKhuVucA, diemDoiTuong1);
  } else if (khuVuc == "Khu vực A" && doiTuong == "Đối tượng 2") {
    resultUuTien = tinhDiemUuTien(diemKhuVucA, diemDoiTuong2);
  } else if (khuVuc == "Khu vực A" && doiTuong == "Đối tượng 3") {
    resultUuTien = tinhDiemUuTien(diemKhuVucA, diemDoiTuong3);
  } else if (khuVuc == "Khu vực A" && doiTuong == "Đối tượng X") {
    resultUuTien = tinhDiemUuTien(diemKhuVucA, diemDoiTuongX);
  } //   Khu vực B
  else if (khuVuc == "Khu vực B" && doiTuong == "Đối tượng 1") {
    resultUuTien = tinhDiemUuTien(diemKhuVucB, diemDoiTuong1);
  } else if (khuVuc == "Khu vực B" && doiTuong == "Đối tượng 2") {
    resultUuTien = tinhDiemUuTien(diemKhuVucB, diemDoiTuong2);
  } else if (khuVuc == "Khu vực B" && doiTuong == "Đối tượng 3") {
    resultUuTien = tinhDiemUuTien(diemKhuVucB, diemDoiTuong3);
  } else if (khuVuc == "Khu vực B" && doiTuong == "Đối tượng X") {
    resultUuTien = tinhDiemUuTien(diemKhuVucB, diemDoiTuongX);
  } //   Khu vực C
  else if (khuVuc == "Khu vực C" && doiTuong == "Đối tượng 1") {
    resultUuTien = tinhDiemUuTien(diemKhuVucC, diemDoiTuong1);
  } else if (khuVuc == "Khu vực C" && doiTuong == "Đối tượng 2") {
    resultUuTien = tinhDiemUuTien(diemKhuVucC, diemDoiTuong2);
  } else if (khuVuc == "Khu vực C" && doiTuong == "Đối tượng 3") {
    resultUuTien = tinhDiemUuTien(diemKhuVucC, diemDoiTuong3);
  } else if (khuVuc == "Khu vực C" && doiTuong == "Đối tượng X") {
    resultUuTien = tinhDiemUuTien(diemKhuVucC, diemDoiTuongX);
  } //   Khu vực X
  else if (khuVuc == "Khu vực X" && doiTuong == "Đối tượng 1") {
    resultUuTien = tinhDiemUuTien(diemKhuVucX, diemDoiTuong1);
  } else if (khuVuc == "Khu vực X" && doiTuong == "Đối tượng 2") {
    resultUuTien = tinhDiemUuTien(diemKhuVucX, diemDoiTuong2);
  } else if (khuVuc == "Khu vực X" && doiTuong == "Đối tượng 3") {
    resultUuTien = tinhDiemUuTien(diemKhuVucX, diemDoiTuong3);
  } else if (khuVuc == "Khu vực X" && doiTuong == "Đối tượng X") {
    resultUuTien = tinhDiemUuTien(diemKhuVucX, diemDoiTuongX);
  }
  return resultUuTien;
}
function tinhDiemTongKet(diemThi1, diemThi2, diemThi3, diemUT) {
  var diemTongKet = diemThi1 + diemThi2 + diemThi3 + diemUT;
  return diemTongKet;
}
