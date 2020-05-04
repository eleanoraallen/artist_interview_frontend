/**
 * adds an artest statement to the document
 */
function addArtist() {
    let artistID = Math.floor(Math.random() * 1000000000);
    let container = document.createElement('div');
    container.id = `artist${artistID}`;
    container.className = "elementContainer";
    let field = document.createElement('textarea');
    field.className="inputField artistField interviewElement";
    field.placeholder="enter artist statement";
    let button = document.createElement('button');
    button.className = "removeButton";
    button.innerHTML = "X";
    button.onclick = () => removeDiv('artist', artistID);
    container.appendChild(field);
    container.appendChild(button);
    let parent = document.getElementById("interviewContainer");
    parent.appendChild(container);
}

/**
 * adds an artest statement to the document
 */
function addInterviewer() {
    let interviewerID = Math.floor(Math.random() * 1000000000);
    let container = document.createElement('div');
    container.id = `interviewer${interviewerID}`;
    container.className = "elementContainer";
    let field = document.createElement('textarea');
    field.className="inputField interviewerField interviewElement";
    field.placeholder="enter interviewer statement";
    let button = document.createElement('button');
    button.className = "removeButton";
    button.innerHTML = "X";
    button.onclick = () => removeDiv('interviewer', interviewerID);
    container.appendChild(field);
    container.appendChild(button);
    let parent = document.getElementById("interviewContainer");
    parent.appendChild(container);
}

/**
 * adds an artest statement to the document
 */
function addImage() {
    let imageID = Math.floor(Math.random() * 1000000000);
    let container = document.createElement('div');
    container.id = `image${imageID}`;
    container.className = "elementContainer";
    let inputContainer = document.createElement('div');
    inputContainer.className = "imageInputContainer interviewElement";
    let srcInput = document.createElement('input');
    srcInput.className="inputBar srcInput";
    srcInput.placeholder="enter image url";
    let captionInput = document.createElement('input');
    captionInput.className="inputBar captionInput";
    captionInput.placeholder="enter image caption";
    let altInput = document.createElement('input');
    altInput.className="inputBar altInput";
    altInput.placeholder="enter image alternant text";
    inputContainer.appendChild(srcInput);
    inputContainer.appendChild(captionInput);
    inputContainer.appendChild(altInput);
    let button = document.createElement('button');
    button.className = "removeButton";
    button.innerHTML = "X";
    button.onclick = () => removeDiv('image', imageID);
    container.appendChild(inputContainer);
    container.appendChild(button);
    let parent = document.getElementById("interviewContainer");
    parent.appendChild(container);
}

/**
 * adds a tag to the document
 */
function addTag() {
    let tagID = Math.floor(Math.random() * 1000000000);
    let container = document.createElement('div');
    container.id = `tag${tagID}`;
    container.className = "elementContainer";
    let field = document.createElement('input');
    field.className="inputBar tagInput";
    field.placeholder="enter tag";
    let button = document.createElement('button');
    button.className = "removeButton";
    button.innerHTML = "X";
    button.onclick = () => removeDiv('tag', tagID);
    container.appendChild(field);
    container.appendChild(button);
    let parent = document.getElementById("tagContainer");
    parent.appendChild(container);
}

/**
 * removes a div with an id in the form `${s}${id}`
 * 
 * @param s<String> a string that makes up the first part of the divs id 
 * @param id<Number> a number that serves as the id for the specified tags div 
 */
function removeDiv(s, id) {
    let tag = document.getElementById(String(s) + String(id));
    tag.parentNode.removeChild(tag);
}

/**
 * returns an array of strings where each string describes something wrong with the created interview (empty if no problems)
 * @return <[String]> the problems in the interview
 */
function publish() {
    let e = getErrors();
    if (e.length > 0) {
        let m = "There seems to be a problem with your interview. Please fix the following issue(s):";
        e.forEach(s => m = m + s);
        alert(m);
    } else {
        let confirmation = confirm("Please confirm that you want to publish this.");
        if (confirmation) {
            const artist = String(document.getElementById('artistInput').value);
            const interviewer = String(document.getElementById('interviewerInput').value);
            const description = String(document.getElementById('descriptionInput').value);
            const imageUrl = String(document.getElementById('previewImageSource').value);
            const imageTitle = String(document.getElementById('previewImageCaption').value);
            const date = new Date().toDateString();
            const tags = Array.from(document.getElementsByClassName('tagInput')).map(x => String(x.value)).filter(x => x !== "");
            const html = getHTML();

            const data = {
                artist: artist,
                interviewer: interviewer,
                description: description,
                imageUrl: imageUrl,
                imageTitle: imageTitle,
                date: date,
                tags: tags,
                html: html
            };
            const json = JSON.stringify(data);


            
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // This is presumably where we'll be sending the data to the server
           // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            
            
            console.log(json);                       // |
            var myWindow = window.open("", "_self"); // | <-- replace this stuff
            myWindow.document.write(html);           // |

        }
    }
}

