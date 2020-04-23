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