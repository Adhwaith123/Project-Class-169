AFRAME.registerComponent("markerhandler",{
    init:function(){
        this.el.addEventListener("markerFound",()=>{handlemarkerfound})
        this.el.addEventListener("markerLost",()=>{handlemarkerlost})

    },
    handlemarkerfound:function(){
        var buttonDivision=document.getElementById("button-div")
        buttonDivision.style.display="flex"


    },
    handlemarkerlost:function(){
        var buttonDivision=document.getElementById("button-div")
        buttonDivision.style.display="none"


    },

}) 
