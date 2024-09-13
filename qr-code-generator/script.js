function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy : ', err);
    });
}

function copyurl() {
    url = document.getElementById("share-url").getElementsByTagName("a")[0].getAttribute("href");
    copyToClipboard(url);
}

function copyiframe() {
    iframe = document.getElementById("iframe-code").getElementsByTagName("pre")[0].innerText;
    copyToClipboard(iframe);
}

let qrCodeObj;

        // Function to generate the QR code
        function generateQRCode() {
            const qrText = document.getElementById("qr-text").value;
            const qrSize = parseInt(document.getElementById("qr-size").value);
            const qrColor = document.getElementById("qr-color").value;
            const qrBgColor = document.getElementById("qr-bg-color").value;
            const qrEcc = document.getElementById("qr-ecc").value;

            // Clear any previous QR code
            document.getElementById("qrcode").innerHTML = "";

            // Generate the QR code
            qrCodeObj = new QRCode(document.getElementById("qrcode"), {
                text: qrText,
                width: qrSize,
                height: qrSize,
                colorDark: qrColor,
                colorLight: qrBgColor,
                correctLevel: QRCode.CorrectLevel[qrEcc]
            });

            // Generate shareable URL and iframe code
            generateSharableURL(qrText);
            generateIframeCode(qrText);
        }

        // Function to generate a sharable URL with the encoded text
        function generateSharableURL(qrText) {
            const baseUrl = window.location.origin + window.location.pathname;
            const shareableUrl = `${baseUrl}?input=${encodeURIComponent(qrText)}`;
            
            // Display the shareable URL
            const shareUrlDiv = document.getElementById("share-url");
            shareUrlDiv.innerHTML = `Share this QR code: <a href="${shareableUrl}" target="_blank">${shareableUrl}</a>`;
            
        }

        // Function to generate iframe code for embedding the QR code
        function generateIframeCode(qrText) {
            const baseUrl = window.location.origin + window.location.pathname;
            const iframeCode = `&#60;iframe src="${baseUrl}?input=${encodeURIComponent(qrText)}" width="300" height="300" frameborder="0"&#62;&#60;/iframe&#62;`;

            // Display the iframe code
            const iframeCodeDiv = document.getElementById("iframe-code");
            iframeCodeDiv.innerHTML = `Embed this QR code: <pre>${iframeCode}</pre>`;
        }

        // Function to download the QR code as an image
        function downloadQRCode() {
            const qrCanvas = document.querySelector("#qrcode canvas");
            const image = qrCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

            // Create a temporary link to download the image
            const link = document.createElement('a');
            link.href = image;
            link.download = 'qr_code.png';
            link.click();
        }

        // If there's a query parameter in the URL, auto-generate the QR code
        window.onload = function() {
            const urlParams = new URLSearchParams(window.location.search);
            const inputText = urlParams.get('input');
            if (inputText) {
                document.getElementById('qr-text').value = decodeURIComponent(inputText);
                generateQRCode();
            }
        }
