import gsap from "gsap"

export const slideUp = () => {

    const tl = gsap.timeline();
    tl.to(".slide-up", {
        transform: "translateY(0%)",
        "--slideHeight": "0%",
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
      })

}


export const openPage = () => {
    var mine = document.querySelector(".creation")
    mine.addEventListener('click', function(){
        // alert("work")
        var container = document.getElementsByClassName('create-account-container')
        var overlay = document.getElementsByClassName('overlay')
        overlay[0].className = overlay[0].className.replace(" hidden", " active");
        container[0].className = container[0].className.replace(" hidden", " active");
    });
}

export const closePage = ()=> {
      
    // alert("work")
    var container = document.getElementsByClassName('create-account-container')
    var overlay = document.getElementsByClassName('overlay')
    // gsap.to(overlay, 1, {opacity: 0, ease : "none"})
    overlay[0].className = overlay[0].className.replace(" active", " hidden");
    container[0].className = container[0].className.replace(" active", " hidden");
    

}

export const openAction =()=> {
    var mor = document.querySelectorAll(".vertical-icon");
    var action = document.querySelectorAll(".job-action");
    for (var i =0; i<mor.length; i++) {
        mor[i].addEventListener('click', function() {
            

            if (this.nextSibling.style.display) {
                this.nextSibling.style.display="none";
                // this.style.color ="red";

           } else {
            // this.nextSibling.style.display = "flex"
            this.nextSibling.className += ' moreactive'
            // action[i].className+= ' moreractive';
            // this.nextSibling.classList.toggle("moreactive");
            this.style.color ="black";

           }
            
            
        })

    }
    
}

export const accordionFunc = () => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            
            panel.style.maxHeight = null;
            
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }

}

export const openProfile = ()=> {
    var container = document.getElementById("user-profile-container")
    var links = document.getElementsByClassName("change-profile")
    for(var i=0; i<links.length; i++) {
        links[i].addEventListener("click", function (e){
            
            var clickedLink = this.className.split(" ")[1] + "div"

            var overlay = container.getElementsByClassName('overlay')
            overlay[0].className = overlay[0].className.replace(" hidden", " active");

            var openPg = document.getElementsByClassName(clickedLink);
            openPg[0].className = openPg[0].className.replace(" hidden", " inactive");

        })

    }
    
}

export const closeProfile = ()=> {

    var container = document.getElementById("user-profile-container")

    var overlay = container.getElementsByClassName('overlay')
    var openPg  = container.getElementsByClassName(' inactive')
    overlay[0].className = overlay[0].className.replace(" active", " hidden");

    openPg[0].className = openPg[0].className.replace(" inactive", " hidden");

    
}


export const jobUnveil = () => {
    var jobsContainer = document.getElementById("myjobs-nav-link");;
    var innerPg = document.getElementById("myjobs-inner");
    var mylinks = document.querySelectorAll(".myjobs-single");

    for (var i = 0; i < mylinks.length; i++) {
        mylinks[i].addEventListener("click", function () {

            var current = jobsContainer.getElementsByClassName("active");
            var oldActive = current[0].className.split(" ")[1] + "ss";
            
            var currentPg = innerPg.getElementsByClassName(oldActive);
            
            currentPg[0].className = currentPg[0].className.replace(" sactive", " hidelement")
            current[0].className = current[0].className.replace(" active", " notactive");
            
            
            var newActive = this.className.split(" ")[1] + "ss";
            var newPg = innerPg.getElementsByClassName(newActive);
            newPg[0].className = newPg[0].className.replace(" hidelement", " sactive")

            this.className += " active";
            
        })
    }
}

export const openApplication = () => {
    var applybutton= document.querySelector(".apply-job");
    applybutton.addEventListener("click", function () {
        var container = document.querySelector('.jobdescription-container')
        var cont = container.querySelector(".jobapplication-container");
        cont.className = cont.className.replace(" hidden", " ");
        var overlay =container.getElementsByClassName('overlay')
        overlay[0].className = overlay[0].className.replace(" hidden", " active");
    })
}
export const closeApplication = () => {
        var closebutton= document.querySelector(".jobapplication-close");
        closebutton.addEventListener("click", function () {

        var container = document.querySelector('.jobdescription-container')
        var cont = container.querySelector(".jobapplication-container");
        cont.className = cont.className.replace(" ", " hidden");
        var overlay =container.getElementsByClassName('overlay')
        overlay[0].className = overlay[0].className.replace(" active", " hidden");
        
    })
}