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
    const $articleCont = $(`<div class="col-md-12 text-left artCont"></div>`)
    const $imgCont = $(`<div class="col-md-12 text-center imgCont"></div>`)
    const $rowCont = $(`<div class="row"></div>`)
    const $colCont = $(`<div class="col-md-6 item"></div>`)
    const $container = $("#articleCont")

    $articleCont.append($make, $model, $id, $km, $dateIn, $descr, $dateOut, $personName)
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