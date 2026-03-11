export const brandSettings = {
    logo: {
        src: "img/redbullenergydrink.svg", // Add logo image URL here (e.g., "/assets/logo.png")
        alt: "[RedBull]",
        variations: [ // you might have wordmarks / different color variants than what is listed here, that's fine just adjust it
            { 
                name: "Primary - Light Background", 
                src: "img/redbull.svg", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "Use this version on white or light backgrounds."
            },
            { 
                name: "Primary - Dark Background", 
                src: "img/redbull.svg", // Add image path
                bg: "#333333", 
                darkText: false,
                description: "Use this version on dark or brand-colored backgrounds."
            },
            { 
                name: "Monochrome - Black", 
                src: "/img/redbullblackandwhite2.svg", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "For black and white print or single-color applications."
            },
            { 
                name: "Monochrome - White", 
                src: "img/redbullblackandwhite.svg", // Add image path
                bg: "#090808", 
                darkText: false,
                description: "For dark backgrounds where color is not permitted."
            }
        ]
    },
    favicon: "img/favicon.ico", // Add favicon URL here
    typography: {
        primaryFont: "Montserrat",  // this will automatically get set as the page font
        secondaryFont: "Futura", // dont be a bum, go find some google/adobe fonts you like. just make sure to load them in the stylesheet or Layout astro file 
        baseSize: "16px",
        lineHeight: "1.5",
        paragraphSpacing: "2"
    },
    palette: [ // these will load automatically into your page into the color section
        { name: "RedBull Red", hex: "#CC1E4A" },
        { name: "Outrageous Orange", hex: "#F4801F" },
        { name: "Sunbelt Yellow", hex: "#FFC906" },
        { name: "Deep Bull Blue", hex: "#004C6C" },
        { name: "Soaring Blue", hex: "#008CD1" },
        { name: "Almost Black", hex: "#171717" }, 
        { name: "Almost White", hex: "#F4F5F5" }
    ]
};