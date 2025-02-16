import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js'

export default {
  template: `
             <section v-show="assignments.length">
                <h2 class="font-bold">
                {{ title }}
                ({{ assignments.length }})
                </h2>
                
               <assignment-tags :assignments="assignments" @change="currentTag = $event" :currentTag="currentTag"/>
                
                <ul class="border border-gray-600 divide-y divide-gray-600 mt-3">
                    <assignment :key="assignment.id" v-for="assignment in filteredAssignments" :assignment="assignment"></assignment>
                </ul>
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

  }
}