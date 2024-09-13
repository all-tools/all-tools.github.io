
let originalImage = new Image();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function loadImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        originalImage.src = reader.result;
        originalImage.onload = () => {
            canvas.width = originalImage.width;
            canvas.height = originalImage.height;
            ctx.drawImage(originalImage, 0, 0);
            document.getElementById('width').value = originalImage.width;
            document.getElementById('height').value = originalImage.height;
        };
    };
    reader.readAsDataURL(event.target.files[0]);
}

function resizeImage() {
    const newWidth = document.getElementById('width').value;
    const newHeight = document.getElementById('height').value;

    if (newWidth && newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx.drawImage(originalImage, 0, 0, newWidth, newHeight);
    } else {
        alert("Please enter valid dimensions.");
    }
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'resized-image.png';
    link.href = canvas.toDataURL();
    link.click();
}
