export default {
  template: `
      <form @submit.prevent="add">
        <div class="border border-grey-600 rounded-xl text-black bg-white mt-6 p-2 flex">
          <input v-model='newAssignment' placeholder="New assignment" class="w-full">
          <button type="submit" class="border-l">Add</button>
        </div>
      </form>
`,
  data () {
    return {
      newAssignment: '',
    }
  },
  methods: {
    add () {
      this.$emit('add', this.newAssignment)
      this.newAssignment = ''
    }
  }
}