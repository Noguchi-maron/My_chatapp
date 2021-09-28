<template>
  <div>
    <form>
      <div class="form-group">
        <label>ユーザー名</label>
        <input type="text" v-model="form.name" class="form-control" readonly>
      </div>
      <div class="form-group">
        <textarea v-model="form.message" class="form-control" rows="3" />
      </div>
      <button @click.prevent="submit" type="submit" class="btn btn-primary">投稿</button>
    </form>
    <div>
      <a @click="logout">ユーザーの切り替え</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: 'null',
        message: ''
      },
    }
  },
  mounted() {
    this.$fb.auth().onAuthStateChanged((user) => {
      if(user) {
        this.form.name = user.displayName
      }
    })
  },
  methods: {
    async submit () {
      this.$store.commit('chat/ADD_MESSAGE', this.form)
      this.$router.push('/')
    },
    async logout () {
      await this.$fb.auth().signOut()
      this.$router.push('/login')
    },
    async submit () {
      await this.$fb.firestore().collection('messages').add(this.form)
      this.$router.push('/')
    }
  }
}
</script>