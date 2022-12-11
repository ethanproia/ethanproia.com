(window.Prism = window.Prism || {}), (window.Prism.manual = !0);

function activateCodeHighlighting() {
    var e = !1;
    setInterval(() => {
        var t = document.querySelector(".super-content").getElementsByClassName("notion-code").length > 0;
        t && !e && window.Prism && window.Prism.highlightAll && (window.Prism.highlightAll(), (e = !0)), t || (e = !1);
    }, 500);
}
function manageCTAButton() {
    var e = document.querySelector(".super-navbar__actions .notion-link"),
        t = document.querySelector(".super-navbar__menu-item-list");
    if (e && t) {
        e.classList.add("super-cta-container");
        var a = e.cloneNode(!0);
        a.classList.add("super-navbar__menu-item"), t.appendChild(a);
    }
