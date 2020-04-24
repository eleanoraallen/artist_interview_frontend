// server url
const url = "";

/**
 * WILL: load a preview of the x most recent interview
 * @param: x[number]: number of previews to load
 * ACTUALY DOES: loads a fake preview for testing
 */
function loadPreviews(x) {
    const data1 = {
        artist: "Artist Name",
        interviewer: "Interviewer Name",  
        imageUrl: "https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2018/01/tazheader.jpg",
        imageTitle: "image caption",
        date: "03/15/17776",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url: "./sample_interview.html",
    };
    const data2 = {
        artist: "Artist Name2",
        interviewer: "Interviewer Name2",  
        imageUrl: "https://vignette.wikia.nocookie.net/zelda/images/c/c3/Prince_Sidon.jpg/revision/latest/top-crop/width/720/height/900?cb=20170228204715",
        imageTitle: "image caption",
        date: "03/14/17776",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url: "./sample_interview.html",
    };
    const data = [data1, data2];
    writePreviews(data);

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
 * @param l<[JSON]> list of data representing the most recent interviews 
 * 
 */
function writePreviews(l) {
    const conetentContainer = document.getElementById('contentContainer');
        while (conetentContainer.firstChild) {
            conetentContainer.removeChild(conetentContainer.firstChild);
        }
    let i = 0;
    while (i < l.length) {
        let p = l[i];
        let preview = document.createElement("div");
        preview.className = "homePreview";

        // artist
        let previewArtist = document.createElement('div');
        previewArtist.className = "homePreviewArtist";
        previewArtist.innerHTML = p.artist;
        preview.appendChild(previewArtist);

        // interviewer
        let previewInterviewer = document.createElement('div');
        previewInterviewer.className = "homePreviewInterviewer";
        previewInterviewer.innerHTML = "with " + p.interviewer;
        preview.appendChild(previewInterviewer);

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

        // link to the full interview
        let previewLinkContainer = document.createElement('div');
        previewLinkContainer.className = "previewLinkContainer";
        let previewLink = document.createElement('a');
        previewLink.className = "homePreviewLink";
        previewLink.href = p.url;
        previewLink.innerHTML = "read »";
        previewLinkContainer.appendChild(previewLink)
        preview.appendChild(previewLinkContainer);
        
        // write 
        conetentContainer.appendChild(preview);
        let divider = document.createElement('div');
        divider.className = "homeDivider";
        if (i+1 < l.length) {
            conetentContainer.appendChild(divider);
        }

        // increment!
        i = i + 1;  
    }
}

// Load preview when page is opened
loadPreviews();