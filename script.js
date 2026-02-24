function checkAnswer() {
	const input = document.getElementById("answer").value.toLowerCase();
	const correct = "szeretlek";

	if (input === correct) {
		window.location.href = "CHANGETHIS.html";
	} else {
		document.getElementById("error").innerText = "blud thought that was the word";
	}
}
