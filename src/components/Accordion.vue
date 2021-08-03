<template>
	<div :class="'accordion ' + [active ? 'active' : '']">
		<div class="acordion-title" v-on:click="toggle">
			{{ name }}
		</div>
		<div class="accordion-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Accordion',
  components: {},
  props: {
    name: String
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  },
  data() {
    return {
      active: false
    }
  }
}
</script>
<style scoped>
.accordion {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.accordion-header {
    cursor: pointer;
}

.accordion-body   {
    padding: 0;
    max-height: 10em;
    overflow: hidden;
    transition: 0.3s ease all;
}

.accordion-active .accordion-body {
    max-height: 0;
}

.accordion-content {
    padding: 20px;
}
</style>