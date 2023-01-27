<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../assets/logo.svg" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toogle">
        <span class="material-icons" @click="ToggleMenu"
          >keyboard_double_arrow_right</span
        >
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";

const is_expanded: Ref<boolean> = ref(false);
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
