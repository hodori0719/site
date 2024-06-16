export type BlogTitle = {
    title: string,
    date: string,
    isProject: boolean,
    tech?: string[],
    imgSrc?: string,
    desc?: string,
    gh?: string,
}

export type Blog = {
    titleElem: BlogTitle
    markdown: string,
}

export const ProjectIndex: Blog[] = [
    {
        titleElem: {
            title: "Astrarium",
            date: "2024",
            isProject: true,
            tech: ["typescript-original", "react-original", "threejs-original", "python-plain", "flask-original", "sqlalchemy-plain", "postgresql-plain", "firebase-plain", "docker-plain"],
            desc: "A cross-platform mobile app for astronomers to help them find and identify objects in the night sky and share observations with fellow stargazers.",
            imgSrc: "../assets/astrarium1.png",
        },
        markdown: require("./projects/astrarium.md"),
    },
    {
        titleElem: {
            title: "Training optical music recognition models on semantic-agnostic ground truth data",
            date: "2023",
            isProject: true,
            tech: ["pytorch-plain", "python-plain"],
            desc: "Improving a state-of-the-art OMR model (transformer, CRNN) with a new lossless encoding for sheet music data which removes semantic information about the music, generalizable to all computer vision models.",
            gh: "https://github.com/hodori0719/e2e-pianoform",
            imgSrc: '../assets/omr.png',
        },
        markdown: require("./projects/omr.md"),
    },
    {
        titleElem: {
            title: "Eventi",
            date: "2022",
            isProject: true,
            tech: ["javascript-plain", "nodejs-plain",  "discordjs-plain", "mongoose-original", "mongodb-plain"],
            desc: "A Discord bot which expands the built-in events function for medium-sized communities.",
            gh: "https://github.com/hodori0719/Eventi"
        },
        markdown: require("./projects/eventi.md"),
    },
    {
        titleElem: {
            title: "AniEmbed",
            date: "2022",
            isProject: true,
            tech: ["tensorflow-original", "python-plain", "jupyter-plain"],
            desc: "A neural-network based anime recommender/similarity analysis based on data from automated scraping and the MAL API.",
            imgSrc: "../assets/aniembed.png",
            gh: "https://github.com/hodori0719/aniembed"
        },
        markdown: require("./projects/aniembed.md"),
    },
    {
        titleElem: {
            title: "About this site",
            date: "",
            isProject: true,
            tech: ["typescript-original", "react-original"],
            gh: "https://github.com/hodori0719/hodori0719.github.io/tree/gh-pages"
        },
        markdown: require("./About.md"),
    },
]

export const BlogIndex: Blog[] = [
    {
        titleElem: {
            title: "Implementing Camera Movement for AR Mobile Apps in Expo",
            date: "April 17, 2024",
            isProject: false,
        },
        markdown: require("./writing/2.md"),
    },
]
