<template>
  <nav class="nav flex-column justify-content-between">
    <div>
      <router-link
        exact
        class="nav-link"
        exact-active-class="active"
        :to="{ name: router.name }"
        v-for="(router, index) in routerLinks"
        :key="index"
      >
        <i class="fa" :class="`fa-${router.meta.icon}`"></i>
        {{ router.meta.title }}
      </router-link>
      <hr>
      <layout-new-expense />
    </div>
    <layout-logout />
  </nav>
</template>

<script>
import LayoutLogout from './LayoutLogout'
import LayoutNewExpense from './LayoutNewExpense'
export default {
  components: {
    LayoutLogout,
    LayoutNewExpense
  },
  computed: {
    routerLinks () {
      return this.$router.options.routes.filter(r => r.name !== 'Login')
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  box-sizing: border-box;
  margin-left: -15px;
  width: calc(100% + 27px);
  height: calc(100vh - 50px);
  .nav-link {
    color: var(--white);
    transition: 0.4s;
    &.active {
      color: var(--featured);
      background-color: var(--transparent);
    }
    &:hover {
      color: var(--dark);
      background-color: var(--featured);
    }
  }
}
</style>
