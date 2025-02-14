import Assignment from './Assignment.js'

export default {
  template: `
             <section v-show="assignments.length">
                <h2 class="font-bold">
                {{ title }}
                ({{ assignments.length }})
                </h2>
                
                <div class="flex gap-2">
                    <button 
                    @click='currentTag = tag' 
                    class='border rounded py-px px-1 text-xs' 
                    :class="{'border-blue-500':tag === currentTag}"
                    v-for="tag in tags"
                    >{{ tag }}
                    </button>
                </div>
                
                <ul class="border border-gray-600 divide-y divide-gray-600 mt-3">
                    <assignment :key="assignment.id" v-for="assignment in filteredAssignments" :assignment="assignment"></assignment:key>
                </ul>
            </section>
  `,

  components: { Assignment },

  props: {
    title: {
      type: String,
    },
    assignments: {
      type: Array,
    },
  },

  data () {
    return {
      currentTag: 'all',
    }
  },

  computed: {
    filteredAssignments () {
      if (this.currentTag === 'all') {
        return this.assignments
      }

      return this.assignments.filter(a => a.tag === this.currentTag)
    },
    tags () {
      return ['all', ...new Set(this.assignments.map(t => t.tag))]
    }
  }
}