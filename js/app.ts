let meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let days: number = 31;
let aY = new Date();
let actualYear = aY.getFullYear();
let iniYear: number = 1950; 

// Ingreso
let dayI = document.getElementById('Iday');
let monthI = document.getElementById('Imonth');
let yearI = document.getElementById('Iyear');
// Salida
let dayF = document.getElementById('Fday');
let monthF = document.getElementById('Fmonth');
let yearF = document.getElementById('Fyear');

/**
 * Ciclos Ingreso
 */
for (let i = 0; i < days; i++) {

    let diaOpt = document.createElement('option')
    diaOpt.setAttribute('value', `${i+1}`)
    diaOpt.innerHTML = `${i+1}`
    dayI.appendChild(diaOpt)

}
for (let i = 0; i < meses.length; i++) {

    let mesOpt = document.createElement('option')
    mesOpt.setAttribute('value', `${i+1}`)
    mesOpt.innerHTML = meses[i]
    monthI.appendChild(mesOpt)

}
for (let i = iniYear; i <= actualYear; i++) {
   
    let yearOpt = document.createElement('option')
    yearOpt.setAttribute('value', `${i+1}`)
    yearOpt.innerHTML = `${i+1}`
    yearI.appendChild(yearOpt)

}
/**
 * Ciclos Salida
 */
for (let i = 0; i < days; i++) {

    let diaOpt = document.createElement('option')
    diaOpt.setAttribute('value', `${i+1}`)
    diaOpt.innerHTML = `${i+1}`
    dayF.appendChild(diaOpt)

}
for (let i = 0; i < meses.length; i++) {

    let mesOpt = document.createElement('option')
    mesOpt.setAttribute('value', `${i+1}`)
    mesOpt.innerHTML = meses[i]
    monthF.appendChild(mesOpt)

}
for (let i = iniYear; i <= actualYear; i++) {
   
    let yearOpt = document.createElement('option')
    yearOpt.setAttribute('value', `${i+1}`)
    yearOpt.innerHTML = `${i+1}`
    yearF.appendChild(yearOpt)

}


