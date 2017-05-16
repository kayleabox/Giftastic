window.onload = function(){
		var topics = ["lochness monster", "mermaid", "unicorn", "pegasus"];

		function renderButtons() {
	        $("#buttons").empty();
	        // YOUR CODE GOES HERE
	        for(i=0;i<topics.length;i++){
	          $("#buttons").prepend('<button data-name="'+ topics[i]+'" class="giphButton rainbow">'+topics[i]+ '</button>');
	        }
      	}

      // This function handles events where one button is clicked
      $("#addTopic").on("click", function() {

        // YOUR CODE GOES HERE
        event.preventDefault();
        
        var newTopic = $("#userTopic").val();
        if(newTopic){
          console.log(newTopic);
          topics.push(newTopic);
          //$("#movies-view").append("<button>"+ newMovie +"</button");
          $("#userTopic").val("");
        }

        renderButtons();
      });

    
      // Calling the renderButtons function to display the initial list of movies
      renderButtons();

			$(document).on("click", ".giphButton", function(){
				$("#displayGiphs").empty();
				var topic = $(this).attr('data-name');
				console.log(topic);
				var queryUrl = "http://api.giphy.com/v1/gifs/search?q=cute " +
        		topic + "&api_key=dc6zaTOxFJmzC&limit=3&rating=pg";
				$.ajax({
					url: queryUrl,
					method: "GET"})
				.done(function(response){
					var results = response.data;
					console.log(response);

					
					for(i=0; i<results.length; i++){
           				var gifDiv = $("<div class='item'>");

            			var rating = results[i].rating;

            			var p = $("<p>").text("Rating: " + rating);

						gifDiv.prepend(p);
						gifDiv.prepend('<img src="'+ results[i].images.fixed_height.url +'">');

						$("#displayGiphs").prepend(gifDiv);
					}

				});

			})





	}