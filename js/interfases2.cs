// obligatoridada de las interfaces

/*
Resolver ambiguedad de metodos iguales en interfaces disfetenres
Restriccion en uso de interfaces

El polimorfismo es, en forma técnica, la capacidad que tiene un objeto de responder de múltiples formas a un mensaje en función de los parámetros que le son suministrados.

En forma sencilla, podemos decir que el polimorfismo es la capacidad que tienen los objetos de una clase de hacer diferentes cosas con un mismo método.

*/

interface IMamiferosTerrestres{
    int numeroPatas();
}
interface IAnimalesYDeportes{
    string tipoDeporte();
}
interface ISaltoConPatas{
    int numeroPatas();
}

// Solo puede heredar de una sola clase, pero si puede heredar de
// varias interfases
class Caballo: Mamiferos, IMamiferosTerrestres, IAnimalesYDeportes, ISaltoConPatas
{
    // IMamiferosTerrestres
    // public int numeroPatas(){
    //     return 4;
    // }

    // El problema de ambiguedad se resuelve con el metodo de la ISaltoConPatas 
    // se resuelve de la siguiente manera
    // al quitarle el modificador de acceso public ya no es visible desde otro metodo
    int IMamiferosTerrestres.numeroPatas(){
        return 4;
    }

    // ISaltoConPatas
    int ISaltoCoPatas.numeroPatas(){
        return 2;
    }

    public string tipoDeporte(){
        return "Hipica";
    }
    
    public boolean esOlimpico(){
        return true;
    }
}

static void Main(string[] args)
{
    // principio de sustitucioa es-un
    IMamiferosTerrestres ImiBabieca = miBabieca;


    // Aqui se refiere al metodo de IMamiferosTerrestess
    Console.WriteLine("Numero de patas de Babieca: " + ImiBabieca.numeroPatas()); 
}

/*
Restricciones de las interfaces
- No se permiten definir campos (variables) solo metodos
- No se pueden definir constructores
- No se pueden definir destructores
- NO se pueden especificar modificadores de acceso en metodos (todo son publix implicitamente)
- No se puede anidar clases ni otro tipo de estrcutura en las interfaces

Console.WriteLine("Mensaje {0} ha sido enviado por {1}", mensaje, remitente);

*/