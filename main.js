const app = new Vue({
  name: "1erVue",
  el:"#app",
  data: {
    message: "Mon premier Vue.js !",
    age: 18,
    courses: ['fromage', 'pain', 'vin']
  },
  computed: {
    agePlus: function () {
      // this.bonjour("bonjour");
      return this.age + 20;
    }
  },
  methods: {
    bonjour: function (message) {
      alert(message);
    },
    rouge: function () {
      this.$refs.titre.style.backgroundColor = "red";
    }
  }
});
