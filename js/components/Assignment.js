export default {
  template: `
          <li>
             <label class="p-2 flex items-center justify-between">
                  {{ assignment.name }} <input type="checkbox" v-model="assignment.complete">
              </label>
          </li>
  `,
  props: {
    assignment: Array,
  }
}