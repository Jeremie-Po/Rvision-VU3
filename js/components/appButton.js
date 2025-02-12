export default {
  template: `
        <button
          :class="{
            'border rounded px-5 py-2 disabled:bg-red-500':true,
            'bg-gray-200 hover:bg-gray-500' : type === 'mute',
            'bg-blue-200 hover:bg-blue-500' : type === 'primary',
            'bg-purple-200 hover:bg-purple-500' : type === 'secondary',
            'is-loading':processing,
            }" 
            :disabled="processing"
           
            >
        <slot/>
       </button>
  `,

  props: {
    type: {
      type: String,
      default: 'primary',
    },
    processing: {
      type: Boolean,
      default: false,
    }
  },
}