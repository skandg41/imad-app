//Counter Code
var button=get.ElementById("counter");

button.onclick =function(){
//Create a request object    
    var request =new XMLHttpRequest();
    
    request.onreadyststechange=function(){
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