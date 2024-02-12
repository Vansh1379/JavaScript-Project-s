
    let toastBox = document.getElementById("toastBox");
    function showToast(){
       let Toast = document.createElement('div');
       Toast.classList.add("toast");
       Toast.innerHTML = "Success";
       toastBox.appendChild("Toast");
    }