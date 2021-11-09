const app = Vue.createApp({
  data: ()　=> ({
    message: 'Hello Vue.js!',
    count: 99,
    user: {
      lastName: 'Yatani',
      firstName: 'Makio',
      prefecture: 'Tokyo'
    },
    colors: ['Red', 'Green', 'Blue']
  })
})
app.mount('#app')