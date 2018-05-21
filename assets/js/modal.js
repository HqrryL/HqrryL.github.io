$(".backdrop").on("click", function () {
	$("#toggled-modal").animate({ opacity: 0 }, {
		step: function (now, fx) {
			$(this).css("transform", "scale("+now+") translateZ(0px)");

			setTimeout(function () { 
				$(".modal-container").empty();
			}, 200);
		}, duration: 300
	});
});

$("#toggled-modal").animate({ opacity: 1 }, {
	step: function (now, fx) {
		$(this).css("transform", "scale("+now+") translateZ(0px)");
	}, duration: 300
} );
