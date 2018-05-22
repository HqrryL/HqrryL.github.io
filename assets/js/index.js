$("body").ready(function () {
	jQuery("#modal").click(function (e) {
		e.preventDefault();

		$(".modal-container").load("modal.html", function () {
			$("#modal-toggle").modal("show");
		});
	});
});

function randomWrapper() {
	var wrappers = [
		'https://78.media.tumblr.com/b5e7c0f07af337148f5f994dc117853a/tumblr_p69334HRQC1qze3hdo1_500.gif',
		'https://78.media.tumblr.com/f6395bca7a86e8efa6807271b64fb7f4/tumblr_p4jpsnKZQu1qze3hdo1_500.gif',
		'https://78.media.tumblr.com/2b0ec5e7d4763b0cc6aaba6982be379c/tumblr_inline_p46bi1Mmeq1qzc0ri_500.gif',
		'https://78.media.tumblr.com/5b20a365e700ac0df1f4a3efec1a21f9/tumblr_npkgxqV7PZ1qze3hdo1_r2_500.gif',
		'https://78.media.tumblr.com/09c6d90170076846bdb19de05e08a8ca/tumblr_ol3lldvM801qze3hdo1_r1_500.gif',
		'https://78.media.tumblr.com/dba8930c075bf505728df757c37b4216/tumblr_oh8awjk7lA1qze3hdo1_r1_500.gif',
		'https://78.media.tumblr.com/4c1313fb62311980f738c18fe9d27dac/tumblr_noa6mdd3yb1qze3hdo1_r2_500.gif',
		'https://78.media.tumblr.com/734ba6db5941cd39f175f61ccf33b980/tumblr_nmvrs6ubl71qze3hdo1_r1_500.gif',
		'https://78.media.tumblr.com/e85d3e398ccf035c0d5dd74a34d57eb9/tumblr_ngbasnF0bG1qze3hdo1_r3_500.gif',
		'https://78.media.tumblr.com/f7cd096f108d83c988169096361972fc/tumblr_otjfqziQrH1qze3hdo1_500.gif'
	];

	var randomNum = Math.floor(Math.random() * wrappers.length);
	var element = document.getElementsByClassName("wrapper");

	element[0].style["background"] = "url(" + wrappers[randomNum] + ") no-repeat center center fixed";
	element[0].style["background-size"] = "cover";

	wrappers = wrappers.splice(randomNum, 1);

	if (randomNum == 0) {
		element = document.getElementsByTagName("footer");

		element[0].style["color"] = "#c5c5c5";
		element[0].style["text-shadow"] = "none";
	}
}

function randomQuote() {
	var quotations = [
		{ quote: "Imagination is more important than knowledge", spoken_by: "Albert Einstein" },
		{ quote: "If music be the food of love, play on", spoken_by: "William Shakespeare" },
		{ quote: "The way to get started is to quit talking and begin doing", spoken_by: "Walt Disney" },
		{ quote: "Obstacles are those frightful things you see when you take your eyes off the goal", spoken_by: "Henry Ford" },
		{ quote: "I'm always amazed that people take what I say seriously. I don't even take what I am seriously", spoken_by: "David Bowie" },
		{ quote: "When you come to a fork in the road, take it", spoken_by: "Yogi Berra" },
		{ quote: "We may affirm absolutely that nothing great in the world has been accomplished without passion", spoken_by: "Hegel" },
		{ quote: "The life which is unexamined is not worth living", spoken_by: "Socrates" },
		{ quote: "Live as if you were to die tomorrow. Learn as if you were to live forever", spoken_by: "M.K. Gandhi" },
		{ quote: "I'm just a musical prostitute, my dear", spoken_by: "Freddy Mercury" },
		{ quote: "Indeed", spoken_by: "GriefMoDz <3" },
		{ quote: "Work until your bank account looks like a phone number", spoken_by: "Leonardo DiCaprio" },
		{ quote: "I've ran out of quotes to put here... 😞", spoken_by: "" }
	];

	var randomNum = Math.floor(Math.random() * quotations.length);

	if (!Array.isArray(quotations[randomNum]["spoken_by"]) && !quotations[randomNum]["spoken_by"].length) {
		quotations[randomNum]["spoken_by"] = "Anonymous";
	}

	document.getElementById("quote").innerHTML = "“" + quotations[randomNum]["quote"] + "” &#8212 <i>" + quotations[randomNum]["spoken_by"] + "</i>";

	quotations = quotations.splice(randomNum, 1);
}

document.addEventListener( "DOMContentLoaded", randomWrapper );
document.addEventListener( "DOMContentLoaded", randomQuote );
