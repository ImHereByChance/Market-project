var updateBtns = document.getElementsByClassName('update-cart')

for(let btn of updateBtns) {
	btn.addEventListener('click', function() {
		var productId = this.dataset.product
		var action =this.dataset.action
		console.log(productId, action)

		console.log('USER', user)
		if(user === 'AnonymousUser'){
			console.log('Not logged in')
		}else{
			updateUserOrder(productId, action)		
		}
	})
}

function updateUserOrder(productId, action) {
	console.log('User is logged in,sending data')

	// view, that in charge of processing data
	var url = 'update_item/'

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type':'application/json',
			'X-CSRFToken':csrftoken
		},
		body: JSON.stringify({'productId': productId, 'action': action})
	})

	.then((response) => response.json())

	.then((data) => location.reload())
}
