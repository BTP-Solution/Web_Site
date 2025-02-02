export const scrollToSection = (sectionId: string, offset: number = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({
            top,
            behavior: "smooth",
        });
    } else {
        console.warn(`Section with ID "${sectionId}" not found.`);
    }
};