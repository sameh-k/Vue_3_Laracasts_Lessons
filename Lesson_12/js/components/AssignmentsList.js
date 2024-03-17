import AssignmentListItem from "./AssignmentListItem.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  template: /*html*/ `
  <section v-show="assignments.length">
    <h2 class="font-bold mb-2">
      {{title}}
      <span>
        ({{this.assignments.length}})
      </span>
    </h2>

    <assignment-tags 
      :initial-tags="this.assignments.map(a => a.tag)"
      v-model:currentTag="currentTag"
    />

    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
      <assignment-list-item v-for="assignment in filteredAssignments" :key="assignment.id" :assignment=assignment />
    </ul>
  </section>
  `,

  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: 'all'
    }
  },

  computed: {
    filteredAssignments() {
      return this.currentTag == 'all' ? this.assignments : this.assignments.filter(a => a.tag == this.currentTag);
    }
  },

  components: {
    AssignmentListItem,
    AssignmentTags
  }
}