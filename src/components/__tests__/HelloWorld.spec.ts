import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import TheSidebar from "../TheSidebar.vue";

describe("TheSidebar", () => {
  it("renders properly", () => {
    const wrapper = mount(TheSidebar, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
