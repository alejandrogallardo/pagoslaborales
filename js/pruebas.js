/**
 * Para obtener los datos de los input en typescript
 * https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
 */
let meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let dias: number = 31;
let aY = new Date();
let iniYear: number = 1950; 
let actualYear = aY.getFullYear();
console.log(actualYear);

let diaI = document.getElementById('diaIni');
let mesI = document.getElementById('mesIni');
let yearI = document.getElementById('yearIni');
let diaF = document.getElementById('diaFin');
let mesF = document.getElementById('mesFin');
let yearF = document.getElementById('yearFin');

for (let i = 0; i < dias; i++) {

    let diaOpt = document.createElement('option')
    diaOpt.setAttribute('value', `${i+1}`)
    diaOpt.innerHTML = `${i+1}`
    diaI.appendChild(diaOpt)

}

for (let i = 0; i < meses.length; i++) {

    let mesOpt = document.createElement('option')
    mesOpt.setAttribute('value', `${i+1}`)
    mesOpt.innerHTML = meses[i]
    mesI.appendChild(mesOpt)

}

for (let i = iniYear; i <= actualYear; i++) {
   
    let yearOpt = document.createElement('option')
    yearOpt.setAttribute('value', `${i+1}`)
    yearOpt.innerHTML = `${i+1}`
    yearI.appendChild(yearOpt)

}

for (let i = 0; i < dias; i++) {

    let diaOpt = document.createElement('option')
    diaOpt.setAttribute('value', `${i+1}`)
    diaOpt.innerHTML = `${i+1}`
    diaF.appendChild(diaOpt)

}

for (let i = 0; i < meses.length; i++) {

    let mesOpt = document.createElement('option')
    mesOpt.setAttribute('value', `${i+1}`)
    mesOpt.innerHTML = meses[i]
    mesF.appendChild(mesOpt)

}

for (let i = iniYear; i <= actualYear; i++) {
   
    let yearOpt = document.createElement('option')
    yearOpt.setAttribute('value', `${i+1}`)
    yearOpt.innerHTML = `${i+1}`
    yearF.appendChild(yearOpt)

}

/**
 * Lo de arriba ya no es necesario
 * solo fueron unas pruebas
 */








 // Datos Iniciales
    // let diaI = (<HTMLInputElement>document.getElementById('diaIni')).value;
    // let mesI = (<HTMLInputElement>document.getElementById('mesIni')).value;
    // let yearI = (<HTMLInputElement>document.getElementById('yearIni')).value;
    
    // Datos Finales
    // let diaF = (<HTMLInputElement>document.getElementById('diaFin')).value;
    // let mesF = (<HTMLInputElement>document.getElementById('mesFin')).value;
    // let yearF = (<HTMLInputElement>document.getElementById('yearFin')).value;
    
    // const nacimiento = new Date("year", "month - 1", "day");
    let iniciLaboral: any = new Date(parseInt(yearI), parseInt(mesI), parseInt(diaI));
    console.log(iniciLaboral);
    let finLaboral: any = new Date(parseInt(yearF), parseInt(mesF), parseInt(diaF));
    let calcuAno = finLaboral - iniciLaboral;
    calcuAno = calcuAno / 1000
    calcuAno = calcuAno / 60
    calcuAno = calcuAno / 60
    calcuAno = calcuAno / 24
    calcuAno = calcuAno / 365
    console.log(calcuAno);
    let finalAno:string = calcuAno.toString()
    
    let mesesT: string = finalAno.slice(2,6);
    TYears = parseInt(finalAno.slice(0,2))
    
     

    let mesesTemp: number = parseFloat(mesesT) / 0.083
    mesesT = mesesTemp.toString();
    mesesT = mesesT.slice(0,2);

    console.log( parseFloat(mesesT) / 0.083 );

    // 03122003 - 30112017
    //441590400000



    let sueldo = (<HTMLInputElement>document.getElementById('sueldo')).value;
    console.log(sueldo);
    console.log(TYears);
    
    InYears = parseFloat(sueldo) * TYears;

    
   
    let resultado = document.getElementById('resultado')
    console.log(resultado);
    let parsial = parseFloat(sueldo)
    console.log(parsial);
    totalIndem = parseFloat(sueldo) + bono14 + aguinaldo;




    <hr>

            <div class="fechas margentop row">
                <div class="input-field col-md-6">
                    <h4 class="titulo4">Fecha Ingreso</h4>
                    <label for="">Día</label>
                    <input class="form-control" type="text" id="diaIni" placeholder="00">
                    <label for="">Mes</label>
                    <input class="form-control" type="text" id="mesIni" placeholder="00">
                    <label for="">Año</label>
                    <input class="form-control" type="text" id="yearIni" placeholder="0000">
                </div>
            
                <div class="input-field col-md-6">
                    <h4 class="titulo4">Fecha Salida</h4>
                    <label for="">Día</label>
                    <input class="form-control" type="text" id="diaFin" placeholder="00">
                    <label for="">Mes</label>
                    <input class="form-control" type="text" id="mesFin" placeholder="00">
                    <label for="">Año</label>
                    <input class="form-control" type="text" id="yearFin" placeholder="0000">
                </div>
            </div>

              <div class="row">
                  <div class="col-md-12">
                      <label for="">Sueldo Base</label>
                      <input class="form-control" type="text" placeholder="Sueldo Base" name="sueldo" id="sueldo">
                      <button onclick="calcular()">Eviar datos</button>
                  </div>
              </div>



