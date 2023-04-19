import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { title, content, ok, cancel,closeOnClickOverlay,onClickOverlay} = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          closeOnClickOverlay,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              console.log("销毁");
              close();
            }
          },
          ok,
          cancel
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};