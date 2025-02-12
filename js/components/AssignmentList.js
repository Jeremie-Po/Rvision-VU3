export default {
  template: `
             <section v-show="assignments.length">
                <h2 class="font-bold">{{ title }}</h2>
                <ul>
                    <li :key="assignment.id" v-for="assignment in assignments">
                       <label>
                            {{ assignment.name }} <input type="checkbox" v-model="assignment.complete">
                        </label>
                    </li>
                </ul>
            </section>
  `,

  props: {
    title: {
      type: String,
    },
    assignments: {
      type: Array,
    }
  }
}