// first add an event listener  and retrieve the user's input
document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    document.getElementById('name').value;
    document.getElementById('email').value;
    document.getElementById('phone').value;
    document.getElementById('eventType').value;
    document.getElementById('date').value;
    document.getElementById('guests').value;
    document.getElementById('message').value;

    // Then store the user"s input iuseing the format js understands,that is the use of JSON.stringify
    const usersData = { name , email , phone , eventType , date , guests , message };
    localStorage.setItem("usersData", JSON.stringify(usersData));

    // finally deploy the confirmation message in a new window
    window.location.href = "approval.html";
}

);