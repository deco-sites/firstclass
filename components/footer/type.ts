export interface NewsletterProps {
    display: "true" | "false";
    title?: string;
    description?: string;
}

export interface CopyrightProps {
    display: "true" | "false";
    text?: string;
}

export interface NavigationProps {
    cols?: Array<{
        title?: string;
        align?: "row" | "column";
        items?: Array<
        {
            text?: string;
            icon?:
                "none"
                |
                "Phone"
                |
                "Email"
                |
                "Facebook"
                |
                "Instagram";
            image?: string;
            href?: string;
        }>;
    }>;
}