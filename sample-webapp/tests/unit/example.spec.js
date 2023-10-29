import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const testmsg =
      "This application is Sample WebApp for CICD lesson.(version1.0.1) Response from REST API is...";

    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: "This application is Sample WebApp for CICD lesson.(version1.0.1) ",
      },
    });

    expect(wrapper.text()).toMatch(testmsg);
  });
});
