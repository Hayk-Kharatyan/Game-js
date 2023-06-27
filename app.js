let arr = [
    
    ["be","been","was/were","լինել"],

    ["beat","beat","beaten","ծեծել"],

    ["become","	became","become","դառնալ"],

    ["begin","began","begun","սկսել"],

    ["bend","bent","bent","ոլորան"],

    ["bite","bit","bitten","կծել"],

    ["blow","blew","blown","փչել"],

    ["breake","broke","broken","ջարդել"],

    ["buy","bought","bought","գնել"],

    ["choose","	chose","chosen","ընտրել"],

]

let hayerenbar = document.querySelector("#hayeren")
let engl = document.querySelector("#eng")
let second = document.querySelector("#secondbay")
let third = document.querySelector("#thirdbay")
let submit = document.querySelector("#submit")

function render(){
    arr.sort(()=>Math.random()-0.5)

    arr.map((item)=>{

hayerenbar.innerHTML=item[3]
engl.innerHTML=item[0]

answer(item)


    })

    
}


function answer(item){

    submit.addEventListener("click",function(){

        if(second.value===item[1]){
            second.classList.remove("red")
            second.classList.add("green")
        
        }

        else{
            second.classList.add("red")
            second.classList.remove("green")
        }

         if(third.value===item[2]){
            third.classList.remove("red")
            third.classList.add("green")

            
        }

        else{
            third.classList.add("red")
            third.classList.remove("green")
        }

        
        
            })

}


let refresh = document.querySelector(".icon")

refresh.addEventListener("click",function(){
    render()
})


render()