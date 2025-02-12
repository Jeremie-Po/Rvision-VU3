export default {
  template: `
            <section v-show="inProgress.length">
                <h2 class="font-bold">In progress</h2>
                <ul>
                    <li :key="assignment.id" v-for="assignment in inProgress">
                        <label>
                            {{ assignment.name }} <input type="checkbox" v-model="assignment.complete">
                        </label>
                    </li>
                </ul>
            </section>
            <section class="mt-10" v-show="completed.length">
                <h2 class="font-bold">Completed</h2>
                <ul>
                    <li :key="assignment.id" v-for="assignment in completed ">
                        <label>
                            {{ assignment.name }} <input type="checkbox" v-model="assignment.complete">
                        </label>
                    </li>
                </ul>
            </section>
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
    inProgress () {
      return this.assignments.filter(assignment => !assignment.complete)
    },

    completed () {
      return this.assignments.filter(assignment => assignment.complete)
    }
  }
}