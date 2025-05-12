const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');

imagePreview.addEventListener('click', () => {
  imageUpload.click();
});

imageUpload.addEventListener('change', () => {
  imagePreview.innerHTML = '';
  Array.from(imageUpload.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      imagePreview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

document.getElementById('itemForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted successfully!');
});
