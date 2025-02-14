export default {
  template: `
      <form @submit.prevent="add">
        <div class="border border-grey-600 rounded-xl text-black bg-white mt-6 p-2">
          <input v-model='newAssignment' placeholder="New assignment">
          <button type="submit" class="border-l">Add</button>
        </div>
      </form>
`,
  props: {
    assignments: Array,
  },
  data () {
    return {
      newAssignment: [],
    }
  },
  
  methods: {
    add () {
      this.assignments.push({
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1,
      })
      this.newAssignment = ''
    }
  }
}