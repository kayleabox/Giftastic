window.onload = function(){
		var topics = ["lochness monster", "mermaid", "unicorn", "pegasus"];

		var colors = ["#8000ff", "#ff0080", "#ff0000", "#ff8000", "#ffff00", "#80ff00", "#00ff00", "#00ff80", "#00ffff", "#0080ff", "#0000ff"];

		var colorIndex = 0;

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
        		topic + "&api_key=dc6zaTOxFJmzC&limit=6&rating=pg";
				$.ajax({
					url: queryUrl,
					method: "GET"})
				.done(function(response){
					var results = response.data;
					console.log(response);

					
					for(i=0; i<results.length; i++){
						if(colorIndex<colors.length-1){
           					colorIndex++;
           				}
           				else{
           					colorIndex = 0;
           				}

           				var gifDiv = $('<div class="item" style ="background-color:'+colors[colorIndex]+'" >');

            			var rating = results[i].rating;

            			var p = $("<p>").text("Rating: " + rating);

						gifDiv.prepend(p);
						gifDiv.prepend('<img src="'+ results[i].images.fixed_height.url +'">');

						$("#displayGiphs").prepend(gifDiv);
					}

				});

			})





	}