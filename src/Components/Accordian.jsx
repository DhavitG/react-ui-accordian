import { useState } from "react"
import data from "../data.js"

export default function Accordian() {
	const [selected, setSelected] = useState(null)

	function handleSingleSelection(currentId) {
		console.log(currentId)
		setSelected(prev => prev === currentId ? null : currentId)
	}

    return (
        <div className="wrapper">
					<div className="accordian">
						{
							data && data.length > 0 ? 
							data.map((dataItem) => (
								<div className="item" key={dataItem.id}>
									<div onClick={() => handleSingleSelection(dataItem.id)} className="title">
										<h3>{dataItem.question}</h3>
										<span>+</span>
									</div>
									{
										selected === dataItem.id ? 
										<div className="content">{dataItem.answer}</div> : null
									}
								</div>
							)) : <div>No data</div>
						}
					</div>
        </div>
    )
}