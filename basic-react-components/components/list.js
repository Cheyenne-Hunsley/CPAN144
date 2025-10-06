import React, { useState } from "react";

//Task 4

export default function List() {

    const items = [{name:'Item - 1', status:'active'},
        {name:'Item - 2',status:'inactive'},
        {name:'Item - 3',status:'active'},
        {name:'Item - 4',status:'inactive'}];
    const [NewItems, SetNewItems] = useState(items);
    const handleClickInactive = () => {
        SetNewItems(items.filter(item => item.status == 'inactive'));
    };
    const handleClickActive = () => {
        SetNewItems(items.filter(item => item.status == 'active'));
    };

    return (
        <div>
            <button onClick={handleClickActive}>Show Active</button><br></br>
            <button onClick={handleClickInactive}>Show Inactive</button>
        <ul>
            {NewItems.map((item, index) => (<li key={index}>{item.name}</li>))}
        </ul>
        </div>
    );
}