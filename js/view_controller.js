
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: Done
	Check Daten :: Done
    Btn. Trigger :: Done
    Business-Logic (Alter --> Getränk) :: Done
    Bild austauschen :: Done
*/


// Ablaufsteuerung | Test
// controller();
function controller()
{
    output(updateImages(checkAge(getUserInput())));   
}

//Trigger - BtnClick
const btn = document.getElementById("trigBtn");
btn.addEventListener("click", actOnClick);

// Trigger - Input
const field = document.getElementsByName("eingabe")[0];
field.addEventListener("input",isInputValid);                       //damit wird die Funktion isInputValid bevor die Eingabe erfolgt

// Event - Dispatcher
function actOnClick()
{
    if (isInputValid()) {
        controller();
        
    } else {
        output("Input not Valid");
    }

}

//Checks if user input is a number and correct
function isInputValid()
{
    let inputStr = field.value;
    const patt = /^[0-9]{1,3}$/g;                                        //Testes den UserInput richtig ist

    let cond = patt.test(inputStr);

    if (!cond) {                                                       //Fehlerbehandlung
        field.value ="";                                              //Leert dass Eingabefeld bzw. Verhindert den UserInput
        updateImages(data.default.bev);                              //Sollte was schieflaufen- Wird das Bild auf default zurückgesetzt. Als SICHERUNG
    }

    return cond;
}

// User Input
function getUserInput()
{
    return parseInt(field.value);
}

// Logic (Mapping) | Test
function checkAge(age)
{
    switch (true) {
        case (age >= data.milk.lower)  && (age <= data.milk.upper) :
            return data.milk.bev;

        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
            
        case (age >=data.cola.lower)   && (age <= data.cola.upper):
            return data.cola.bev;
            
        case (age >= data.wine.lower)  && (age <= data.wine.upper):
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