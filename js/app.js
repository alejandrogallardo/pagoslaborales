var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var days = 31;
var aY = new Date();
var actualYear = aY.getFullYear();
var iniYear = 1950;
// Ingreso
var dayI = document.getElementById('Iday');
var monthI = document.getElementById('Imonth');
var yearI = document.getElementById('Iyear');
// Salida
var dayF = document.getElementById('Fday');
var monthF = document.getElementById('Fmonth');
var yearF = document.getElementById('Fyear');
/**
 * Ciclos Ingreso
 */
for (var i = 0; i < days; i++) {
    var diaOpt = document.createElement('option');
    diaOpt.setAttribute('value', "" + (i + 1));
    diaOpt.innerHTML = "" + (i + 1);
    dayI.appendChild(diaOpt);
}
for (var i = 0; i < meses.length; i++) {
    var mesOpt = document.createElement('option');
    mesOpt.setAttribute('value', "" + (i + 1));
    mesOpt.innerHTML = meses[i];
    monthI.appendChild(mesOpt);
}
for (var i = iniYear; i <= actualYear; i++) {
    var yearOpt = document.createElement('option');
    yearOpt.setAttribute('value', "" + (i + 1));
    yearOpt.innerHTML = "" + (i + 1);
    yearI.appendChild(yearOpt);
}
/**
 * Ciclos Salida
 */
