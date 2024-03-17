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
            assignments: []
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

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(data => {
                this.assignments = data
            })
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