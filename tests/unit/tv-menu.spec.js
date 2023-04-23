import { shallowMount } from "@vue/test-utils";
import TvMenu from "@/component/TvMenu.vue";

describe("TvMenu", () => {
  const menus = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Blog" },
  ];

  it("should matches snapshot", () => {
    const wrapper = shallowMount(TvMenu, {
      propsData: {
        menus,
        imageMenu: "image.jpg",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('emits the "clickImage" event when the image is clicked', () => {
    const wrapper = shallowMount(TvMenu, {
      propsData: {
        menus,
        imageMenu: "image.jpg",
      },
    });
    wrapper.find(".tv-menu-image img").trigger("click");
    expect(wrapper.emitted("clickImage")).toBeTruthy();
  });

  it('emits the "clickMenu" event with the corresponding option when one of the menu options is clicked', () => {
    const wrapper = shallowMount(TvMenu, {
      propsData: {
        menus,
        imageMenu: "image.jpg",
      },
    });
    wrapper.find(".tv-menu-item:first-of-type").trigger("click");
    expect(wrapper.emitted("clickMenu")).toBeTruthy();
    expect(wrapper.emitted("clickMenu")[0][0]).toEqual(menus[0]);
  });

  it('emits the "searchMenu" event when a search is performed', () => {
    const wrapper = shallowMount(TvMenu);
    const searchBox = wrapper.findComponent({ name: "TvSearch" });

    searchBox.vm.$emit("search", "blogs");

    expect(wrapper.emitted("searchMenu")).toBeTruthy();
    expect(wrapper.emitted("searchMenu")[0]).toEqual(["blogs"]);
  });
});
