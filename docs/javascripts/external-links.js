// Material's instant navigation replaces page content without a full reload.
document$.subscribe(function () {
  const practicals = "https://iangray001.github.io/embs/docs/practicals/";

  document.querySelectorAll(`a[href="${practicals}"]`).forEach(function (link) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = "Opens in a new tab";

    if (!link.querySelector(".external-link-icon")) {
      link.setAttribute("aria-label", `${link.textContent.trim()} (opens in a new tab)`);
      const icon = document.createElement("span");
      icon.className = "external-link-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = "↗";
      link.appendChild(icon);
    }
  });
});
