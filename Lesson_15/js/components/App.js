import AppButton from "./AppButton.js";
import Assignments from "./Assignments.js";

export default {
    template: /*html*/ `
    <div class="grid gap-6">
        <assignments />
    </div>
    `,

    components: {
        "app-button": AppButton,
        Assignments,
    }
};