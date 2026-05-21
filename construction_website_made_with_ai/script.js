// Script to add new works dynamically to the "My Works" section

document.addEventListener('DOMContentLoaded', () => {
    const addWorkBtn = document.getElementById('add-work-btn');
    const worksGallery = document.getElementById('works-gallery');

    addWorkBtn.addEventListener('click', () => {
        const workTitle = prompt('Enter the title of your new work:');
        if (!workTitle) return alert('Title is required.');

        const workDescription = prompt('Enter a short description of your new work:');
        if (!workDescription) return alert('Description is required.');

        const workImageUrl = prompt('Enter the image URL for your new work:');
        if (!workImageUrl) return alert('Image URL is required.');

        // Create new work item element
        const workItem = document.createElement('div');
        workItem.classList.add('work-item');

        const img = document.createElement('img');
        img.src = workImageUrl;
        img.alt = workTitle;

        const title = document.createElement('h3');
        title.textContent = workTitle;

        const desc = document.createElement('p');
        desc.textContent = workDescription;

        workItem.appendChild(img);
        workItem.appendChild(title);
        workItem.appendChild(desc);

        worksGallery.appendChild(workItem);
    });
});
