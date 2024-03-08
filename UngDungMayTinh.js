
function radius_changed()
{
    let radius = +document.getElementById('radius').value
    document.getElementById("perimeter").value = radius*Math.PI
}

function diameter_changed()
{
    let diameter = +document.getElementById('diameter').value
    document.getElementById("perimeter").value = diameter/2*Math.PI
}