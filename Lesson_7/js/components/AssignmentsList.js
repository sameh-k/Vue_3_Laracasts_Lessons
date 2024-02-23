import AssignmentListItem from "./AssignmentListItem.js";

export default {
  template: `
  <section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{title}}</h2>

    <ul>
      <assignment-list-item v-for="assignment in assignments" :key="assignment.id" :assignment=assignment />
    </ul>
  </section>
  `,

  props: {
    assignments: Array,
    title: String,
  },

  components: {
    AssignmentListItem
  }
}