import Assignment from './Assignment.js'

export default {
  template: `
             <section v-show="assignments.length">
                <h2 class="font-bold">{{ title }}</h2>
                <ul>
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