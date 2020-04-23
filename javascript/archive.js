// server url
const url = "";

// priview array
let previews = [];

// search string
let searchString = "";
if (window.location.href.split('search=').length > 1) {
    searchString = window.location.href.split('search=')[1];
}

// set searchBar innerHTML
document.getElementById("searchBar").innerHTML = searchString;

// Sorted BY
let sortBy = 'date';

// represents a preview of an interview
class Preview {
    constructor(data, visible) {
      this.title = data.title;
      this.artist = data.artist;
      this.date = data.date;
      this.imageUrl = data.imageUrl;
      this.description = data.description;
      this.url = data.url;
      this.tags = data.tags;
      this.visible = visible;
    }
  }

// Event Handlers -----------------------------------------------------------------

/**
 * sorts previews according to Date and updates the page
 * @param event<click> onClick event
 */
function sortDate(event) {
    sortBy = 'date';
    previews = sortPreviews(previews);
    writePreviews();
}
// add event listener
document.getElementById("dateButton").addEventListener("click", sortDate);

/**
 * sorts previews according to artist and updates the page
 * @param event<click> onClick event
 */
function sortArtist(event) {
    sortBy = 'artist';
    previews = sortPreviews(previews);
    writePreviews();
}
// add event listener
document.getElementById("artistButton").addEventListener("click", sortArtist);

/**
 * sorts previews according to title and updates the page
 * @param event<click> onClick event
 */
function sortTitle(event) {
    sortBy = 'title';
    previews = sortPreviews(previews);
    writePreviews();
}
// add event listener
document.getElementById("titleButton").addEventListener("click", sortTitle);

/**
 * updates previews according to search parameters
 * @param event<input> searchbar's content
 */
function handleSearch(event) {
    searchString = event.target.value.trim();
    previews.forEach(p => p.visible = shouldShowPreview(p));
    writePreviews();
}
// add event listener 
document.getElementById("searchBar").addEventListener("input", handleSearch);

// communication w/ backend -----------------------------------------------------

/**
 * WILL: loads all previews from the server
 * ACTUALY DOES: loads fake previews for testing
 */
function loadPreviews() {
    const data1 = {
        title: "Interview 1", 
        artist: "Artist1", 
        imageUrl: "https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2018/01/tazheader.jpg",
        date: "03/15/17776",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        url: "https://cs.brown.edu/courses/csci1320/",
        tags: ["xxx", "yyy", "zzz"],
    };
    const data2 = {
        title: "Interview 2", 
        artist: "ZArtist2", 
        imageUrl: "https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2018/01/tazheader.jpg",
        date: "03/15/1776",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
        tags: ["xxx", "zzz"],
    };
    const data3 = {
        title: "Interview 3", 
        artist: "Artist3", 
        imageUrl: "https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2018/01/tazheader.jpg",
        date: "01/15/17776",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        url: "https://www.sitepoint.com/get-url-parameters-with-javascript/",
        tags: ["yyy", "zzz"],
    };
    const data4 = {
        title: "Interview 4", 
        artist: "Artist4", 
        imageUrl: "https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2018/01/tazheader.jpg",
        date: "03/16/17776",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        url: "https://en.wikipedia.org/wiki/Vincenzo_Camuccini",
        tags: ["zzz"],
    };
    previews = sortPreviews([data1, data2, data3, data4].map(p => makePreview(p)));
    writePreviews()
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //        previews = sortPreviews(data.previews.map(p => makePreview(p)));
    //         writePreviews();
    //     }).catch(err => {
    //         console.log(err)
    //     });
}

// helper functions -------------------------------------------------------------

/**
 * makes a Preview from the data recieved from the server
 * 
 * @param p<JSON> JSON representing the preview's data
 * 
 * @return<Preview> the Preview
 */
function makePreview(p) {
    return new Preview(p, shouldShowPreview(p));
}

/**
 * true iff a preview should be visible (is included in the search parameters)
 * 
 * @param p<Preview> the preview to be tested
 * 
 * @return<Boolean> true iff should be visible
 */
function shouldShowPreview(p) {
    let show = searchString == "";
    show = show || p.title.includes(searchString);
    show = show || p.artist.includes(searchString);
    p.tags.forEach(t => show = show || t.includes(searchString));
    return show;
}

/**
 * sorts an array of previews according to sortBy
 * 
 * @param l<[Preview]> the previews to be sorted
 * 
 * @return<[Preview]> the sorted array
 */
function sortPreviews(l) {
    let compare = (x, y) => new Date(y.date) - new Date(x.date);
    if (sortBy == 'artist') {
        compare = (x, y) => {
            if (x.artist > y.artist) { 
                return -1;
            } else { 
                return 1;
            }
        };
    }
    if (sortBy == 'title') {
        compare = (x, y) => {
            if (x.title > y.title) { 
                return -1;
            } else { 
                return 1;
            }
        };
    } 
    return l.sort(compare);
}

/**
 * writes previews to the document
 */
function writePreviews() {
    const conetentContainer = document.getElementById('contentContainer');
    while (conetentContainer.firstChild) {
        conetentContainer.removeChild(conetentContainer.firstChild);
    }
    previews.forEach(p => conetentContainer.appendChild(formatPreview(p)));
}

/**
 * returns a preview as a DOM element
 * 
 * @param p<Preview> a Preview 
 * 
 * @return<<div>...</div>> the given preview as a DOM element
 */
function formatPreview(p) {
    let preview = document.createElement("div");
    
    // set preview visibility
    if (p.visible) {
        preview.className = "visiblePreview";
    } else {
        preview.className = "invisiblePreview";
    }

    // container for the preview image
    let imageContainer = document.createElement('div');
    imageContainer.className = "previewImageContainer";

    // preview image
    let image = document.createElement("img");
    image.setAttribute('src', p.imageUrl);
    image.setAttribute('alt', 'preview image for article: ' + p.title);
    image.className = "previewImage";
    imageContainer.appendChild(image);
    preview.appendChild(imageContainer);

    // container for the preview's textual content
    let previewContent = document.createElement('div');
    previewContent.className = "previewContent";

    // title
    let previewTitle = document.createElement('div');
    previewTitle.className = "previewTitle";
    previewTitle.innerHTML = p.title;

    // name of the artist and the date
    let nameDate = document.createElement('div');
    nameDate.className = 'previewNameDate';
    let previewArtist = document.createElement('div');
    previewArtist.className = "previewArtist"
    previewArtist.innerHTML = p.artist;
    let date = document.createElement('div');
    date.className = "previewDate";
    date.innerHTML = moment(p.date).format('MMM Do, YYYY');
    nameDate.appendChild(previewArtist);
    nameDate.appendChild(date);
    
    // description of the interview
    let previewDescription = document.createElement('div');
    previewTitle.className = "previewDescription";
    previewTitle.innerHTML = p.description;

    // button linking to the full interview
    let previewButtonContainer = document.createElement('div');
    previewTitle.className = "previewButtonContainer";
    let previewLink = document.createElement('a');
    previewLink.className = "previewLink";
    previewLink.href = p.url;
    let previewButton = document.createElement('button');
    previewButton.className = "previewButton";
    previewButton.innerHTML = "Read";
    previewLink.appendChild(previewButton);
    previewButtonContainer.appendChild(previewLink);

    // append remaining child elements
    previewContent.appendChild(previewTitle);
    previewContent.appendChild(nameDate);
    previewContent.appendChild(previewDescription);
    previewContent.appendChild(previewButtonContainer);
    preview.appendChild(previewContent);

    return preview;
}

// loads previews when page is opened
loadPreviews();