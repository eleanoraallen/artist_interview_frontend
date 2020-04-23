// server url
const url = "";

// search string
let searchString = "";

/**
 * Opens a new archive page w/ the proper search queary
 * 
 * @param event<input> searchbar's content
 */
const handleSearch = event => {
    searchString = event.target.value.trim();
    window.open("./archive.html?search=" + searchString);
}
// add event listener
document.getElementById("searchBar").addEventListener("search", handleSearch);

/**
 * WILL: load a preview of the most recent interview
 * ACTUALY DOES: loads a fake preview for testing
 */
function loadPreview() {
    const data = {
        title: "Interview Title", 
        artist: "Artist Name", 
        imageUrl: "https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2018/01/tazheader.jpg",
        imageTitle: "You're going to be amazing",
        date: "03/15/17776",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url: "https://cs.brown.edu/courses/csci1320/"
    };
    writePreview(data);

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => writePreview(data)
    //     ).catch(err => {
    //         console.log(err)
    //     });
}

/**
 * writes a preview of the most recent interview to the page
 * 
 * @param p<JSONw> data representing the most recent interview 
 * 
 */
function writePreview(p) {
    let preview = document.createElement("div");
    preview.className = "homePreview";

    // title
    let previewTitle = document.createElement('div');
    previewTitle.className = "homePreviewTitle";
    previewTitle.innerHTML = p.title;
    preview.appendChild(previewTitle);

    // artist
    let previewArtist = document.createElement('div');
    previewArtist.className = "homePreviewArtist";
    previewArtist.innerHTML = "An interview with " + p.artist;
    preview.appendChild(previewArtist);

    // preview image
    let imageContainer = document.createElement('div');
    imageContainer.className = "homePreviewImageContainer";
    let image = document.createElement("img");
    image.setAttribute('src', p.imageUrl);
    image.setAttribute('alt', 'preview image for article: ' + p.title);
    image.className = "homePreviewImage";
    imageContainer.appendChild(image);
    preview.appendChild(imageContainer);

    // image title
    let previewImageTitle = document.createElement('div');
    previewImageTitle.className = "homeImageTitle";
    previewImageTitle.innerHTML = p.imageTitle;
    preview.appendChild(previewImageTitle);

    // date
    let date = document.createElement('div');
    date.className = "homePreviewDate";
    date.innerHTML = moment(p.date).format('MMM Do, YYYY');
    preview.appendChild(date);
    
    // description of the interview
    let previewDescription = document.createElement('div');
    previewDescription.className = "homePreviewDescription";
    previewDescription.innerHTML = p.description;
    preview.appendChild(previewDescription);

    // button linking to the full interview
    let previewButtonContainer = document.createElement('div');
    previewTitle.className = "homePreviewButtonContainer";
    let previewLink = document.createElement('a');
    previewLink.className = "homePreviewLink";
    previewLink.href = p.url;
    let previewButton = document.createElement('button');
    previewButton.className = "homePreviewButton";
    previewButton.innerHTML = "Read";
    previewLink.appendChild(previewButton);
    previewButtonContainer.appendChild(previewLink);

    // write 
    const conetentContainer = document.getElementById('contentContainer');
    while (conetentContainer.firstChild) {
        conetentContainer.removeChild(conetentContainer.firstChild);
    }
    conetentContainer.appendChild(preview);
}

// Load preview when page is opened
loadPreview();