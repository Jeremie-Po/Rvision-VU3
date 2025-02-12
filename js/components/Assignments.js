import AssignmentList from './AssignmentList.js'

export default {
  components: {
    AssignmentList
  },
  template: `
    <assignment-list title="In Progresse Component" :assignments="inProgress"></assignment-list>           
    <assignment-list title="In completed Component" :assignments="completed"></assignment-list>           
`,

  data () {
    return {
      assignments: [
        { name: 'Finish project', complete: false, id: 1 },
        { name: 'Read Chapter 4', complete: true, id: 2 },
        { name: 'Turn in Homework', complete: false, id: 3 },
      ]
    }
  },
  computed: {
    inProgress () {
      return this.assignments.filter(assignment => !assignment.complete)
    },

    completed () {
      return this.assignments.filter(assignment => assignment.complete)
    }
  }
}