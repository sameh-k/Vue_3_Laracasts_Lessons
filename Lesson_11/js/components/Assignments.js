import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    template: `
    <section class="space-y-6">
        <assignments-list title="In Progress" :assignments=filters.inProgress />
        <assignments-list title="Completed" :assignments=filters.completed />

        <assignment-create @add="add"/>
    </section>
    `,

    data() {
        return {
            assignments: [{
                    name: "Finish Project",
                    complete: false,
                    tag: 'Math',
                    id: 1
                },
                {
                    name: "Read Chapter 4",
                    complete: false,
                    tag: 'science',
                    id: 2
                },
                {
                    name: "Turn in homework",
                    complete: false,
                    tag: 'Math',
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

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            })
            this.newAssignment = ''
        }
    },

    components: {
        AssignmentsList,
        AssignmentCreate
    }
}