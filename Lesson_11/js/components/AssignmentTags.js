export default {
  template: /*html*/ `
    <div class="flex gap-2">
      <button 
        @click="$emit('change', tag)"
        v-for="tag in tags"
        class="border rounded px-1 py-1 text-xs"
        :class="{
          'border-blue-500 text-blue-500': tag === this.currentTag
        }"
      >
        {{tag}}
      </button>
    </div>
    `,

  props: {
    initialTags: Array,
    currentTag: String
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.initialTags)];
    },
  },
}