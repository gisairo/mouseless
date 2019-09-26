import moment from 'moment'

export default {
  name: 'Run',

  props: {
    id: {
      type: String,
      default: null,
    },

    appId: {
      type: String,
      default: null,
    },

    groupId: {
      type: String,
      default: null,
    },

    createdAt: {
      type: String,
      default: null,
    },

    finishedAt: {
      type: String,
      default: null,
    },

    trainedIds: {
      type: Array,
      default: () => ([]),
    },

    learnedIds: {
      type: Array,
      default: () => ([]),
    },

    failedIds: {
      type: Array,
      default: () => ([]),
    },
  },

  methods: {
    update(data = {}) {
      this.$db.store.set(`runs.${this.id}`, {
        ...this._props,
        ...data,
      })
    },

    finish() {
      this.$db.store.set(`runs.${this.id}.finishedAt`, moment.utc().format())
    },
  },
}