
function diem_changed()
{
    let vat_ly = +document.getElementById('vat_ly').value
    let hoa_hoc = +document.getElementById('hoa_hoc').value
    let sinh_hoc = +document.getElementById('sinh_hoc').value
    let tong_diem = vat_ly+hoa_hoc+sinh_hoc

    document.getElementById("tong_diem").value = tong_diem
    document.getElementById("diem_trung_binh").value = tong_diem/3
}