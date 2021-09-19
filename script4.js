document.getElementById('sub').onclick = function() {
    var selected = [];
    for (var option of document.getElementById('food').options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    if (selected.length < 2)
        alert("select two food");

    if (selected.length > 2)
        alert("select two food");
    if (selected.length == 2) {
        var days = document.getElementsByName('gen');

        for (let i of days) {

            if (i.checked) {
                console.log(i.id);
                g = i.id;
            }
        }

        var see = document.getElementById("state");
        var se = see.value;
        var c = 1
        var tab = document.getElementById("show");
        var row = tab.insertRow(c);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        var td4 = row.insertCell(3);
        var td5 = row.insertCell(4);
        var td6 = row.insertCell(5);
        var td7 = row.insertCell(6);
        var td8 = row.insertCell(7);
        td1.innerHTML = document.getElementById("fname").value;
        td2.innerHTML = document.getElementById("lname").value;
        td3.innerHTML = document.getElementById("add").value;
        td4.innerHTML = document.getElementById("pin").value;
        td6.innerHTML = selected;
        td7.innerHTML = se;
        td8.innerHTML = document.getElementById("country").value;
        var g;
        td5.innerHTML = g;
        c++;
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("add").value = "";
        document.getElementById("pin").value = "";
        document.getElementById("food").value = "";
        document.getElementById("country").value = "";
        document.getElementById("state").value = "";
        document.getElementsByName("gen").selected = "";
    }

}