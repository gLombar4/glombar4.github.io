const personalSection = document.getElementById("personal-experience");
const whatSection = document.getElementById("what");
const timelineSection = document.getElementById("timeline");
const platformsSection = document.getElementById("platforms");
const howSection = document.getElementById("how");
const whySection = document.getElementById("why");
const sections = [personalSection, whatSection, timelineSection, platformsSection, howSection, whySection];

function hideSections(sectionId) {
    const currentSection = document.getElementById(sectionId);
    sections.forEach((section) => {
        if (section !== currentSection) {
            section.style.display = "none";
        }
    });
    currentSection.style.display = "block";
}

function onLoad() {
    const currentSection = document.getElementById("what");
    sections.forEach((section) => {
        if ((section) !== currentSection) {
            section.style.display = "none";
        }
    });
    currentSection.style.display = "block";
}
