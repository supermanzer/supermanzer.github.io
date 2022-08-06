<template>
  <p :class="classString">
    <slot name="default"></slot>
  </p>
</template>

<script>
export default {
    props: {
        hClass: {type: String, required: false, default: 'text-h3'},
    },
    computed: {
        classString() {
            return `${this.hClass} gb-header`
        }
    }
}
</script>

<style>

</style>