document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("dropdown-head").addEventListener("click", () =>{
        const dropdownBody = document.getElementById("dropdown-body");
        const arrow = document.querySelector("#dropdown-head svg").classList;
        
        let classes = dropdownBody.classList;
        if(classes.contains("close")){
            classes.remove("close");
            classes.add("open");
            arrow.remove("close");
            arrow.add("open");
        }else{
            classes.remove("open");
            classes.add("close");
            arrow.remove("open");
            arrow.add("close");
        }
    })
})
