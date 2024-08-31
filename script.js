const visitedH5 = localStorage.getItem('visitedH5');

if (window.location.href.includes("?h5") == false && visitedH5 !== "true") {
    window.location = "../notfound.html";
} else {
    localStorage.setItem('visitedH5', true);
    if (window.location.href.includes("?h5") == true) {
        window.location = window.location.pathname;
    }
}