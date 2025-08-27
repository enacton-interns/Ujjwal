const toast = document.getElementsByClassName("toast-wrapper")[0];
const toastMsg = document.getElementsByClassName("toast-message")[0];

let status_code = 400;
function popToast() {
  if (status_code === 200) {
    toastMsg.innerHTML = "request recieved !";
    toastMsg.style.color = "green";
    toast.style.borderColor = "green";
    status_code = 400;
  } else {
    toastMsg.innerHTML = "request not recieved ~";
    toastMsg.style.color = "red";
    toast.style.borderColor = "red";
    status_code = 200;
  }
}

setInterval(popToast, 5000);
