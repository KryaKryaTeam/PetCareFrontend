import { describe, it, expect, beforeEach } from "vitest"
import { useBackground } from "../useBackground"
import { mount } from '@vue/test-utils'
import { defineComponent } from "vue"


const backgroundUrl = "/images/BackgroundAuth.svg"
const testComponent = defineComponent({
  setup(){
    useBackground(backgroundUrl)
  },
  template: `
  <div></div>
  `
})

describe("useBackground tests", () => {
  const wrapper = mount(testComponent)

  it("set background img", async () => {
    expect(document.documentElement.style.getPropertyValue("--background-image")).toBe(`url('${backgroundUrl}')`)
  })
  it("on unmound remove background img", async() => {
    wrapper.unmount()
    expect(document.documentElement.style.getPropertyValue("--background-image")).toBe("none")
  })
})
