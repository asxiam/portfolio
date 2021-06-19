{
	// translate all the project containers instead of the marquee element
	const contentContainer = document.querySelector("#content-container")
	const projectNameList = document.getElementsByClassName("project-name")
	const overlay = document.querySelector("#overlay")
	const overlayMenuContainer = document.querySelector(".overlay-container")
	const addInfoCont = document.querySelector(".additional-info-container")
	const pageLinksCont = document.querySelector(".page-links-container")

	/*
	* Changes the styles of all required elements after clicking on the hamburger menu
	*/
	document.querySelector("#ham-menu").addEventListener("click", (evt)=>{
		const isOpen = document.querySelector("#ham-menu").classList.toggle("open")
		overlay.classList.toggle("fullscreen")

		evt.target.style.pointerEvents = "none"

		// If else to hide/display content based on hamburger menu
		if(isOpen){
			setTimeout(function(){
				evt.target.style.pointerEvents = "auto"
			}, 1005)

			document.querySelector("header p").style.color = "black"
			contentContainer.style.overflowX = "hidden";
			contentContainer.style.overflowY = "hidden";

			for(let i = 1; i < contentContainer.children.length-1; i++){
				contentContainer.children[i].classList.toggle("hide")
			}

			overlayMenuContainer.style.visibility = "visible"
			overlay.style.visibility = "visible"
			addInfoCont.classList.toggle("show")
			pageLinksCont.classList.toggle("show")

		}
		else{
			setTimeout(function(){
				contentContainer.style.overflowX = "auto"
				contentContainer.style.overflowY = "auto"
				overlay.style.visibility = "hidden"
				overlayMenuContainer.style.visibility = "hidden"
				evt.target.style.pointerEvents = "auto"
			}, 1005)

			document.querySelector("header p").style.color = "white"

			for(let i = 1; i < contentContainer.children.length-1; i++){
				contentContainer.children[i].classList.toggle("hide")
			}

			addInfoCont.classList.toggle("show")
			pageLinksCont.classList.toggle("show")
		}
	})

	// Adding evt listeners to grey out other links based on the current link cursor is hovering
	for(let i = 0; i < projectNameList.length; i++){
		projectNameList[i].addEventListener("mouseover", (evt)=>{
			let parentListPrev = evt.target.parentElement.previousElementSibling
			let parentListNext = evt.target.parentElement.nextElementSibling

			while(parentListPrev !== null){
				parentListPrev.lastElementChild.style.color = "rgba(255,255,255,0.3)"
				for(let i = 0; i < parentListPrev.firstElementChild.children.length; i++){
					parentListPrev.firstElementChild.children[i].style.color = "rgba(255,255,255,0.3)"
				}
				parentListPrev = parentListPrev.previousElementSibling
			}
			while(parentListNext !== null){
				parentListNext.lastElementChild.style.color = "rgba(255,255,255,0.3)"
				for(let i = 0; i < parentListNext.firstElementChild.children.length; i++){
					parentListNext.firstElementChild.children[i].style.color = "rgba(255,255,255,0.3)"
				}
				parentListNext = parentListNext.nextElementSibling
			}
		})
		projectNameList[i].addEventListener("mouseout", (evt)=>{
			let parentListPrev = evt.target.parentElement.previousElementSibling
			let parentListNext = evt.target.parentElement.nextElementSibling

			while(parentListPrev !== null){
				parentListPrev.lastElementChild.style.color = "white"
				for(let i = 0; i < parentListPrev.firstElementChild.children.length; i++){
					parentListPrev.firstElementChild.children[i].style.color = "white"
				}
				parentListPrev = parentListPrev.previousElementSibling
			}
			while(parentListNext !== null){
				parentListNext.lastElementChild.style.color = "white"
				for(let i = 0; i < parentListNext.firstElementChild.children.length; i++){
					parentListNext.firstElementChild.children[i].style.color = "white"
				}
				parentListNext = parentListNext.nextElementSibling
			}
		})
	}
}