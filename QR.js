// var qrcode = new QRCode(document.querySelector(".qrcode"));
// qrcode.makeCode("Why did you scanned me");
// function generateQr(){
//     qrcode.makeCode(document.querySelector("input").value)
// }
const wrapper = document.querySelector(".wrapper"),qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue) return alert('Enter the url');
    // if(qrValue=""){
    //     alert("Enter a Url or Text")
    // }
    generateBtn.innerText = "Generating Qr Code...";
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR code";
    })
});

qrInput.addEventListener("Keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})