import Ember from 'ember';

export default Ember.Controller.extend({
	validationErrorMsg: '',    
	idhref: function(){
		return '#'+this.get('id');
	}.property('id'),
	actions: {
		updateServerModel: function(){
			var user = this.get('content');
			var t = this;
			user.get('profile').get('content').save();
			user.save().then( function(response){
				//Bootstrap.GNM.push('Saved', 'Saved '+user.get('username'), 'success');
			},function(response){
				var errMsg = '';
				if(response.responseText.search('email')!==-1){
					errMsg = "Someone else is using that email";
				}
				else if(response.responseText.search('username')!==-1){
					errMsg = "Someone else is using that username, please select another";
				}
				else{
					errMsg = "An unknown error occured. Please try again";
				}

				//Bootstrap.GNM.push('Error saving '+user.get('username'), errMsg, 'danger');
				t.set('validationErrorMsg', errMsg);
				
			});
		},
		delete: function(){
			var user = this.get('content');
			var t = this;
			user.deleteRecord();
			user.save().then(function(){/**never gets called**/}, 
			function(response){//response callback
				console.log('Response is '+ JSON.stringify(response));
				if(response.status === 200){
					//Bootstrap.GNM.push('Item Deleted', 'item removed from database', 'success');
				}
				else {//error handler (response.status == 500)
					console.log('Fail! Response is '+ JSON.stringify(response));
					//Bootstrap.GNM.push('Error: Failed to delete item', JSON.stringify(response), 'warning');
					t.transitionToRoute('admin.users');
				}
			});
			//Bootstrap.GNM.push('Item Deleted', 'item removed from database', 'success');
		},
		download: function(){
			console.log('request to download users' +this.get('id'));
			document.getElementById("download-iframe").src = '/api/download/users/'+this.get('id');
		}
	}
});
