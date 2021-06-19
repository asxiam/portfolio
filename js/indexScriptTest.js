{
	const cursorElement = document.querySelector("#cursor-element")
	const projectNameList = document.getElementsByClassName("project-name")
	const contentContainer = document.querySelector("#content-container")
	const projCont = document.querySelector(".projects-container") /* This is new */
	const overlay = document.querySelector("#overlay") /* This is new */
	const overlayMenuContainer = document.querySelector(".overlay-container") /* This is new */
	const addInfoCont = document.querySelector(".additional-info-container") /* This is new */
	const pageLinksCont = document.querySelector(".page-links-container") /* This is new */
	let showLandingVideo = window.sessionStorage.getItem("displayVideo")
	let resizedVideo = true
	
	if(showLandingVideo == null){
		showLandingVideo = true
		window.sessionStorage.setItem("displayVideo", showLandingVideo)
	}
	else{
		showLandingVideo = (showLandingVideo == "true")
		resizedVideo = showLandingVideo
	}

	// Moves the "click to enter" element based on cursor position
	document.querySelector("#landing-video-container").addEventListener("mousemove",(evt)=>{
		let mouseX = evt.clientX
		let mouseY = evt.clientY

		cursorElement.style.left = (mouseX)+"px";
		cursorElement.style.top = (mouseY)+"px";
	})

	// Brings up the rest of the page after clicking the initial video
	document.querySelector("#landing-video-container").addEventListener("click",(evt)=>{
		let contentElement = document.querySelector("#content-container");
		contentElement.style.transform = "translateY(-100%)";
		cursorElement.classList.toggle("show")
		cursorElement.classList.toggle("hide")
		window.sessionStorage.setItem("displayVideo", false)
	})

	if(!showLandingVideo)
		document.querySelector("#landing-video-container").click()
	else{
		contentContainer.style.transition = "transform 1.8s ease-out 0s"
		cursorElement.style.transistion = "opacity 0.6s ease 0s"
	}

	/*
	* Changes the styles of all required elements after clicking on the hamburger menu
	*/
	document.querySelector("#ham-menu").addEventListener("click", (evt)=>{
		const isOpen = document.querySelector("#ham-menu").classList.toggle("open")
		/* This is new */
		overlay.classList.toggle("fullscreen")

		evt.target.style.pointerEvents = "none"
		// If else to hide/display content based on hamburger menu
		if(isOpen){
			setTimeout(function(){
				evt.target.style.pointerEvents = "auto"
			}, 1005)

			document.querySelector("header p").style.color = "black";
			contentContainer.style.overflowX = "hidden";
			contentContainer.style.overflowY = "hidden";

			projCont.classList.toggle("hide") /* This is new */

			overlayMenuContainer.style.visibility = "visible" /* This is new */
			overlay.style.visibility = "visible" /* This is new */
			addInfoCont.classList.toggle("show") /* This is new */
			pageLinksCont.classList.toggle("show") /* This is new */

		}
		else{
			setTimeout(function(){
				contentContainer.style.overflowX = "auto"
				contentContainer.style.overflowY = "auto"
				overlay.style.visibility = "hidden"
				overlayMenuContainer.style.visibility = "hidden"
				evt.target.style.pointerEvents = "auto"
			}, 1005)

			document.querySelector("header p").style.color = "white";
			
			projCont.classList.toggle("hide") 	   /* This is new */

			addInfoCont.classList.toggle("show")   /* This is new */
			pageLinksCont.classList.toggle("show") /* This is new */
		}
	})

	// Adding evt listeners to grey out other links based on the current link cursor is hovering
	for(let i = 0; i < projectNameList.length; i++){
		projectNameList[i].addEventListener("mouseover", (evt)=>{
			let parentListPrev = evt.target.parentElement.parentElement.previousElementSibling
			let parentListNext = evt.target.parentElement.parentElement.nextElementSibling

			while(parentListPrev !== null){
				parentListPrev.firstElementChild.lastElementChild.style.color = "rgba(255,255,255,0.3)"
				for(let i = 0; i < parentListPrev.firstElementChild.firstElementChild.children.length; i++){
					parentListPrev.firstElementChild.firstElementChild.children[i].style.color = "rgba(255,255,255,0.3)"
				}
				parentListPrev = parentListPrev.previousElementSibling
			}
			while(parentListNext !== null){
				parentListNext.firstElementChild.lastElementChild.style.color = "rgba(255,255,255,0.3)"
				for(let i = 0; i < parentListNext.firstElementChild.firstElementChild.children.length; i++){
					parentListNext.firstElementChild.firstElementChild.children[i].style.color = "rgba(255,255,255,0.3)"
				}
				parentListNext = parentListNext.nextElementSibling
			}
		})
		projectNameList[i].addEventListener("mouseout", (evt)=>{
			let parentListPrev = evt.target.parentElement.parentElement.previousElementSibling
			let parentListNext = evt.target.parentElement.parentElement.nextElementSibling

			while(parentListPrev !== null){
				parentListPrev.firstElementChild.lastElementChild.style.color = "white"
				for(let i = 0; i < parentListPrev.firstElementChild.firstElementChild.children.length; i++){
					parentListPrev.firstElementChild.firstElementChild.children[i].style.color = "white"
				}
				parentListPrev = parentListPrev.previousElementSibling
			}
			while(parentListNext !== null){
				parentListNext.firstElementChild.lastElementChild.style.color = "white"
				for(let i = 0; i < parentListNext.firstElementChild.firstElementChild.children.length; i++){
					parentListNext.firstElementChild.firstElementChild.children[i].style.color = "white"
				}
				parentListNext = parentListNext.nextElementSibling
			}
		})
	}
	
	window.addEventListener("resize", (evt)=>{
		if(evt.target.innerWidth <= 700 && resizedVideo){
			document.querySelector("#landing-video-container").click()
			resizedVideo = false
			window.sessionStorage.setItem("displayVideo", false)
		}
		
	})
}