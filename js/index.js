let fname = document.getElementById("firstName");
let lname = document.getElementById("lastName");
let Phone = document.getElementById("phone");
let email = document.getElementById("Email");
let address = document.getElementById("address");
let datalist = [];
currentEditIndex = null;
if (localStorage.getItem("data") != null) {

    datalist = JSON.parse(localStorage.getItem("data"))
}
displayTable();
function AddData() {
    let userdata = {
        fname: fname.value,
        lname: lname.value,
        Phone: Phone.value,
        email: email.value,
        address: address.value,
    }
    datalist.push(userdata);
    localStorage.setItem("data", JSON.stringify(datalist))
    displayTable();
    clearinput()
};


function displayTable() {
    let table = "";
    for (let i = 0; i < datalist.length; i++) {

        table += `<tr>
           <th scope="row">${i + 1}</th>
                <td><input id="updateFname-${i}" class="form-control" type="text" disabled value="${datalist[i].fname}"></td>
                <td><input id="updateLname-${i}" class="form-control" type="text" disabled value="${datalist[i].lname}"></td>
                <td><input id="updatePhone-${i}" class="form-control" type="text" disabled value="${datalist[i].Phone}"></td>
                <td><input id="updateEmail-${i}" class="form-control" type="text" disabled value="${datalist[i].email}"></td>
                <td><input id="updateAddress-${i}" class="form-control" type="text" disabled value="${datalist[i].address}"></td>
                <td><button class="btn btn-primary" onclick="updateData(${i})">Update</button></td>
                <td><button id="btnYes-${i}" class="btn btn-danger" disabled onclick="btnYes(${i})">Yes</button></td>
                <td><button id="btnNo-${i}" class="btn btn-danger" disabled onclick="btnNo(${i})">No</button></td>
                <td><button class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
            </tr>`
    }
    document.getElementById("tableForm").innerHTML = table;
}

function clearinput() {
    fname.value = "";
    lname.value = "";
    Phone.value = "";
    email.value = "";
    address.value = "";
}
function Deleteinput() {
    document.getElementById("DeleteMassage").style.display = "block";
    fname.value = "";
    lname.value = "";
    Phone.value = "";
    email.value = "";
    address.value = "";
    setTimeout(function () {
        document.getElementById("DeleteMassage").style.display = "none";
    }, 2000);
}
function tableButton() {
    document.getElementById("overlay").style.display = "flex"
}
function homeButton() {

    document.getElementById("overlay").style.display = "none"
}
function deleteData(index) {
    datalist.splice(index, 1)
    localStorage.setItem("data", JSON.stringify(datalist))
    displayTable();
}
function updateData(index) {
    if (currentEditIndex !== null) {
        alert("There is an amendment in progress.");
        return;
    }
    let fname = document.getElementById(`updateFname-${index}`);
    let lname = document.getElementById(`updateLname-${index}`);
    let phone = document.getElementById(`updatePhone-${index}`);
    let email = document.getElementById(`updateEmail-${index}`);
    let address = document.getElementById(`updateAddress-${index}`);
    let buttonYes = document.getElementById(`btnYes-${index}`);
    let buttonNo = document.getElementById(`btnNo-${index}`);

    fname.removeAttribute("disabled");
    lname.removeAttribute("disabled");
    phone.removeAttribute("disabled");
    email.removeAttribute("disabled");
    address.removeAttribute("disabled");
    buttonYes.removeAttribute("disabled");
    buttonNo.removeAttribute("disabled");
    currentEditIndex = index;

}
function btnNo(index) {
    let fname = document.getElementById(`updateFname-${index}`);
    let lname = document.getElementById(`updateLname-${index}`);
    let phone = document.getElementById(`updatePhone-${index}`);
    let email = document.getElementById(`updateEmail-${index}`);
    let address = document.getElementById(`updateAddress-${index}`);
    let buttonYes = document.getElementById(`btnYes-${index}`);
    let buttonNo = document.getElementById(`btnNo-${index}`);

    fname.disabled = true;
    lname.disabled = true;
    phone.disabled = true;
    email.disabled = true;
    address.disabled = true;
    buttonYes.disabled = true;
    buttonNo.disabled = true;

    currentEditIndex = null;

    displayTable();
    datalist = JSON.parse(localStorage.getItem("data"))

}

function btnYes(index) {
    let fname = document.getElementById(`updateFname-${index}`);
    let lname = document.getElementById(`updateLname-${index}`);
    let phone = document.getElementById(`updatePhone-${index}`);
    let email = document.getElementById(`updateEmail-${index}`);
    let address = document.getElementById(`updateAddress-${index}`);
    let buttonYes = document.getElementById(`btnYes-${index}`);
    let buttonNo = document.getElementById(`btnNo-${index}`);

    let userdata = {
        fname: fname.value,
        lname: lname.value,
        Phone: phone.value,
        email: email.value,
        address: address.value,
    }
    fname.disabled = true;
    lname.disabled = true;
    phone.disabled = true;
    email.disabled = true;
    address.disabled = true;
    buttonYes.disabled = true;
    buttonNo.disabled = true;

    datalist[index] = userdata
    localStorage.setItem("data", JSON.stringify(datalist))
    displayTable();
    currentEditIndex = null;
}
function deleteAll(){
    datalist = [];
    localStorage.setItem("data", JSON.stringify(datalist))
    displayTable();
}