function submitForm() {
    var name = $('input[name="name"]').val();
    var email = $('input[name="email"]').val();
    var number = $('input[name="number"]').val();
    var message = $('textarea[name="message"]').val();

    $.ajax({
        url: "http://janeto.us.to:7752/api/contact",
        method: "POST",
        data: {
            name: name,
            email: email,
            number:number,
            message: message
        },
        success: function(response) {
            console.log(response);
            window.alert("Success");
        },
        error: function(error) {
            console.log(error);
            window.alert("Fail");
        }
    })
}

function getData() {
    $.ajax({
        url: "https://api.myjson.com/bins/qaa9b",
        method: "GET",
        success: function(response) {
            var html = "";
            html += "<p>Name: " + response.name + "</p>";
            html += "<p>Email: " + response.email + "</p>";
            html += "<p>Message: " + response.message + "</p>";
            $('#result').append(html);
            console.log(response);
        },
        error: function(error) {
            window.alert('Error');
            console.log(error);
        }
    })
}