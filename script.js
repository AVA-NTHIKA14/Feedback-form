<script>
  document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("number").value.trim();
    const role = document.getElementById("dropdown").value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    const checkboxes = document.querySelectorAll('input[name="features"]:checked');

    let isValid = true;
    let errorMessage = "";

    if (name === "") {
      errorMessage = "Name is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMessage = "Please enter a valid email address.";
      isValid = false;
    } else if (isNaN(age) || age < 10 || age > 99) {
      errorMessage = "Age must be a number between 10 and 99.";
      isValid = false;
    } else if (role === "") {
      errorMessage = "Please select your role.";
      isValid = false;
    } else if (!satisfaction) {
      errorMessage = "Please rate the session.";
      isValid = false;
    }

    if (!isValid) {
      alert(errorMessage);
    } else {
      alert("Feedback submitted successfully!");
      event.target.submit();
    }
  });
</script>
