const app = Vue.createApp({
  data() {
    return {
      firstName: 'Godswill',
      lastName: 'Udoh',
      email: 'godswilludoh@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    };
  },
});

app.mount('#app');
