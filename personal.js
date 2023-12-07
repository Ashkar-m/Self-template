$().ready(function () {

	$("#contactForm").validate({

		rules: {
			fullName:{
                required: true,
				minlength: 3
            },
			Place:{
                required: true,
				minlength: 3
            },
			
			mailId: {
				required: true,
				email: true
			},
			mobileNo:{
                required:true,
                tel:true
            },
            messageContact:{
                required:true
            }
		},
		// In 'messages' user have to specify message as per rules
		messages: {
			
			fullName: {
				required: " Please enter your name",
				minlength:
					" Your name must consist of at least 3 characters"
			},
            Place: {
				required: " Please enter your place",
				minlength:
					" Your place must consist of at least 3 characters"
			},
            mailId:{
                required: " Please enter your mail id"
            },
            mobileNo:{
                required: " Please enter your mobile number"
            },
            messageContact:{
                required: " Please enter items list"
            },
			
		}
	});
});
