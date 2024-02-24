import AssignmentsList from "./AssignmentsList.js";

export default {
    template: `
    <assignments-list title="In Progress" :assignments=filters.inProgress />
    <assignments-list title="Completed" :assignments=filters.completed />
    `,

    data() {
        return {
            assignments: [{
                    name: "Finish Project",
                    complete: false,
                    id: 1
                },
                {
                    name: "Read Chapter 4",
                    complete: false,
                    id: 2
                },
                {
                    name: "Turn in homework",
                    complete: false,
                    id: 3
                },
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter((a) => !a.complete),
                completed: this.assignments.filter((a) => a.complete),
            }
        }
    },

    components: {
        AssignmentsList
    }
}