var flagFilenames = [
    "flags/Flag_of_Afghanistan_Flat_Round-128x128.png",
    "flags/Flag_of_Albania_Flat_Round-128x128.png",
    "flags/Flag_of_Algeria_Flat_Round-128x128.png",

];

var flagContainer = document.querySelector('.flags');

for (var i = 0; i < flagFilenames.length; i++) {
    var flagImg = document.createElement('img');
    flagImg.src = flagFilenames[i];
    flagImg.alt = 'Flag ' + (i + 1);
    flagContainer.appendChild(flagImg);

    // Extract the country name from the filename
    var filenameParts = flagFilenames[i].split('_');
    var countryName = filenameParts[2]; // Assumes the country name is the third part of the filename

    // Create a caption element for the country name
    var caption = document.createElement('div');
    caption.textContent = countryName;

    // Create a container element for the flag and caption
    var flagContainerItem = document.createElement('div');
    flagContainerItem.classList.add('flag-item');
    flagContainerItem.appendChild(flagImg);
    flagContainerItem.appendChild(caption);

    flagContainer.appendChild(flagContainerItem);
}
