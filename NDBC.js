/**
 * NDBC.js - A collection of functions to generate D3 visualizations
 * of NDBC 46042 data.
 *
 * DEPENDS ON:
 *   D3.js
*/

/**
 * Returns the three letter abbreviation of a given month number
 * (starting at 0)
 * @param {Number} month number
 * @return {String} 3 letter month abbreviation
 */
 function monthAbbrev(mNum) {
     const mAbbrevs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     return mAbbrevs[mNum];
 }

/**
 * Checks to see if the given url is found and returns a boolean value
 * indicating the validity.
 * @param {String} url
 * @return {Boolean} is found
*/
function checkURL(url) {
    xhr = new XMLHttpRequest();
    xhr.open('HEAD',url, true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.setRequestHeader('Accept', 'text/html');
    xhr.send();
    if (xhr.status === 200) {
        return true;
    } else {
        return false;
    }
}
/**
 * Returns the URL for the standard meteorological summary text file
 * for NDBC 46042.
 * @return {String} url
*/
function getLastFullMonthURL() {
    let mNum = new Date(Date.now()).getMonth();
    let urlIsValid = false;
    let mA = '';
    let base_url ='';
    do {
        mNum--;
        mA = monthAbbrev(mNum);
        base_url = `http://www.ndbc.noaa.gov/data/stdmet/${mA}/46042.txt`;
        urlIsValid = checkURL(base_url);
    } while (urlIsValid === false && mNum >= 0);
    if (urlIsValid) {
        return base_url;
    } else {
        return "I'm sorry.  Something is amok with this code."
    }

}
