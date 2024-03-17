import AssignmentListItem from "./AssignmentListItem.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  template: /*html*/ `
  <section v-show="visible && assignments.length" class="w-60">
    <div class="flex justify-between items-start">
      <h2 class="font-bold mb-2">
        {{title}}
        <span>
          ({{this.assignments.length}})
        </span>
      </h2>

      <button v-show="canToggle" @click="visible = !visible">&times;</button>
    </div>

    <assignment-tags 
      :initial-tags="this.assignments.map(a => a.tag)"
      v-model:currentTag="currentTag"
    />

    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
      <assignment-list-item v-for="assignment in filteredAssignments" :key="assignment.id" :assignment=assignment />
    </ul>

    <slot></slot>
  </section>
  `,

  props: {
    assignments: Array,
    title: String,
    canToggle: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentTag: 'all',
      visible: true
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