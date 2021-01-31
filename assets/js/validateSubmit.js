// Example starter JavaScript for disabling form submissions if there are invalid fields
const sendData = () => {
    const $imagen = $("#imageURL")
    const $marca = $("#marca")
    const $subMarca = $("#submarca")
    const $id = $("#ident")
    const $kmActual = $("#kmAct")
    const $fechaProgr = $("#programada")
    const $descripcion = $("#descripcion")
    const $fechaEstim = $("#estimada")
    const $encargado = $("#encargado")
    const dataSend = {
        image: $imagen.val(),
        make: $marca.val(),
        model: $subMarca.val(),
        id: $id.val(),
        km: $kmActual.val(),
        estimateDate: $fechaProgr.val(),
        description: $descripcion.val(),
        estimateDeliveryDate: $fechaEstim.val(),
        personName: $encargado.val()
    }


    $.ajax({
        type: "POST",
        url: "https://ecb-server.arianaomi.vercel.app/cars",
        data: JSON.stringify(dataSend),
        error: e => {
            console.log(e)
        },
        success: () => {
            $imagen.val("")
            $marca.val("")
            $subMarca.val("")
            $id.val("")
            $kmActual.val("")
            $fechaProgr.val("")
            $descripcion.val("")
            $fechaEstim.val("")
            $encargado.val("")
        },
        dataType: "json",
        contentType: "application/json"
    })
}

(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    form.classList.add('was-validated')
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                    sendData()
                    $("form").removeClass("was-validated")
                }
            }, false)
        })
})()