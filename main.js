//object to be converted to string w/html elements
const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

//function to convert object to string
const computerObjToHTML = (computerObj) => {
    const computerSection = `<section id="computer--${computerObj.id}">
                              <h1>${computerObj.manufacturer} ${computerObj.make}</h1>
                              <div>Model: ${computerObj.model}</div>
                              <div>Memory: ${computerObj.specs.memory} GB</div>
                              <div>Hard drive space: ${computerObj.specs.hardDrive}</div>
                              <div>Processor speed: ${computerObj.specs.processor} Ghz</div>
                             </section>`

    return computerSection
}

const stringCompSection = computerObjToHTML(computer)

console.log(stringCompSection)