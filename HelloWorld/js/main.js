const app = Vue.createApp({
  data: ()　=> ({
    message: 'Hello Vue.js!'
  }),
  // ↑カンマの役割がよく分からない… 無いと初期値がセットされない
})
app.mount('#app')