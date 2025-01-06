function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1000);
    }
    else{
        document.addEventListener("DOMContentLoaded", fn);
    }
}
//if found qr code
function onScanSuccess(decodedText, decodedResult) {
    console.log("your QR code is :"+decodedText,decodedResult);
}
let htmlscanner = new Html5QrcodeScanner("qr-code", {
    fps : 10, qrbos : 300
});

htmlscanner.render(onScanSuccess);