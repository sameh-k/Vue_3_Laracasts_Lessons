export default {
    template: `
    <li :key="assignment.id">
        <label class="p-2 flex justify-between items-center">
            {{assignment.name}}
            <input type="checkbox" v-model="assignment.complete" class="ml-5"/>
        </label>
    </li>
    `,

    props: {
        assignment: Object,
    }
}