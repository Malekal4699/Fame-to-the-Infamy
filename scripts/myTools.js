// Function to return the max amount of characters a html input box can contain, shorting the string and adding ... at the start.

const CLSTRING = "FTI | ";

function shortLeft(string, boxLength) {
    let PREFIXDIRSTR = "...";
    boxLength -= PREFIXDIRSTR.length;
    let splitString = string.slice(string.length - boxLength, string.length);
    splitString = PREFIXDIRSTR + splitString;
    return splitString;
}

function prtc(content){
    const CLSTRING = "FTI | ";
    console.log(CLSTRING + content);
} 