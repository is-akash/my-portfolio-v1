export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    authors: [
        {
            name: string;
            url: string;
        }
    ];
    keywords: string[];
    ogImage: string;
    links: {
        twitter: string;
        github: string;
    };
};

export interface sociallinks {
    resume: string;
    links: {
        github: string;
        twitter: string;
        mail: string;
        discord: string;
        linkedin: string;
    };
}

export interface skills {
    Languages: string[];
    Frontend: string[];
    Backend: string[];
    Database: string[];
    Tools: string[];
}