// ====================================
//    Calculo de Indepnizacion
// ====================================
function getData(){
    let TYears: number;
    let TMonth: number;
    let TDays: number;
    let nVCP: number = 0; // Valor vacaciones pendientes

    let bono14: number;

    let sueldo: number;
    let aguinaldo: number;
    let vacaciones: number;
    let totalIndem: number;
 
    // Factor para calculo de vacaciones
    const factorV = 15 / 365;

    let TotalYears: number;
    let TMonthV: number;
    let NdayI: number

    let NdayF: number
    let NmonthI: number
    let NmonthF: number
    let NyearI: number
    let NyearF: number

    //aguinaldo = 100
    //bono14 = 3500.00
    
   // Datos Iniciales
    let dayI = (<HTMLInputElement>document.getElementById('Iday')).value;
    let monthI = (<HTMLInputElement>document.getElementById('Imonth')).value;
    let yearI = (<HTMLInputElement>document.getElementById('Iyear')).value;
    
    // Datos Finales
    let dayF = (<HTMLInputElement>document.getElementById('Fday')).value;
    let monthF = (<HTMLInputElement>document.getElementById('Fmonth')).value;
    let yearF = (<HTMLInputElement>document.getElementById('Fyear')).value;
   
    // De String a Int
    NdayI = parseInt(dayI)
    NdayF = parseInt(dayF)
    NmonthI = parseInt(monthI)
    NmonthF = parseInt(monthF)
    NyearI = parseInt(yearI)
    NyearF = parseInt(yearF)

    let TempSueldo = (<HTMLInputElement>document.getElementById('sueldo')).value;
    sueldo = parseFloat(TempSueldo)

    let TempY = parseInt(yearF) - parseInt(yearI)

    // ===========================================
    //    Calculo Años
    // ===========================================
    
    if( NmonthF < NmonthI ){
        
        console.log('Mes menor');
        TYears = NyearF - NyearI
        TYears -= 1
        let TempMonth = 12 - NmonthI
        TMonth = NmonthF + TempMonth

        if( NdayF > 25){
            TMonth += 1
            console.log('Mes mayor a 25 dias', TMonth);
        }
        if( TMonth === 12){
            TYears += 1
            console.log(TMonth);
            console.log('Anos al ser ifual a 12: ', TYears);
            TMonth = 0
           
        }
        
        TDays = NdayF
        
    }
    else{
        // console.log('Else al no ser menor');
        TYears = NyearF - NyearI
        TMonth = NmonthF - NmonthI
        if( TMonth === 0 && NdayF > 25){
            TMonth += 1
        }
        if( NdayF > 25){
            TMonth += 1
        }

        TDays = NdayF

    }

    // ====================================================
    // Calculo Bono 14
    // ====================================================

    let BonoTemp = sueldo / 12

    if( TempY === 0 ){
       //console.log('bono 14');
       if( NmonthF < 6 ){
        let diasT: number = BonoTemp / 30
        let mesTemp: number = NmonthF - NmonthI
        //console.log('Mes numero: ', mesTemp);
        //console.log('If bono 14 menor a 6 meses', (BonoTemp * mesTemp) + (parseInt(dayF) * diasT));
        bono14 = (BonoTemp * mesTemp) + (NdayF * diasT)
        //return bono14
       }
       else {
           //console.log('else bono 14 no es menor a 6 meses', monthF);
           if( NmonthF > 6){
               if( NmonthI >= 7){
                let diasT: number = BonoTemp / 30
                let mesTemp: number = NmonthF - NmonthI
                bono14 = (BonoTemp * mesTemp) + ( NdayF * diasT )
                // console.log('if Bono 14: ', bono14);
                // return bono14
               }
               else{
                let Mparcial: number = NmonthF - 7
                //console.log('If bono 14 mayor a 7: de julio en adelante', monthF);
                let diasT: number = BonoTemp / 30
                bono14 = (BonoTemp * Mparcial) + ( NdayF * diasT )
                //console.log('Bono 14: ', bono14);
                // return bono14
               }
           }
           else{
            //console.log('Es igual a 6');
            let diasT: number = BonoTemp / 30
            let mesTemp: number = NmonthF - NmonthI
            bono14 = (BonoTemp * mesTemp) + ( NdayF * diasT)
            //console.log(bono14);
            // return bono14
           }
       }
    }
    else{

        //console.log('else bono 14 despues de un ano');
        let BonoTemp = sueldo / 12
        //console.log('Aguinaldo promedio: ', BonoTemp);
        if( NmonthF < 7 ){
            //console.log('menor a 7');
            if( monthI > monthF && TempY == 1){
                // console.log('Entro un no y se fue en otro y no lleva mas de 12 meses');
                let mesesAI: number = 12 - NmonthI
                let mesAS: number = NmonthF
                let totalMeses: number = mesesAI + mesAS 
                let diasT: number = BonoTemp / 30
                // console.log('Meses trabajados el ano de entrada: ', totalMeses); 
                bono14 = (BonoTemp * totalMeses) + ( NdayF * diasT )
                // return bono14
            }
            else {
                // console.log('Lleva mas de un a;o tragaando');
                let diasT: number = BonoTemp / 30
                let mesTemp: number = NmonthF + 5
                bono14 = (BonoTemp * mesTemp) + ( NdayF * diasT )
                // console.log(bono14);
                // return bono14
            }
        }
        else {
            // console.log('else mayor a 7');
            let Mparcial: number = NmonthF - 7
            // console.log('If bono 14 mayor a 7: de julio en adelante', monthF);
            let diasT: number = BonoTemp / 30
            bono14 = (BonoTemp * Mparcial) + ( NdayF * diasT )
            // console.log('Bono 14: ', bono14);
            // return bono14
        }
        
    }


    // =======================================================
    // Calculo Aguinaldo
    // =======================================================    
    let AgTemp = sueldo / 12
    
    if( TempY === 0 ){
    //    console.log('Aguinaldo al ser menor de 12 meses');
       if( NmonthF < 12 ){
        let diasT: number = AgTemp / 30
        let mesTemp: number = NmonthF - NmonthI
        // console.log('Mes numero: ', mesTemp);
        // console.log('If Aguinaldo menor a 12 meses', (AgTemp * mesTemp) + (parseInt(dayF) * diasT));
        aguinaldo = ( AgTemp * mesTemp ) + ( NdayF * diasT )
       }
       else {
        //    console.log( 'else aguinaldo en mes 12: ', NmonthF );
           let diasT: number = AgTemp / 30
           aguinaldo = NdayF * diasT 
        //    console.log('if aguinaldo en mes 12: ', aguinaldo); 
       }
    }
    else{

        //console.log('else aguinaldo despues de un año');
        let AgTemp = sueldo / 12
        if( NmonthF < 12 ){
            let diasT: number = AgTemp / 30
            let mesTemp: number = NmonthF
            //console.log('Mes numero: ', mesTemp);
            // console.log('If Aguinaldo menor a 12 meses', (AgTemp * mesTemp) + (parseInt(dayF) * diasT));
            aguinaldo = ( AgTemp * mesTemp ) + ( NdayF * diasT )
           }
           else {
            //console.log( 'else aguinaldo en mes 12: ', NmonthF );
            let diasT: number = AgTemp / 30
            aguinaldo = NdayF * diasT 
            //console.log('if aguinaldo en mes 12: ', aguinaldo); 
        }
        
    }


    // ==============================================
    // Calculo de Vacaciones
    // ==============================================

    //vacaciones = 500.00
    if( TempY === 0 ){
            let calM = NmonthF - NmonthI
            calM = (calM * 30) + NdayF
            let DiasVac = calM * factorV
            vacaciones = Math.round(DiasVac)
        }
        else{
        let MATemp = 13 - NmonthI
        MATemp = MATemp * 30
        let MCTemp = NmonthF - 1
        MCTemp = (MCTemp * 30) + NdayF    
        let TVdays = MATemp + MCTemp
        vacaciones = Math.round(TVdays * factorV)
            if( TVdays > 360 ){
                let calM = NmonthF - NmonthI
                calM = (calM * 30) + NdayF
                let DiasVac = calM * factorV
                vacaciones = Math.round(DiasVac)
            }
        }




    // ==============================================
    //    Motivo de salida
    // ==============================================
    let des = (<HTMLInputElement>document.getElementById('des'))
    let ren = (<HTMLInputElement>document.getElementById('ren'))
    let VCP = (<HTMLInputElement>document.getElementById('vc')).value
    
    if(ren.checked){
        console.log('Renuncie');
    }
    else{
        console.log('Me despidieton');

    }
    // console.log('Mi opcion: ', des.value);
    // console.log('Mi opcion check: ', des.checked );
    // console.log('Mi opcion: ', ren.value);
    // console.log('Mi opcion check: ', ren.checked );
    // console.log('Suedo: ', sueldo);
    console.log('Vacaciones Pending str: ', VCP);
    if( !VCP ){
        nVCP = 0
    }
    else {
        nVCP = parseInt(VCP)
    }
    console.log('Vacaciones Pending Number: ', nVCP);
   
    

    // ==============================================
    // Muestra el Resultado final en pantalla
    // ==============================================
    let resultado = document.getElementById('resultado')

    TotalYears = sueldo * TYears // Total 1 sueldo por año trabajado
    let sueldoDia = sueldo / 30  // Costo día trabajado
    let tVC = nVCP + vacaciones  // Total vacaciones pendientes mas acumuladas en curso
    console.log('Total dias vas', tVC);
    let diaVac: number
    
    if (TDays >= 25) {
        TDays = 0
    }
    // Calculo si hay vacaciones Pendientes
    if( nVCP == 0 ){
        console.log('No hay vac pendientes');
        diaVac = vacaciones * sueldoDia
        totalIndem = TotalYears + bono14 + aguinaldo + diaVac
        nVCP = 0
    }
    else{
        console.log('Hay vac pendientes');
        tVC = nVCP + vacaciones
        diaVac = tVC * sueldoDia
        totalIndem = TotalYears + bono14 + aguinaldo + diaVac
    }

    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'GTQ',
        minimumFractionDigits: 1
      })

    // Resultado visual en pantalla
    resultado.innerHTML = `
    <small>Tiempo trabajado:</small>
    <div class="border mb-2 resetText"> 

    <table class="table">
    <thead>
    <tr>
      <th scope="col">Descripción</th>
      <th scope="col">Cantidad</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Años trabajados:</td>
      <td>${TYears}</td>
    </tr>
    <tr>
      <td>Meses:</td>
      <td>${TMonth}</td>
    </tr>
    <tr>
      <td>Días</td>
      <td>${ TDays }</td>
    </tr>
  </tbody>
    </table>
    </div>

    <small>Prestaciones Laborales:</small>
    <div class="border mb-2 resetText">
    <small>Días de vacaciones:</small>
    <table class="table">
    <thead>
    <tr>
      <th scope="col">Vacaciones</th>
      <th scope="col">Días</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>período en curso:</td>
      <td>${ vacaciones }</td>
    </tr>
    <tr>
      <td>pendientes de goce:</td>
      <td>${ nVCP }</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>${ tVC }</td>
    </tr>
  </tbody>
    </table>
    
    <table class="table">
    <thead>
    <tr>
      <th scope="col">Descripción</th>
      <th scope="col">Cantidad</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Sueldos por años:</td>
      <td>${ formatter.format(TotalYears) }</td>
    </tr>
    <tr>
      <td>Bono 14:</td>
      <td>${ formatter.format(bono14) }</td>
    </tr>
    <tr>
      <td>Aguinaldo:</td>
      <td>${ formatter.format(aguinaldo) }</td>
    </tr>
    <tr>
      <td>Total por Vacaciones:</td>
      <td>${ formatter.format(diaVac) }</td>
    </tr>
  </tbody>
    </table>

    </div>
    <small>Total indemnizacion:</small>
    <div class="border resetText">
    <table class="table">
    <thead>
    <tr>
      <th scope="col">Vacaciones</th>
      <th scope="col">Días</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>*Total Indemnización:</td>
      <td><span class="badge badge-success">${ formatter.format(totalIndem) }</span></td>
    </tr>
  </tbody>
    </table>

    </div>
    <small>*El calculo es aproximado y pueden haber otros factores que hagan que varie</small>
    `;

}


