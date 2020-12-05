// ~/plugins/notifier.js
// A plugin used to provide universal access to the triggers for our Snackbar

export default ({ store }, inject) => {
    const showSnack = obj => store.commit('snackbar/SHOW_MESSAGE', obj);
    inject('showSnack', showSnack)

}