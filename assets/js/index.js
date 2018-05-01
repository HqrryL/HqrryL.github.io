$("body").ready(function () {
	jQuery("#modal").click(function (e) {
		e.preventDefault();

		$(".modal-container").load("modal.html", function () {
			$("#modal-toggle").modal("show");
		});
	});
});

var quotations = [
	{ quote: "Imagination is more important than knowledge", spoken_by: "Albert Einstein" },
	{ quote: "If music be the food of love, play on", spoken_by: "William Shakespeare" },
	{ quote: "The way to get started is to quit talking and begin doing", spoken_by: "Walt Disney" },
	{ quote: "Obstacles are those frightful things you see when you take your eyes off the goal", spoken_by: "Henry Ford" },
	{ quote: "I skate where the puck is going to be, not where it has been", spoken_by: "Wayne Gretzky" },
	{ quote: "When you come to a fork in the road, take it", spoken_by: "Yogi Berra" },
	{ quote: "We may affirm absolutely that nothing great in the world has been accomplished without passion", spoken_by: "Hegel" },
	{ quote: "The life which is unexamined is not worth living", spoken_by: "Socrates" },
	{ quote: "Live as if you were to die tomorrow. Learn as if you were to live forever", spoken_by: "M.K. Gandhi" },
	{ quote: "What you get by achieving your goals is not as important as what you become by achieving your goals", spoken_by: "Zig Ziglar" },
	{ quote: "Indeed", spoken_by: "GriefMoDz 2k15 ;)" },
	{ quote: "I've ran out of quotes to put here... 😞", spoken_by: "" }
]

var randomNum = Math.floor(Math.random() * quotations.length);

if (!Array.isArray(quotations[randomNum]["spoken_by"]) && !quotations[randomNum]["spoken_by"].length) {
	quotations[randomNum]["spoken_by"] = "Anonymous";
}

document.getElementById("quote").innerHTML = "“" + quotations[randomNum]["quote"] + "” &#8212 <i>" + quotations[randomNum]["spoken_by"] + "</i>";

quotations = quotations.splice(randomNum, 1);
