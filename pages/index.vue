<template>
  <div>
    <LoginParts v-show="!logIn"></LoginParts>
    <router-link class="btn btn-light" to="/form" v-show="logIn">投稿画面</router-link>
    <br><br>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="message in message" :key="message.name">
        <div>{{ message.name }}</div>
        <div>{{ message.message }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logIn: false
    }
  },
  computed: {
    message () {
      return this.$store.state.chat.messages
    }
  },
  async mounted () {
    await this.$store.dispatch('chat/getMessages')
    this.$fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.logIn = true
      }
    })
  }
}
</script>
