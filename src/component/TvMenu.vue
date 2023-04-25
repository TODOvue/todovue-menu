<template>
  <header class="tv-menu-container">
    <nav class="tv-menu-image tv-cursor-pointer">
      <img :src="imageMenu" alt="Logo" @click="handleClickImage" />
    </nav>
    <section class="tv-menu-items">
      <ul v-for="menu in menus" :key="menu.id">
        <li
          class="tv-menu-item tv-cursor-pointer"
          @click="handleClickMenu(menu)"
        >
          {{ menu.title }}
        </li>
      </ul>
      <i
        class="tv-icon tv-icon-position-right tv-menu-icon tv-cursor-pointer"
        @click="manageViewMenu(true)"
      ></i>
      <tv-search
        :placeholder="placeholder"
        :titleButton="titleButton"
        @search="handleSearch"
      />
      <div class="tv-menu-items-mobile" v-if="showMenu">
        <i
          class="tv-icon tv-menu-icon-cancel tv-cursor-pointer"
          @click="manageViewMenu(false)"
        ></i>
        <ul v-for="menu in menus" :key="menu.id">
          <li
            class="tv-menu-item-mobile tv-cursor-pointer"
            @click="handleClickMenu(menu)"
          >
            {{ menu.title }}
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
import TvSearch from "todovue-search";
import { ref } from "vue";
export default {
  name: "TvMenu",
  components: {
    TvSearch,
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    titleButton: {
      type: String,
      default: "",
    },
    menus: {
      type: Array,
      default: () => [],
    },
    imageMenu: {
      type: String,
      default: "",
    },
  },
  setup(_, { emit }) {
    const showMenu = ref(false);

    const handleClickImage = () => {
      emit("clickImage");
    };

    const handleClickMenu = (menu) => {
      if (showMenu.value) {
        manageViewMenu(false);
      }
      emit("clickMenu", menu);
    };

    const handleSearch = (search) => {
      emit("searchMenu", search);
    };

    const manageViewMenu = (value) => {
      showMenu.value = value;
    };

    return {
      showMenu,
      handleClickImage,
      handleClickMenu,
      handleSearch,
      manageViewMenu,
    };
  },
  emits: ["clickImage", "clickMenu", "searchMenu"],
};
</script>

<style></style>
