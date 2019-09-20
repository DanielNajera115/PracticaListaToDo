var i=0,idLo=0;
var arr = [];
var arrL = [];


function addToList(){
    var ul = document.getElementById("listaToDo");
    var li = document.createElement('dt');
    var radio = document.createElement('input');
    var str = "Elemento"+String(idLo);
    var str1 = "ElementoL"+String(idLo);
    var tareaIn = document.getElementById("tareaIn-txt");
    var texto = document.createTextNode(tareaIn.value);

    radio.type = 'checkbox';
  
    arr[i] = str;
    arrL[i] = str1;

    radio.setAttribute("id",str);
    li.setAttribute("id",str1);
    li.appendChild(radio);
    li.appendChild(texto);
    ul.appendChild(li);
    
    idLo++;
    i++;
    tareaIn.value = "";
    
}





function borrar(){
    var j=0,flg=0,cnt=0;
    var checkToEraseId,checkToEraseClass;


    for(j=0;j<i;j++){

        checkToEraseId=document.getElementById(arr[j]);
        if(checkToEraseId.checked){
            cnt++;
        }

    }

    for(var z=0;z<cnt;z++){
      for(j=0;j<i;j++){

            if(flg){
                arr[j]=arr[j+1]
                arrL[j]=arrL[j+1];
            }
            checkToEraseId=document.getElementById(arr[j]);
            checkToEraseClass=document.getElementById(arrL[j]);
            if(checkToEraseId.checked){
                checkToEraseId.parentElement.removeChild(checkToEraseId);
                checkToEraseClass.parentElement.removeChild(checkToEraseClass);
                arr[j]=arr[j+1]
                arrL[j]=arrL[j+1];
            
                flg=1;
                i--;
        }
        
       
        }
        flg=0;
    }
}


function modify(){

    var j=0,flg=0;
    var checkToEraseId,checkToEraseClass;
    var txtField = document.getElementById('modifyTxt');


    for(j=0;j<i;j++){
        checkToEraseId=document.getElementById(arr[j]);
        if(checkToEraseId.checked)
            flg++;
   
    }
    
    if(flg==1)
    for(j=0;j<i;j++){

        
        checkToEraseId=document.getElementById(arr[j]);
        checkToEraseClass=document.getElementById(arrL[j]);
        if(checkToEraseId.checked){
            checkToEraseClass.childNodes[1].textContent = txtField.value;
            
            
            
        }
    
   
    }

}


