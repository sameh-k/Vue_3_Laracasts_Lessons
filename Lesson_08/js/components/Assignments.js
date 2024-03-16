import AssignmentsList from "./AssignmentsList.js";

export default {
    template: `
    <section class="space-y-6">
        <assignments-list title="In Progress" :assignments=filters.inProgress />
        <assignments-list title="Completed" :assignments=filters.completed />

        <form @submit.prevent="add">
          <div class="border border-gray-600 text-black grid grid-cols-2 gap-4">
            <input v-model="newAssignment" placeholder="new assignment" class="p-2"/>
            <button type="submit" class="bg-white p-2 border-l">Add</button>
          </div>
        </form>
    </section>
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
            ],

            newAssignment: ''
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
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            })
            this.newAssignment = ''
        }
    },

    components: {
        AssignmentsList
    }
}