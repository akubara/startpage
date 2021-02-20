export default function toast(store) {
  store.on('@init', () => ({
    toastIsShow: false,
  }));

  store.on('toast/show', () => ({ toastIsShow: true }));
  store.on('toast/hide', () => ({ toastIsShow: false }));
}
