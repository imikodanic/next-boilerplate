import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
    h1: {
        value: {
            fontSize: "2.875rem",
        },
    },
    h2: {
        value: {
            fontSize: { base: "2.125rem", lg: "2.125rem" },
        },
    },
    h3: {
        value: {
            fontSize: { base: "1.875rem", lg: "1.875rem" },
        },
    },
    h4: {
        value: {
            fontSize: "1.625rem",
        },
    },
});
