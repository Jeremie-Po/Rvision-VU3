import AssignmentList from './AssignmentList.js'

export default {
  components: {
    AssignmentList
  },
  template: `
        <section class="space-y-6">
            <assignment-list title="In Progresse Component" :assignments="filters.inProgress"></assignment-list>           
            <assignment-list title="In completed Component" :assignments="filters.completed"></assignment-list>           
        </section>
        
        <form>
            <div class="border border-grey-600 rounded-xl text-black bg-white mt-6 p-2">
              <input placeholder="New assignment">
              <button type="submit" class="border-l">Add</button>
            </div>
        </form>
`,

  data () {
    return {
      assignments: [
        { name: 'Finish project', complete: false, id: 1 },
        { name: 'Read Chapter 4', complete: false, id: 2 },
        { name: 'Turn in Homework', complete: false, id: 3 },
      ]
    }
  },
  computed: {
    filters () {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete)
      }
    }
  }
}