<template>
  <div class="tv-menu-container tv-m-auto">
    <div class="tv-menu-image tv-cursor-pointer">
      <img :src="imageMenu" alt="Logo" @click="handleClickImage" />
    </div>
    <div class="tv-menu-items">
      <ul v-for="menu in menus" :key="menu.id">
        <li
          class="tv-menu-item tv-cursor-pointer"
          @click="handleClickMenu(menu)"
        >
          {{ menu.title }}
        </li>
      </ul>
      <tv-search
        :placeholder="placeholder"
        :titleButton="titleButton"
        @search="handleSearch"
      />
    </div>
  </div>
</template>

<script>
import TvSearch from "todovue-search";
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
    const handleClickImage = () => {
      emit("clickImage");
    };

    const handleClickMenu = (menu) => {
      emit("clickMenu", menu);
    };

    const handleSearch = (search) => {
      emit("searchMenu", search);
    };

    return {
      handleClickImage,
      handleClickMenu,
      handleSearch,
    };
  },
  emits: ["clickImage", "clickMenu", "searchMenu"],
};
</script>

<style></style>
