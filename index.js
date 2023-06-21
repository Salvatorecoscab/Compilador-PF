document.getElementById('VerificaCodigo').addEventListener('submit', function(e) {
    e.preventDefault();  // prevent the form from submitting normally

    var formData = new FormData(e.target);
    
    // Get the first name from the form data
    var codigo = formData.get('codigo');
    console.log(codigo)
    // Check if first name is "Salvador"
    if (codigo === 'Salvador') {    
        //write in the text label the message
        document.getElementById('resultlabel').innerHTML = 'Codigo Correcto';
    }else 
    {
        document.getElementById('resultlabel').innerHTML = 'Codigo Incorrecto';
    }

    // Clear the form
    document.getElementById('VerificaCodigo').reset();


});
