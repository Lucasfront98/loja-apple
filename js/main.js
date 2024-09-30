$(document).ready(function(){
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            
        },
        messages: {
        nome: 'Por favor insira o seu nome!',
        email: 'Por favor insira o seu e-mail!',
        telefone: 'Por favor insira o seu telefone!',
        },
        submitHandler: function(form) {
        console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            
        }
    
    })
    });