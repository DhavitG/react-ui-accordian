import { useState } from "react"
import data from "../data.js"

export default function Accordian() {
	const [selected, setSelected] = useState(null)
	const [enableMultiSelection, setEnableMultiSelection] = useState(false)
	const [multiple, setMultiple] = useState([])

	function handleSingleSelection(currentId) {
		console.log(currentId)
		setSelected(prev => prev === currentId ? null : currentId)
	}

	function handleMultiSelection(currentId) {
		let copyMultiple = [...multiple];
		const findIndexOfCurrentId = copyMultiple.indexOf(currentId);

		if(findIndexOfCurrentId === -1) {
			copyMultiple.push(currentId)
		}
		else {
			copyMultiple.splice(findIndexOfCurrentId, 1)
		}

		setMultiple(copyMultiple)
	}

    return (
        <div className="acc-wrapper">
					<button onClick={() => setEnableMultiSelection(prev => !prev)}>Enable Multiple Selection</button>
					<div className="accordian">
						{
							data && data.length > 0 ? 
							data.map((dataItem) => (
								<div className="item" key={dataItem.id}>
									<div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
										<h3>{dataItem.question}</h3>
										<span>+</span>
									</div>
									{
										enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && 
										<div className="content">{dataItem.answer}</div> : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
									}
									{/* {
										selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
										<div className="content">{dataItem.answer}</div>
										: null
									} */}
								</div>
							)) : <div>No data</div>
						}
					</div>
        </div>
    )
}