function handleFiles() {
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery');
    const files = fileInput.files;

    if (!files.length) {
        alert("Bitte wähle Dateien aus!");
        return;
    }

    Array.from(files).forEach(file => {
        const fileURL = URL.createObjectURL(file);
        const box = document.createElement('div');
        box.classList.add('box');

        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = fileURL;
            img.alt = file.name;
            box.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            const video = document.createElement('video');
            video.src = fileURL;
            video.controls = true;
            box.appendChild(video);
        }

        gallery.appendChild(box);
    });

    fileInput.value = ''; // Reset the input for further uploads
}
