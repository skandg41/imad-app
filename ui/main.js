//Counter Code
var button=get.ElementById("counter");

button.onclick =function(){
//Create a request object    
    var request =new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if (request.readystate==XMLHttpRequest.DONE){
            if(request.status==200){
                var counter = request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();

            }
        }
        
    };
    
    request.open("GET","http://skandg41.imad.hasura-app.io/counter",true);
    request.send(null);
    
    
};

//Submit name

var nameInput=document.getElementById('name');
var name=nameInput.value();
var submit=document.getElementById("submit_btn");
submit.onclick =function(){
    //Make a request to the server and make a request
    
    //Capture a list of items and renders it as a list
    var names=["name 1","name 2","name 3"];
    var list="";
    for(var i=0;i<=names.length;i++){
        list +-'<li>' +names[i] +'</li>';
        
    }
    
    var ul=document.getElementById('namelist');
    ul.innerHTML = list;
};