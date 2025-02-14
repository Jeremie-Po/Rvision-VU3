import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'

export default {
  components: {
    AssignmentList,
    AssignmentCreate
  },
  template: `
        <section class="space-y-6">
            <assignment-list title="In Progress Component" :assignments="filters.inProgress"></assignment-list>           
            <assignment-list title="In completed Component" :assignments="filters.completed"></assignment-list>           
        </section>
        
        <assignment-create @add="add"></assignment-create>
`,

  data () {
    return {
      assignments: [
        { name: 'Finish project', complete: false, id: 1 },
        { name: 'Read Chapter 4', complete: false, id: 2 },
        { name: 'Turn in Homework', complete: false, id: 3 },
      ],
    }
  },
  computed: {
    filters () {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete)
      }
    }
  },
  methods: {
    add (name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      })
    }
  },
}