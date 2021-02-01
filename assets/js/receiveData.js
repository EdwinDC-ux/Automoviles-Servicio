'use strict';

const printData = car => {

    const $container = $("#articleCont"),
        $colCont = $(`<div class="col-md-5 item"></div>`),
        $rowCont = $(`<div class="row justify-content-center"></div>`),
        $imgCont = $(
            `<div class="col-md-6 imgCont">
            <img src="${car.image}" class="img-fluid"></img>
        </div>`
        ),
        $articleCont = $(
            `<div class="col-md-12 text-center artCont">
                <p class="make">Marca: ${car.make}</p>
                <p class="model">Modelo: ${car.model}</p>
                <p class="identif">Id: ${car.id}</p>
                <p class="km">Kilometros Recorridos: ${car.km}</p>
                <p class="dateIn">Fecha Programada: ${car.estimateDate}</p>
                <p class="descr">Descripción: ${car.description}</p>
                <p class="dateOut">Fecha estimada de entrega: ${car.estimateDeliveryDate}</p>
                <p class="personName">Encargado: ${car.personName}</p>
            </div>`
        ),
        $formCont = $(
            `<div class="col-md-12 formCont">
                <form class"row g-3">
                    <div class="col-md-12 elementFormCont">
                        <label for="estimada" class="form-label">Fecha estimada de entrega</label>
                        <input type="date" class="form-control" name="estimateDeliveryDate" id="estimada">
                    </div>
                    <div class="col-md-12 elementFormCont">
                        <label for="encargado" class="form-label">Persona encargada</label>
                        <input type="text" class="form-control" id="encargado" name="personName">
                    </div>
                    <div class="col-md-12 elementFormCont">
                        <input type="hidden" class="form-control" id="id" name="gId" value="${car._id}">
                    </div>
                    <div class="col-md-12 hidden text-center">
                        <button class="btn btn-primary" type="submit" id="agregar">Agregar servicio</button>
                        <button class="btn btn-primary" type="submit" id="borrar">Quitar servicio</button>
                    </div>
                </form>
            </div>`
        ),
        $button = $(
            `<div class="col-md-12 buttonCont text-center">
                <button class="btn btn-primary" type="submit" id="desplegar">Agregar un servicio</button>
            </div>`
        )

    $rowCont.append($imgCont, $articleCont, $formCont, $button)
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