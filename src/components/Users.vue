<template>
	<div>
		<input type="text" class="search-box" v-model="search" placeholder="Search Users">
		<div class="card-block">
			<div class="card" v-for="user in searchUsers" style="width: 18rem;">
			  <div class="card-body">
			    <h5 class="card-title">{{ user.name }}</h5>
			    <h6 class="card-subtitle mb-2 text-muted">{{ user.username }}</h6>
			    <p class="card-text">Email: {{ user.email }}</p>
			    <a href="#userDetails" class="btn btn-primary btn-details" data-toggle="modal" @click.prevent="toggleModal(user)">View User Details</a>
			    <a href="#viewPosts" class="btn btn-success btn-post" data-toggle="modal" @click.prevent="toggleModal(user)">View Posts</a>
			  </div>
			</div>
		</div>
	</div>
</template>

<script>



export default {
  data: function() {
  	return {
  		users: [],
  		search: ''
  	}
  },
  components: {
  },
  methods: {
	toggleModal(row){
		Event.$emit('modalData',row);
	}
  },
  created: function(){
  	this.$http.get('https://jsonplaceholder.typicode.com/users').then(response => {
  		this.users = response.body;
  	})
  },
  computed: {
  	searchUsers: function(){
	  	return this.users.filter((user) => {
	  		return user.name.toLowerCase().match(this.search.toLowerCase());
	  	})
  	}
  }
}
</script>

<style scoped>
.card-block{
	width:100%;
	margin:auto;
	text-align:center;
}
.card{
	display:inline-block;
	width:30%;
	min-width:300px;
	margin:10px;
	text-align:left;
}
.btn-details{
	margin-right:10px;
}
.search-box{
	width:50%;
	margin:0 auto;
	display:block;
	text-align:center;
	padding:5px;
	border-radius:5px;
	outline:0;
}
</style>
