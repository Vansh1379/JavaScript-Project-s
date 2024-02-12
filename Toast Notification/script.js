
    let toastBox = document.getElementById('toastBox');
    let SuccessMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
    let ErrorMsg = '<i class="fa-solid fa-circle-xmark"></i> Dumb Fix The Error First !';
    let WarningMsg = '<i class="fa-solid fa-circle-exclamation"></i> Warning Bro Invalid Input';

    function showToast(msg){
       let Toast = document.createElement('div');
       Toast.classList.add("toast");
       Toast.innerHTML = msg;
       toastBox.appendChild(Toast);

       if(msg.includes('Error')){
        Toast.classList.add('error');
       }
       if(msg.includes('Warning')){
        Toast.classList.add("Warning");
       }

       setTimeout(()=>{
        Toast.remove();
       },6000)
    }