'use strict';

const printData = car => {
    let id = `${car.id}`
    const $image = $(`<img src="${car.image}" class="img-fluidimg">`)
    const $make = $(`<p class="makeMarca">${car.make}</p>`)
    const $model = $(`<p class="modelModelo"> ${car.model}</p>`)
    const $id = $(`<p class="identif">Id ${car.id}</p>`)
    const $km = $(`<p class="km">#Kilometros Recorridos ${car.km}</p>`)
    const $dateIn = $(`<p class="dateInFecha"> Programada ${car.estimateDate}</p>`)
    const $descr = $(`<p class="descrDescripción"> ${car.description}</p>`)
    const $dateOut = $(`<p class="dateOut">Fecha estimada de entrega ${car.estimateDeliveryDate}</p>`)
    const $personName = $(`<p class="personName">Encargado ${car.personName}</p>`)
    const $articleCont = $(`<div class="col-md-12 text-center artCont" id="${id}"></div>`)
    const $imgCont = $(`<div class="col-md-6 imgCont"></div>`)
    const $rowCont = $(`<div class="row justify-content-center"></div>`)
    const $colCont = $(`<div class="col-md-5 item"></div>`)
    const $container = $("#articleCont")
    const $buttonUpDate = $(`<a id="buttonUpDate${id}" class="btn btn-primary">Actualizar Servicio</a>`)

    //Evento para la actualización de datos
    $buttonUpDate.click(function(){
        updateData(car,id)
    })
    
    $articleCont.append($make, $model, $id, $km, $dateIn, $descr, $dateOut, $personName, $buttonUpDate)
    $imgCont.append($image)
    $rowCont.append($imgCont, $articleCont)
    $colCont.append($rowCont)
    $container.append($colCont)
}

//función para actualizar los datos
const updateData = (car, id) => {
    $( `<a id="buttonUpDate${id}"></a>`).replaceAll( `#buttonUpDate${id}` );
    const $article = $(`#${id}`)
    const $form = $(`<form id="update"></form>`)
    const $namePerson = $(`<label>Ingrese al encargado</label>`)
    const $person = $(`<input type="text" class="form-control">`)
    const $date = $(`<label>Ingrese la fecha<label>`)
    const $dateDelivery = $(`<input type="date" class="form-control" name="estimateDeliveryDate" id="delivery">`)
    const $buttonAdd = $(`<a class="btn btn-primary">Agregar Servicio</a>`)
    const $buttonQuit = $(`<a class="btn btn-primary">Quitar Servicio</a>`)
    const $buttonCancel= $(`<a class="btn btn-primary">Cancelar</a>`)

    $form.append($namePerson, $person, $date, $dateDelivery, $buttonAdd,$buttonQuit,$buttonCancel)
    $article.append($form)

    //Evento para cancelar la actualización
    $buttonCancel.click(function(){
        $( `<a id="buttonUpDate${id}" class="btn btn-primary">Actualizar Servicio</a>` ).replaceAll( `#buttonUpDate${id}`);
        $(``).replaceAll("#update")
    })

    //$buttonAdd.click(function(){
        
    //})

}

$.ajax({
    url: "https://ecb-server.arianaomi.vercel.app/cars",
    data: "",
    success: data => {
        let cont = 0
        data.dataCars.forEach(car => {

            printData(car, cont)
            cont++
        });

    }
})