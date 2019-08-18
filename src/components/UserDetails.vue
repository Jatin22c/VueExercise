<template>
	<!-- Modal -->
	<div class="modal fade" id="userDetails" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">{{ user.name }}</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        <p>Username: {{ user.username }}</p>
	        <p>Email:  {{ user.email }}</p>
	        <p v-if="user.address">Address:  {{ user.address.city }}</p>
	        <p>Phone:  {{ user.phone }}</p>
	        <p>Website:  {{ user.website }}</p>
	        <p v-if="user.company">Company:  {{ user.company.name }}</p>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>


export default {
  data: function(){
  	return{
		user:[]
  	}
  },
  components: {
  },
  created() {
    Event.$on('modalData', (row) => {
      this.user = row;
    })
  }
}
</script>

<style scoped>

</style>
