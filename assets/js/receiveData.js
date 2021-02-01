'use strict';

const printData = car => {

    const $image = $(`<img src="${car.image}" class="img-fluid"></img>`)
    const $make = $(`<p class="make">Marca: ${car.make}</p>`)
    const $model = $(`<p class="model">Modelo: ${car.model}</p>`)
    const $id = $(`<p class="identif">Id: ${car.id}</p>`)
    const $km = $(`<p class="km">Kilometros Recorridos: ${car.km}</p>`)
    const $dateIn = $(`<p class="dateIn">Fecha Programada: ${car.estimateDate}</p>`)
    const $descr = $(`<p class="descr">Descripción: ${car.description}</p>`)
    const $dateOut = $(`<p class="dateOut">Fecha estimada de entrega: ${car.estimateDeliveryDate}</p>`)
    const $personName = $(`<p class="personName">Encargado: ${car.personName}</p>`)
    const $articleCont = $(`<div class="col-md-12 text-center artCont"></div>`)
    const $imgCont = $(`<div class="col-md-6 imgCont"></div>`)
    const $rowCont = $(`<div class="row justify-content-center"></div>`)
    const $colCont = $(`<div class="col-md-5 item"></div>`)
    const $container = $("#articleCont")
    const $buttonUpDate = $('<a>Actualizar fecha de entrega<a>')

    $buttonUpDate.on("click",function(){
        const $form = $(`<form></form>`)
        const $namePerson = $(`<label>Ingrese al encargado</label>`)
        const $person = $(`<input type="text" class="form-control" id="marca" name="make" required>`)
        const $date = $(`<label>Ingrese la fecha</label>`)
        const $dateDelivery = $(`<input type="date" class="form-control" name="estimateDeliveryDate" id="estimada">`)
        
        $form.append($namePerson,$person,$date,$dateDelivery)
        $articleCont.append($form)
    })
    n 
    $articleCont.append($make, $model, $id, $km, $dateIn, $descr, $dateOut, $personName, $buttonUpDate)
    $imgCont.append($image)
    $rowCont.append($imgCont, $articleCont)
    $colCont.append($rowCont)

    $container.append($colCont)
}

$.ajax({
    url: "https://ecb-server.arianaomi.vercel.app/cars",
    data: "",
    success: data => {
        data.dataCars.forEach(car => {
            printData(car)
        });

    }
})