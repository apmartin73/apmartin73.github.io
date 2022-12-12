function validate() {
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username==""&& password=="")
	{
		alert("Sign in successful")
		return false;
	}

	else
	{
		alert("Sign in failed")
	}
	
const questions = document.querySelectorAll('.questions');

questions.forEach((question) => {
  question.addEventListener('click', (event) => {
    const answer = event.currentTarget.nextElementSibling;
    answer.classList.toggle('open');
  });
});
}