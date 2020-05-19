import React from "react";
//We can't modify props



function ToDoItem(props) {
    
    //const [isDone,setIsDone] = useState(false);

    // function handleClick() {
    //     //setIsDone((prevValue) => !prevValue);
    // }
    
    return (<div onClick={ () => {
        props.onChecked(props.id)
        }}>
                <li>{props.text}</li>
            </div>);
}

export default ToDoItem;