
const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage}) => {
    const handleClick = (e) => {
        const hasChild = e.target.firstChild;
        const taken = hasChild && (hasChild.classList.contains("circle") || hasChild.classList.contains("cross"));    
        if (!taken) {
          if(go === "circle") {
            e.target.firstChild.classList.add("circle")
            handleCellChange("circle")
            setGo("cross")
          }
          if (go === "cross") {
            e.target.firstChild.classList.add("cross")
            handleCellChange("cross")
            setGo("circle")
          }
        }
      }
      
    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className
            } else {
                return cell
            }
        })
        setCells(nextCells)
    }
    return (
        <div className='square' id={id} onClick={!winningMessage && handleClick}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell
