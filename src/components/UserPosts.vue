<template>
	<!-- Modal -->
	<div class="modal fade" id="viewPosts" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel"><span class="post-by">Posted by </span> <strong>{{ author }}</strong></h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">

	        <a class="btn btn-primary close-btn" @click="expandAll">
		      Close All
		    </a>
		    
		    <br />
		    <br />

		    <div class="columns is-multiline" v-for="post,index in posts">
		      <Accordion :title="post.title" :num="index + 1" @expand="expandAll">
		        <p class="post-body">{{ post.body | capitalize }}</p>
		      </Accordion>
		    </div>

	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>
import Accordion from './Accordion.vue'

export default {
  data: function(){
  	return{
		posts:[],
		author: ''
  	}
  },
  components: {
  	Accordion
  },
  methods: {
    expandAll() {
      Event.$emit("closeAll");
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  created() {
    Event.$on('modalData', (row) => {
    	this.author = row.name;
		this.$http.get('https://jsonplaceholder.typicode.com/posts?userId='+row.id).then(response => {
			this.posts = response.body;
		})
    })
  }
}

</script>

<style scoped>
.post-by{
	font-size:14px;
}
.post-body{
	padding:10px;
}
.close-btn{
	color:#fff !important;
	cursor:pointer;
}
</style>
