// ~/plugins/notifier.js
// A plugin used to provide universal access to the triggers for our Snackbar

export default ({ app, store }, inject) => {
    const showSnack = obj => store.commit('snackbar/SHOW_MESSAGE', obj);
    inject('showSnack', showSnack)
    // inject('notifier', {
    //     showMessage({ text = '', color = '' }) {
    //         store.commit('snackbar/SHOW_MESSAGE', {text, color})
    //     }
    // })
}