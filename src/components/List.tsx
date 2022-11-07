import { ListItem } from "./ListItem";
import {FC, useState} from "react";


//objArr = [{id:, label:}]
interface ListArray {
    id:number;
    label:string;
};

// const objArray:ListArray[]= [{id:1, label:"First"}, {id:2, label:"Second"}, {id:3, label:"Thirdth"}, {id:4, label:"Fourth"}, {id:5, label:"Fifth"}]

export const List: FC = () => {
    const [objArray, setObjArray]= useState<ListArray[]>([{id:1, label:"First"}, {id:2, label:"Second"}, {id:3, label:"Thirdth"}, {id:4, label:"Fourth"}, {id:5, label:"Fifth"}]);

    const moveItem = (direction:string, id:number): void =>{
        const indexOfId = objArray.map(object => object.id).indexOf(id);
        let newArray:ListArray[] = [...objArray];
        if(direction==="up"){
            if (indexOfId < 1) {
                // Can't move the 0th item or any item outside the bounds!
                return;
            }
            [newArray[indexOfId - 1], newArray[indexOfId]] = [newArray[indexOfId], newArray[indexOfId - 1]];
           
            setObjArray(newArray);
        }
        else if(direction==="down"){
            if (indexOfId >= newArray.length-1) {
                // Can't move the 0th item or any item outside the bounds!
                return;
            }
            [newArray[indexOfId + 1], newArray[indexOfId]] = [newArray[indexOfId], newArray[indexOfId + 1]];
           
            setObjArray(newArray);
        }
        
    }

    const handleUp = (event: React.ChangeEvent<HTMLInputElement>) =>{
        moveItem("up", parseInt(event.target.value))
    }
    const handleDown = (event: React.ChangeEvent<HTMLInputElement>) =>{
        moveItem("down", parseInt(event.target.value))
    }

    
    return (<div>
       {objArray.map((listItem) => <ListItem key={listItem.id} id={listItem.id} label={listItem.label} handleUp={handleUp} handleDown={handleDown}/>)} 
    </div>)
}