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
	      	<table class="user-tbl">
	      		<thead></thead>
	      		<tbody>
	      			<tr>
	      				<td>Username</td>
	      				<td><strong>{{ user.username }}</strong></td>
	      			</tr>
	      			<tr>
	      				<td>Email</td>
	      				<td><a :href="'mailto:' + user.email">{{ user.email }}</a></td>
	      			</tr>
	      			<tr>
	      				<td>Street Address</td>
	      				<td v-if="user.address"><span v-if="user.address.suite">{{ user.address.suite }},</span><span v-if="user.address.street">{{ user.address.street }}</span></td>
	      			</tr>
	      			<tr>
	      				<td>City</td>
	      				<td v-if="user.address">{{ user.address.city }}</td>
	      			</tr>
	      			<tr>
	      				<td>Zipcode</td>
	      				<td v-if="user.address">{{ user.address.zipcode }}</td>
	      			</tr>
	      			<tr>
	      				<td>Phone</td>
	      				<td>{{ user.phone }}</td>
	      			</tr>
	      			<tr>
	      				<td>Website</td>
	      				<td><a :href="'http://' + user.website" target="_blank">{{ user.website }}</a></td>
	      			</tr>
	      			<tr>
	      				<td>Company</td>
	      				<td v-if="user.company">{{ user.company.name }}</td>
	      			</tr>
	      		</tbody>
	      	</table>
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
.user-tbl tr td{
	padding:10px;
}
.user-tbl tr td:first-child{
	padding-right:30px;
}
</style>
