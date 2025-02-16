import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js'

export default {
  template: `
             <section v-show="show && assignments.length" class="w-60">
                <div class="flex justify-between items-start">
                  <h2 class="font-bold">
                    {{ title }}
                     ({{ assignments.length }})
                  </h2>
                  <button v-show="canToggle" @click="show=false" >&times;</button>
                </div>
                                
               <assignment-tags 
                   :assignments="assignments" 
                   v-model:currentTag="currentTag"
               />
                
                <ul class="border border-gray-600 divide-y divide-gray-600 mt-3">
                    <assignment :key="assignment.id" v-for="assignment in filteredAssignments" :assignment="assignment"></assignment>
                </ul>
                
                <slot></slot>
            </section>
  `,

  components: { Assignment, AssignmentTags },

  props: {
    title: {
      type: String,
    },
    assignments: {
      type: Array,
    },
    canToggle: { type: Boolean, default: false }
  },

  data () {
    return {
      currentTag: 'all',
      show: true,
    }
  },

  computed: {
    filteredAssignments () {
      if (this.currentTag === 'all') {
        return this.assignments
      }

      return this.assignments.filter(a => a.tag === this.currentTag)
    },
  }
}