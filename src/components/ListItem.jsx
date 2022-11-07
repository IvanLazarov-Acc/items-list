

export const ListItem = ({id, label, handleDown, handleUp}) => {
    return (<div>
        {label}
        <button value={id} onClick={handleUp}>Up</button>
        <button value={id} onClick={handleDown}>Down</button>
    </div>)
}