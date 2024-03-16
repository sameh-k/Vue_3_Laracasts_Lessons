import AppButton from "./AppButton.js";
import Assignments from "./Assignments.js";

export default {
    components: {
        "app-button": AppButton,
        "assignments": Assignments,
    },

    template: `
    <assignments />
    `
};