for (var i = 0; i < days; i++) {
    var diaOpt = document.createElement('option');
    diaOpt.setAttribute('value', "" + (i + 1));
    diaOpt.innerHTML = "" + (i + 1);
    dayF.appendChild(diaOpt);
}
for (var i = 0; i < meses.length; i++) {
    var mesOpt = document.createElement('option');
    mesOpt.setAttribute('value', "" + (i + 1));
    mesOpt.innerHTML = meses[i];
    monthF.appendChild(mesOpt);
}
for (var i = iniYear; i <= actualYear; i++) {
    var yearOpt = document.createElement('option');
    yearOpt.setAttribute('value', "" + (i + 1));
    yearOpt.innerHTML = "" + (i + 1);
    yearF.appendChild(yearOpt);
}
// ====================================
//    Calculo de Indepnizacion
// ====================================
function getData() {
    var TYears;
    var TMonth;
    var TDays;
    var nVCP = 0; // Valor vacaciones pendientes
    var bono14;
    var sueldo;
    var aguinaldo;
    var vacaciones;
    var totalIndem;
    // Factor para calculo de vacaciones
    var factorV = 15 / 365;
    var TotalYears;
    var TMonthV;
    var NdayI;
    var NdayF;
    var NmonthI;
    var NmonthF;
    var NyearI;
    var NyearF;
    //aguinaldo = 100
    //bono14 = 3500.00
    // Datos Iniciales
    var dayI = document.getElementById('Iday').value;
    var monthI = document.getElementById('Imonth').value;
    var yearI = document.getElementById('Iyear').value;
    // Datos Finales
    var dayF = document.getElementById('Fday').value;
    var monthF = document.getElementById('Fmonth').value;
    var yearF = document.getElementById('Fyear').value;
    // De String a Int
    NdayI = parseInt(dayI);
    NdayF = parseInt(dayF);
    NmonthI = parseInt(monthI);
    NmonthF = parseInt(monthF);
    NyearI = parseInt(yearI);
    NyearF = parseInt(yearF);
    var TempSueldo = document.getElementById('sueldo').value;
    sueldo = parseFloat(TempSueldo);
    var TempY = parseInt(yearF) - parseInt(yearI);
    // ===========================================
    //    Calculo Años
    // ===========================================
    if (NmonthF < NmonthI) {
        console.log('Mes menor');
        TYears = NyearF - NyearI;
        TYears -= 1;
        var TempMonth = 12 - NmonthI;
        TMonth = NmonthF + TempMonth;
        if (NdayF > 25) {
            TMonth += 1;
            console.log('Mes mayor a 25 dias', TMonth);
        }
        if (TMonth === 12) {
            TYears += 1;
            console.log(TMonth);
            console.log('Anos al ser ifual a 12: ', TYears);
            TMonth = 0;
        }
        TDays = NdayF;
    }
    else {
        // console.log('Else al no ser menor');
        TYears = NyearF - NyearI;
        TMonth = NmonthF - NmonthI;
        if (TMonth === 0 && NdayF > 25) {
            TMonth += 1;
        }
        if (NdayF > 25) {
            TMonth += 1;
        }
        TDays = NdayF;
    }
    // ====================================================
    // Calculo Bono 14
    // ====================================================
    var BonoTemp = sueldo / 12;
    if (TempY === 0) {
        //console.log('bono 14');
        if (NmonthF < 6) {
            var diasT = BonoTemp / 30;
            var mesTemp = NmonthF - NmonthI;
            //console.log('Mes numero: ', mesTemp);
            //console.log('If bono 14 menor a 6 meses', (BonoTemp * mesTemp) + (parseInt(dayF) * diasT));
            bono14 = (BonoTemp * mesTemp) + (NdayF * diasT);
            //return bono14
        }
        else {
            //console.log('else bono 14 no es menor a 6 meses', monthF);
            if (NmonthF > 6) {
                if (NmonthI >= 7) {
                    var diasT = BonoTemp / 30;
                    var mesTemp = NmonthF - NmonthI;
                    bono14 = (BonoTemp * mesTemp) + (NdayF * diasT);
                    // console.log('if Bono 14: ', bono14);
                    // return bono14
                }
                else {
                    var Mparcial = NmonthF - 7;
                    //console.log('If bono 14 mayor a 7: de julio en adelante', monthF);
                    var diasT = BonoTemp / 30;
                    bono14 = (BonoTemp * Mparcial) + (NdayF * diasT);
                    //console.log('Bono 14: ', bono14);
                    // return bono14
                }
            }
            else {
                //console.log('Es igual a 6');
                var diasT = BonoTemp / 30;
                var mesTemp = NmonthF - NmonthI;
                bono14 = (BonoTemp * mesTemp) + (NdayF * diasT);
                //console.log(bono14);
                // return bono14
            }
        }
    }
    else {
        //console.log('else bono 14 despues de un ano');
        var BonoTemp_1 = sueldo / 12;
        //console.log('Aguinaldo promedio: ', BonoTemp);
        if (NmonthF < 7) {
            //console.log('menor a 7');
            if (monthI > monthF && TempY == 1) {
                // console.log('Entro un no y se fue en otro y no lleva mas de 12 meses');
                var mesesAI = 12 - NmonthI;
                var mesAS = NmonthF;
                var totalMeses = mesesAI + mesAS;
                var diasT = BonoTemp_1 / 30;
                // console.log('Meses trabajados el ano de entrada: ', totalMeses); 
                bono14 = (BonoTemp_1 * totalMeses) + (NdayF * diasT);
                // return bono14
            }
            else {
                // console.log('Lleva mas de un a;o tragaando');
                var diasT = BonoTemp_1 / 30;
                var mesTemp = NmonthF + 5;
                bono14 = (BonoTemp_1 * mesTemp) + (NdayF * diasT);
                // console.log(bono14);
                // return bono14
            }
        }
        else {
            // console.log('else mayor a 7');
            var Mparcial = NmonthF - 7;
            // console.log('If bono 14 mayor a 7: de julio en adelante', monthF);
            var diasT = BonoTemp_1 / 30;
            bono14 = (BonoTemp_1 * Mparcial) + (NdayF * diasT);
            // console.log('Bono 14: ', bono14);
            // return bono14
        }
    }
    // =======================================================
    // Calculo Aguinaldo
    // =======================================================    
    var AgTemp = sueldo / 12;
    if (TempY === 0) {
        //    console.log('Aguinaldo al ser menor de 12 meses');
        if (NmonthF < 12) {
            var diasT = AgTemp / 30;
            var mesTemp = NmonthF - NmonthI;
            // console.log('Mes numero: ', mesTemp);
            // console.log('If Aguinaldo menor a 12 meses', (AgTemp * mesTemp) + (parseInt(dayF) * diasT));
            aguinaldo = (AgTemp * mesTemp) + (NdayF * diasT);
        }
        else {
            //    console.log( 'else aguinaldo en mes 12: ', NmonthF );
            var diasT = AgTemp / 30;
            aguinaldo = NdayF * diasT;
            //    console.log('if aguinaldo en mes 12: ', aguinaldo); 
        }
    }
    else {
        //console.log('else aguinaldo despues de un año');
        var AgTemp_1 = sueldo / 12;
        if (NmonthF < 12) {
            var diasT = AgTemp_1 / 30;
            var mesTemp = NmonthF;
            //console.log('Mes numero: ', mesTemp);
            // console.log('If Aguinaldo menor a 12 meses', (AgTemp * mesTemp) + (parseInt(dayF) * diasT));
            aguinaldo = (AgTemp_1 * mesTemp) + (NdayF * diasT);
        }
        else {
            //console.log( 'else aguinaldo en mes 12: ', NmonthF );
            var diasT = AgTemp_1 / 30;
            aguinaldo = NdayF * diasT;
            //console.log('if aguinaldo en mes 12: ', aguinaldo); 
        }
    }
    // ==============================================
    // Calculo de Vacaciones
    // ==============================================
    //vacaciones = 500.00
    if (TempY === 0) {
        var calM = NmonthF - NmonthI;
        calM = (calM * 30) + NdayF;
        var DiasVac = calM * factorV;
        vacaciones = Math.round(DiasVac);
    }
    else {
        var MATemp = 13 - NmonthI;
        MATemp = MATemp * 30;
        var MCTemp = NmonthF - 1;
        MCTemp = (MCTemp * 30) + NdayF;
        var TVdays = MATemp + MCTemp;
        vacaciones = Math.round(TVdays * factorV);
        if (TVdays > 360) {
            var calM = NmonthF - NmonthI;
            calM = (calM * 30) + NdayF;
            var DiasVac = calM * factorV;
            vacaciones = Math.round(DiasVac);
        }
    }
    // ==============================================
    //    Motivo de salida
    // ==============================================
    var des = document.getElementById('des');
    var ren = document.getElementById('ren');
    var VCP = document.getElementById('vc').value;
    if (ren.checked) {
        console.log('Renuncie');
    }
    else {
        console.log('Me despidieton');
    }
    // console.log('Mi opcion: ', des.value);
    // console.log('Mi opcion check: ', des.checked );
    // console.log('Mi opcion: ', ren.value);
    // console.log('Mi opcion check: ', ren.checked );
    // console.log('Suedo: ', sueldo);
    console.log('Vacaciones Pending str: ', VCP);
    if (!VCP) {
        nVCP = 0;
    }
    else {
        nVCP = parseInt(VCP);
    }
    console.log('Vacaciones Pending Number: ', nVCP);
    // ==============================================
    // Muestra el Resultado final en pantalla
    // ==============================================
    var resultado = document.getElementById('resultado');
    TotalYears = sueldo * TYears; // Total 1 sueldo por año trabajado
    var sueldoDia = sueldo / 30; // Costo día trabajado
    var tVC = nVCP + vacaciones; // Total vacaciones pendientes mas acumuladas en curso
    console.log('Total dias vas', tVC);
    var diaVac;
    if (TDays >= 25) {
        TDays = 0;
    }
    // Calculo si hay vacaciones Pendientes
    if (nVCP == 0) {
        console.log('No hay vac pendientes');
        diaVac = vacaciones * sueldoDia;
        totalIndem = TotalYears + bono14 + aguinaldo + diaVac;
        nVCP = 0;
    }
    else {
        console.log('Hay vac pendientes');
        tVC = nVCP + vacaciones;
        diaVac = tVC * sueldoDia;
        totalIndem = TotalYears + bono14 + aguinaldo + diaVac;
    }
    var formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'GTQ',
        minimumFractionDigits: 1
    });
    // Resultado visual en pantalla
    resultado.innerHTML = "\n    <small>Tiempo trabajado:</small>\n    <div class=\"border mb-2 resetText\"> \n\n    <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">Descripci\u00F3n</th>\n      <th scope=\"col\">Cantidad</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>A\u00F1os trabajados:</td>\n      <td>" + TYears + "</td>\n    </tr>\n    <tr>\n      <td>Meses:</td>\n      <td>" + TMonth + "</td>\n    </tr>\n    <tr>\n      <td>D\u00EDas</td>\n      <td>" + TDays + "</td>\n    </tr>\n  </tbody>\n    </table>\n    </div>\n\n    <small>Prestaciones Laborales:</small>\n    <div class=\"border mb-2 resetText\">\n    <small>D\u00EDas de vacaciones:</small>\n    <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">Vacaciones</th>\n      <th scope=\"col\">D\u00EDas</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>per\u00EDodo en curso:</td>\n      <td>" + vacaciones + "</td>\n    </tr>\n    <tr>\n      <td>pendientes de goce:</td>\n      <td>" + nVCP + "</td>\n    </tr>\n    <tr>\n      <td>Total:</td>\n      <td>" + tVC + "</td>\n    </tr>\n  </tbody>\n    </table>\n    \n    <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">Descripci\u00F3n</th>\n      <th scope=\"col\">Cantidad</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>Sueldos por a\u00F1os:</td>\n      <td>" + formatter.format(TotalYears) + "</td>\n    </tr>\n    <tr>\n      <td>Bono 14:</td>\n      <td>" + formatter.format(bono14) + "</td>\n    </tr>\n    <tr>\n      <td>Aguinaldo:</td>\n      <td>" + formatter.format(aguinaldo) + "</td>\n    </tr>\n    <tr>\n      <td>Total por Vacaciones:</td>\n      <td>" + formatter.format(diaVac) + "</td>\n    </tr>\n  </tbody>\n    </table>\n\n    </div>\n    <small>Total indemnizacion:</small>\n    <div class=\"border resetText\">\n    <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">Descripci\u00F3n</th>\n      <th scope=\"col\">Suma Totales</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>*Total Indemnizaci\u00F3n:</td>\n      <td><span class=\"badge badge-success\">" + formatter.format(totalIndem) + "</span></td>\n    </tr>\n  </tbody>\n    </table>\n\n    </div>\n    <small>*El calculo es aproximado y pueden haber otros factores que hagan que varie</small>\n    ";
}
