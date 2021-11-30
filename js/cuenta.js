const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

    const dni = $("#dni").val();
    const password = $("#password").val();

    if(dni === "39910558" && password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta!!',
            timer: 1500
        })
    } else if (dni === "39910558" && password === "francobalsamo") {
		
		formulario.reset();	
	}
    
});