
function do_changed()
{
    let do_c = +document.getElementById('do_c').value
    document.getElementById("do_f").value = do_c*9/5+32
}