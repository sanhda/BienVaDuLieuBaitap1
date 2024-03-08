
function size_changed()
{
    let width = +document.getElementById('width').value
    let height = +document.getElementById('height').value
    document.getElementById("area").value = width*height
}