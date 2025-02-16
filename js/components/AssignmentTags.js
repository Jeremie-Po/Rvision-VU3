export default {
  template: `
            <div class="flex gap-2">
                <button 
                    @click=$emit('change',tag)
                    class='border rounded py-px px-1 text-xs' 
                    :class="{'border-blue-500':tag === currentTag}"
                    v-for="tag in tags"
                    >{{ tag }}
                </button>
            </div>
 
 `,

  props: {
    assignments: Array,
    currentTag: String,
  },

  computed: {
    tags () {
      return ['all', ...new Set(this.assignments.map(t => t.tag))]
    }
  }
}