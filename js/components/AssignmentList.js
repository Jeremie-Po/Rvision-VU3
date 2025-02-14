import Assignment from './Assignment.js'

export default {
  template: `
             <section v-show="assignments.length">
                <h2 class="font-bold">{{ title }}</h2>
                <ul class="border border-gray-600 divide-y divide-gray-600 mt-3">
                    <assignment :key="assignment.id" v-for="assignment in assignments" :assignment="assignment"></assignment:key>
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
    }
  }
}