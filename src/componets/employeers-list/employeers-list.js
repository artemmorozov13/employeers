import EmployeersListItem from "../employeers-list-item/employeers-list-item";
import "./employeers-list.css";

const EmployeersList = ({data, onDelete, onToggleProp}) => {
    return(
        <ul className="app-list list-group">
            {data.map(item => {
                return <EmployeersListItem 
                    key={item.id}
                    {...item}
                    onDelete={() => onDelete(item.id)}
                    onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))}
                />
            })}
        </ul>
    )
}

export default EmployeersList;