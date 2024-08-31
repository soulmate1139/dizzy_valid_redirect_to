const visitedH5 = localStorage.getItem('visitedH5');

if (window.location.href.includes("?h5") == false && visitedH5 !== "true") {
    window.location = "../notfound.html";
} else {
    localStorage.setItem('visitedH5', true);
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
        window.location = "mobile/index.html"
    }
}