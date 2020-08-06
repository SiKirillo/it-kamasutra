import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
    addItem: (title: string) => void,
    inputPlaceholder: string
}

export function AddItemForm(props: AddItemFormPropsType) {
    let [title, setTitle] = useState("");

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addItem();
        }
    };

    return <div>
        <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               placeholder={props.inputPlaceholder}/>
        <button onClick={addItem}>Add</button>
    </div>
}