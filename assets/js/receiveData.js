'use strict';

/*
    TODO: Crear la función donde se agregarán cada uno de los eventos on click, que se irán llamando cada que se haga un "printData".
*/

const printData = (car, id) => {

    const $container = $("#articleCont"),
        $colCont = $(`<div class="col-md-5 item" id="item${id}"></div>`),
        $rowCont = $(`<div class="row justify-content-center" id="itemRow${id}"></div>`),
        $imgCont = $(
            `<div class="col-md-6 imgCont" id="imgCont${id}">
            <img src="${car.image}" class="img-fluid" id="img${id}"></img>
        </div>`
        ),
        $articleCont = $(
            `<div class="col-md-12 text-center artCont" id="artCont${id}">
                <p class="make" id="make${id}"> Marca: ${car.make}</p>
                <p class="model" id="model${id}">Modelo: ${car.model}</p>
                <p class="identif" id="identif${id}">Id: ${car.id}</p>
                <p class="km" id="km${id}">Kilometros Recorridos: ${car.km}</p>
                <p class="dateIn" id="dateIn${id}">Fecha Programada: ${car.estimateDate}</p>
                <p class="descr" id="descr${id}">Descripción: ${car.description}</p>
                <p class="dateOut" id="dateOut${id}">Fecha estimada de entrega: ${car.estimateDeliveryDate}</p>
                <p class="personName" id="personName${id}">Encargado: ${car.personName}</p>
            </div>`
        ),
        $formCont = $(
            `<div class="col-md-12 formCont" id="formCont${id}">
                <form class"row g-3" id="form${id}">
                    <div class="col-md-12 elementFormCont">
                        <label for="estimada${id}" class="form-label">Fecha estimada de entrega</label>
                        <input type="date" class="form-control" name="estimateDeliveryDate" id="estimada${id}">
                    </div>
                    <div class="col-md-12 elementFormCont">
                        <label for="encargado${id}" class="form-label">Persona encargada</label>
                        <input type="text" class="form-control" id="encargado${id}" name="personName">
                    </div>
                    <div class="col-md-12 hidden">
                        <input type="hidden" class="form-control" id="id${id}" name="gId" value="${car._id}">
                    </div>
                    <div class="col-md-12 elementFormCont text-center">
                        <button class="btn btn-primary"  id="agregar${id}">Agregar servicio</button>
                        <button class="btn btn-primary"  id="borrar${id}">Quitar servicio</button>
                    </div>
                </form>
            </div>`
        ),
        $button = $(
            `<div class="col-md-12 buttonCont text-center" id= buttonCont${id}>
                <button class="btn btn-primary" id="desplegar${id}">Agregar un servicio</button>
            </div>`
        )

    $rowCont.append($imgCont, $articleCont, $formCont, $button)
    $colCont.append($rowCont)
    $container.append($colCont)
    /*
        TODO: Mandar a llamar función que se encargue de crear los eventos on click de los botones.
    */
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