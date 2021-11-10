// Modal Image Gallery
function onClick(element) {
    document.getElementById("modal-image").src = element.src.replace('-t.webp', '.webp');
    document.getElementById("modal-wrap").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () { localScroll() };
function localScroll() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "ca-bar" + " ca-card" + " ca-animate-top" + " ca-white";
    } else {
        navbar.className = navbar.className.replace(" ca-card ca-animate-top ca-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("ca-show") == -1) {
        x.className += " ca-show";
    } else {
        x.className = x.className.replace(" ca-show", "");
    }
}
(function () {
    function create(tagName, attributes) {
        var e = document.createElement(tagName)
        for (var i = 0; i < attributes.length; i++) {
            var a = attributes[i]
            e.setAttribute(a.key, a.value)
        }
        return e
    }

    document.getElementById("footer-year").innerHTML = new Date().getFullYear();
    document.getElementsByTagName("head")
    document.head.append(create("link", [{ key: "rel", value: "stylesheet" }, { key: "href", value: "/assets/fa/font-awesome.min.css" }]))
    document.head.append(create("script", [{ key: "id", value: "facebook-jssdk" }, { key: "src", value: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0" }]))
    document.head.append(create("script", [{ key: "id", value: "twitter-wjs" }, { key: "src", value: "https://platform.twitter.com/widgets.js" }]))
    document.head.append(create("script", [{ key: "type", value: "text/javascript" }, { key: "src", value: "https://platform.linkedin.com/in.js" }]))

//    <script src="" type="text/javascript">lang: en_US</script>


})()
