
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite ::
	Check Daten ::
    Btn. Trigger ::
    Business-Logic (Alter --> Getränk) :: Done
    Bild austauschen :: Done
*/


// Abkaufsteuerung | Test
controller();
function controller()
{
    output(updateImages(checkAge(2)));   
}


// Logic (Mapping) | Test
function checkAge(age)
{
    switch (true) {
        case (age >= data.milk.lower) && (age <= data.milk.upper) :
            return data.milk.bev;

        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
            
        case (age >=data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
            
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;  
            
        default:
            return data.default.bev;

    }
}


//Image updating | Test
function updateImages(imgName)
{
    const img = document.getElementById("bevImg"); 
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName;   //Monitoring
}


//Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}