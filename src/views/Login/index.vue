<template>
  <form @submit.prevent="doLogin()" class="form-login">
    <div class="card">
      <div class="card-header text-center">
        <h1 class="mb-0">Expenses</h1>
      </div>
      <div class="card-body">
        <div class="form-group mb-3">
          <input
            required
            type="email"
            v-model="email"
            class="form-control"
            placeholder="E-mail"
          />
        </div>
        <div class="form-group mb-3">
          <input
            required
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Senha"
          />
        </div>
        <button class="btn btn-primary w-100 mb-3" :disabled="loading">
          <template v-if="loading">
            Entrando...
            <i class="fa fa-spinner fa-spin"></i>
          </template>
          <template v-else>
            Entrar
            <i class="fa fa-sign-in-alt"></i>
          </template>
        </button>
        Não tem conta?
        <router-link to="/register" class="link mt-4"
          >Clique aqui para Registrar</router-link
        >
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      email: '',
      password: ''
    }
  },
  components: {},
  methods: {
    async doLogin () {
      const { email, password } = this

      try {
        this.loading = true
        const res = await this.$firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
        window.uid = res.user.uid

        this.$router.push({ name: 'Home' })
        this.$root.$emit('Notification::show', {
          type: 'success',
          message: 'Logado com sucesso!',
          timeout: 1500
        })
      } catch (e) {
        let message = ''
        switch (e.code) {
          case 'auth/user-not-found':
            message = 'Não possivel localizar o usuario!'
            break
          case 'auth/wrong-password':
            message = 'Senha inválida!'
            break
          default:
            message = 'Não foi possivel fazer o login!'
        }
        this.$root.$emit('Notification::show', {
          type: 'danger',
          message: message,
          timeout: 2500
        })
      }

      this.loading = false
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (window.uid) {
        vm.$router.push({ name: 'Home' })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.form-login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 18pt;
  }
  .card {
    width: 30%;
    color: var(--darker);
  }
}
.link {
  color: var(--featured);
  text-decoration: none;
  &:hover {
    color: var(--featured-dark);
    text-decoration: underline;
  }
}
</style>
