{
	/*
	Back to doing the vertical scroll horizontal translate.
	for testing purposes lets do 1,2,1,2,1
	*/
	// translate all the project containers instead of the marquee element
	const contentContainer = document.querySelector("#content-container")
	const overlay = document.querySelector("#overlay")
	const overlayMenuContainer = document.querySelector(".overlay-container")
	const addInfoCont = document.querySelector(".additional-info-container")
	const pageLinksCont = document.querySelector(".page-links-container")
	const tallContainer = document.querySelector(".tall-container")
	const viewContainer = document.querySelector(".view-container")
	const cardContainer = document.querySelector(".card-container")

	let dynamicHeight = 0
	let transX = 0
	let test = 0;

	function calcDynamicHeight(objWidth){
		/*
		* adding width of cards beyond right edge of the viewport
		* to the height of the viewport plus a buffer
		*/
		const vw = window.innerWidth
		const vh = window.innerHeight
		return objWidth - vw + vh + 0
	}

	function handleDynamicHeight(){
		let objWidth = cardContainer.clientWidth
		dynamicHeight = calcDynamicHeight(objWidth)
		tallContainer.style.height = `${dynamicHeight}px`
	}

	handleDynamicHeight()

	document.querySelector("#content-container").addEventListener("scroll", ()=>{
		transX = 110-viewContainer.offsetTop
		cardContainer.style.transform = `translateX(${transX}px)`
	})

	window.addEventListener("resize", ()=>{
		handleDynamicHeight()
	})
	
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
			contentContainer.style.overflowX = "hidden"
			contentContainer.style.overflowY = "hidden"

			for(let i = 1; i < contentContainer.children.length-1; i++)
				contentContainer.children[i].classList.toggle("hide")

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

			for(let i = 1; i < contentContainer.children.length-1; i++)
				contentContainer.children[i].classList.toggle("hide")

			addInfoCont.classList.toggle("show")
			pageLinksCont.classList.toggle("show")
		}
	})
}