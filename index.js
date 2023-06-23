document.getElementById('VerificaCodigo').addEventListener('submit', function(e) {
    e.preventDefault();  // prevent the form from submitting normally

    var formData = new FormData(e.target);
    
    // Get the first name from the form data
    var codigo = formData.get('codigo');
    console.log(codigo)


    // Clear the form
    document.getElementById('VerificaCodigo').reset();


});
