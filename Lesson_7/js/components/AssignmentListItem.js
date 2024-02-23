export default {
    template: `
    <li :key="assignment.id">
        <label>
            {{assignment.name}}
            <input type="checkbox" v-model="assignment.complete" />
        </label>
    </li>
    `,

    props: {
        assignment: Object,
    }
}