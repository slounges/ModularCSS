(()=>{

//make an AJAX request using the FETCH API
fetch('./data/classData.json') //fetch statement is an ajax request
.then(res => res.json())//take whatever json object into js
.then(data => {

        //debugger;
    console.log(data); //gives you back the data so that you can do whatever you want

    handleData(data);
    //here's where you would call the function that puts the pieces on the page
})
.catch((err) => { //if it breaks tell me what happened
    console.log(err);
})

function handleData (data){
    let coursename = document.querySelector(".profPanelText .text-muted");
   
    
    coursename.innerHTML = data.coursename + " - " + data.coursecode;

}
})();