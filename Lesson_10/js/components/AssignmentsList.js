import AssignmentListItem from "./AssignmentListItem.js";

export default {
  template: `
  <section v-show="assignments.length">
    <h2 class="font-bold mb-2">
      {{title}}
      <span>
        ({{this.assignments.length}})
      </span>
    </h2>

    <div class="flex gap-2">
      <button 
        @click="currentTag = tag"
        v-for="tag in tags"
        class="border rounded px-1 py-1 text-xs"
        :class="{
          'border-blue-500 text-blue-500': tag === this.currentTag
        }"
      >
        {{tag}}
      </button>
    </div>

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
    tags() {
      return ['all', ...new Set(this.assignments.map(a => a.tag))];
    },

    filteredAssignments() {
      return this.currentTag == 'all' ? this.assignments : this.assignments.filter(a => a.tag == this.currentTag);
    }
  },

  components: {
    AssignmentListItem
  }
}