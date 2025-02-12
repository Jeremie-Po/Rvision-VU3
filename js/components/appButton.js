export default {
  template: `
        <button
          class="bg-gray-200 hover:bg-gray-500 border rounded px-5 py-2 disabled:bg-red-500" :disabled="processing">
                     <slot/>
       </button>
  `,

  data () {
    return {
      processing: true
    }
  }
}