/**
* Bono 14 con error
 */
              bono14 = TMonth * BonoTemp
        if(parseInt(monthF) <= 7 ){
            console.log('Mes menor o igual 7: ',TMonth);
            bono14 = (BonoTemp / 30) * parseInt(dayF)     
        }
        else if ( parseInt(monthF) > 7 ) {
            let TM = parseInt(monthF) - 7
            console.log('If menor a 7 y mayor a 25 dias', TM);
            bono14 = (BonoTemp * TM) + ((BonoTemp / 30) * parseInt(dayF))
        }
    }
    else{

        if(parseInt(monthF) < 7 && parseInt(dayF) > 25){
            // console.log('Cuano es menor a 7 y mayor a 25 dias');
            let bonoM = parseInt(monthF) + 6
            // console.log('Meses contabiliaos: ', bonoM);
            bono14 = BonoTemp * bonoM
        }
        else if(parseInt(monthF) < 7 ){
            // console.log('Cuando es menor a 7 y menor a 25 dias');
            let bonoM = parseInt(monthF) + 5
            let bonoDT = BonoTemp / 30
            let bonoD = bonoDT * parseInt(dayF)
            bono14 = (BonoTemp * bonoM) + bonoD
        }
        else if (parseInt(monthF) === 7 ){
            let bonoDT = BonoTemp / 30
            bono14 = bonoDT * parseInt(dayF)
        }
        else {
            // console.log('Soy mayor o igual a 7');
            let mmm = parseInt(monthF) - 7
            if(parseInt(dayF) > 25){
                mmm += 1
                bono14 = BonoTemp * mmm
                // console.log('Meses if interno: ', mmm);
                // console.log('bono if interno: ', bono14);
            }
            else {
                let bonoDT = BonoTemp / 30
                let bonoD = bonoDT * parseInt(dayF)
                bono14 = (BonoTemp * mmm) + bonoD
                // console.log('Meses: ', mmm);
            }
        }

    }





    /**
    * Calculo aguinaldo
     */

    let AgTemp = sueldo / 12
    // console.log('Aguinaldo promedio: ', AgTemp);
    if(parseInt(dayF) > 25){
        aguinaldo = AgTemp * (parseInt(monthF) + 1)
    }
    else {
        let diaSueldo = AgTemp / 30
        // console.log('Sueldo Diario', diaSueldo);
        let diaSueldoTemp = diaSueldo * parseInt(dayF)
        // console.log('Dias de suedto: ', diaSueldoTemp);
        aguinaldo = AgTemp + diaSueldoTemp
    }
    
    