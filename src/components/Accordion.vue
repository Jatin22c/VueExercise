<template>
	<div class="column is-half">
      <div class="card" :class="{ 'not-expanded': !this.expanded }">

        <header class="card-header" @click="toggleCardState">
          <p class="card-header-title">
            Post #{{ num }} <br> <strong>{{title | capitalize}}</strong>
          </p>
          <a class="card-header-icon">
            <span class="icon">
              <i class="fa fa-angle-up"></i>
            </span>
          </a>
        </header>

        <div class="card-content">
          <div class="content">
            <slot></slot>
          </div>
        </div>

      </div>
    </div>
</template>

<script>


export default {
  props: ["title", "expandAll", "num"],
  data() {
    return {
      "expanded": false
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    toggleCardState() {
      this.expanded = !this.expanded;
    },
    closeAll() {
      this.expanded = false;
    }
  },
  created() {
    Event.$on("closeAll", this.closeAll);
  }
}
</script>

<style scoped>
.card {
	 margin-bottom: 10px;
	 width: 100%;
}
 .card .card-header {
	 cursor: pointer;
}
 .card .card-header .icon {
	 transform: rotate(180deg);
	 transition: transform 150ms ease-out;
}
 .card .card-content {
	 transition: all 150ms ease;
}
 .card.not-expanded .card-header .icon {
	 transform: rotate(0deg);
}
 .card.not-expanded .card-content {
	 transform: scaleY(0);
	 transform-origin: top;
	 opacity: 0;
	 height: 0;
	 padding: 0;
}
</style>
