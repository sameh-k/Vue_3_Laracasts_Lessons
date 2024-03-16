export default {
    template: `
    <button
        :class="{
            'border rounded px-5 py-2 m-1 disabled:cursor-not-allowed': true,
            'bg-green-200 hover:bg-green-400': type == 'primary',
            'bg-blue-200 hover:bg-blue-400': type == 'secondary',
            'bg-gray-200 hover:bg-gray-400': type == 'muted',
        }"
        :disabled='processing'
    >
      <span :class="{'is-loading': processing}">
        <span v-show="!processing"> <slot /> </span>
      </span<
    </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
}