/**
 * returns an array of strings where each string describes something wrong with the created interview (empty if no problems)
 * @return <[String]> the problems in the interview
 */
function showPreview() {
    let e = getErrors();
    if (e.length > 0) {
        let m = "There seems to be a problem with your interview. Please fix the following issue(s):";
        e.forEach(s => m = m + s);
        alert(m);
    } else {
        var wnd = window.open("about:blank", "", "_blank");
        wnd.document.write(getHTML());
    }
}
 
/**
 * returns an array of strings where each string describes something wrong with the created interview (empty if no problems)
 * @return <[String]> the problems in the interview
 */
function getErrors() {
    let l = [];
    if (document.getElementById('artistInput').value === "") {
        l.push(' \n  no artist name given');
    }
    if (document.getElementById('interviewerInput').value === "") {
        l.push(' \n  no interviewer name given');
    }
    if (document.getElementById('previewImageSource').value === "") {
        l.push(' \n  no preview image url given');
    }
    if (document.getElementById('previewImageCaption').value === "") {
        l.push(' \n  no preview image caption given');
    }
    if (document.getElementById('descriptionInput').value === "") {
        l.push(' \n  no interview description given');
    }
    return l; 
}

/**
 * returns a string that represents interview as html
 * @return <String> the interview html
 */
function getHTML() {
    let h = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Interview</title><script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js" crossorigin="anonymous"></script><link rel="stylesheet" href="../css/webfonts/ingram-mono-regular.css" type="text/css" charset="utf-8" /><link rel="stylesheet" type="text/css" href="../css/style.css" /><link rel="stylesheet" type="text/css" href="../css/interview.css" /></head><body><a id='skipLink' href='#contentContainer'>Jump to main</a><div class="header"><div class="logoContainer"><a href="index.html" class="logoLink">/ Variables</a></div><div class="navContainer" role="navigation"><nav><a class="navLink" href="./about.html">About</a><a class="navLink" href="./archive.html">Archive</a><a class="navLink" href="./contact.html">Contact</a></nav></div><div class="spaceDiv"></div></div><main><div id="contentContainer" role="main">`;
    h = h + `<div class="interviewArtist">${String(document.getElementById('artistInput').value)}</div>`;
    h = h + `<div class="interviewInterviewer">${String(document.getElementById('interviewerInput').value)}</div>`;
    h = h + `<div class="interviewImageContainer"><img class="interviewImage" src="${String(document.getElementById('previewImageSource').value)}"  alt="${String(document.getElementById('previewImageAlt').value)}"></div>`;
    h = h + `<div class="interviewImageTitle">${String(document.getElementById('previewImageCaption').value)}</div>`;
    h = h + `<div class="interviewDescription">${String(document.getElementById('descriptionInput').value)}</div>`;

    const elements = Array.from(document.getElementsByClassName('interviewElement'));
    elements.forEach(x => {
        if (x.className.includes("artistField")) {
            h = h + `<div class="interviewAnswer">${String(x.value)}</div>`;
        }
        if (x.className.includes("interviewerField")) {
            h = h + `<div class="interviewQuestion">${String(x.value)}</div>`;
        }
        if (x.className.includes("imageInputContainer")) {
            const children = Array.from(x.childNodes);
            let src = "";
            let caption = "";
            let alt = "";
            children.forEach(c => {
                if (c.className.includes("srcInput")) {
                    src = String(c.value);
                }
                if (c.className.includes("captionInput")) {
                    caption = String(c.value);
                }
                if (c.className.includes("altInput")) {
                    alt = String(c.value);
            }});
            h = h + `<div class="interviewImageContainer"><img class="interviewImage" src="${src}" alt="${alt}"></div>`;
            if (caption !== "") {
                h = h + `<div class="interviewImageTitle">${caption}</div>`;
            }
        }
    });
    h = h + `</div></main><div class="footer"></div></body></html>`;
    return h;
}

