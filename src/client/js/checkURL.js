function urlChecker(inputURL) {
    let url;
    try {
        url = new URL(inputURL);

    } catch (error) {
        return false;
    }
    return url.protocol === "http" || url.protocol === "https";
}

export { urlChecker }