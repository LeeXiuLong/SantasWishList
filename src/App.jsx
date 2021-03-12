import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from './redux/actions';


const App = () => {

    //hooks assignments
    //wishlist hooks assignment
    const wishList = useSelector(state => state.wishList)
    //set item property for state to be default empty string
    const [item, setItem] = useState("")
    //set rendererer to trigger re renders
    const [reRender, setRender] = useState(false)
    //hooks redux assignment
    const dispatch = useDispatch()

    //handle change of input on an input box
    const handleChange = (e) => {
        e.preventDefault();
        setItem(e.currentTarget.value)
    }

    //add an item to the wishlist if it is not an empty string or already in the list
    const handleAdd = (e) => {
        e.preventDefault();
        if (checkValidItem()) {
            dispatch(addItem(item))
            setItem("")
        }
    }

    //delete an item from the wishlist
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteItem(e.target.innerText))
        setRender(reRender ? false : true);
    }

    //delete all items off the wishlist and alert that the wishlist was submitted
    const handleSubmit = () => {
        if (wishList.length) {
            while (wishList.length) {
                dispatch(deleteItem(wishList[0]));
            }
            alert("Wish list submitted to Santa");
            setRender(reRender ? false : true);
        } else {
            alert("There is nothing in the wishlist!");
        }
    }

    //make sure the item is not in the list already and not an empty string
    const checkValidItem = () => {
        if (item.trim() === "") {
            alert("Please enter a wish!")
            setItem("")
            return false
        } else if (wishList.includes(item)) {
            alert("This item is already in the wishlist!")
            return false
        } else {
            return true
        }
    }

    //create li elements of the wishlist
    const wishListItems = wishList.map((listItem, index) => {
        return <li className="wishlist-item" onClick={handleDelete} key={index}>{listItem}</li>
    })


    return (
        <div className= "wishlist-container">
            <h1 className= "wishlist-header">MY WISHLIST</h1>
            <ul className="wishlist">
                {wishListItems}
            </ul>
            <form className="wishlist-form" onSubmit={handleAdd}>
                <input className = "input-box"
                    type="text"
                    value={item}
                    onChange={handleChange}
                />
                <button type="submit" className="add-button">Add</button>
            </form>
            <button onClick={handleSubmit} className="submit-button">Submit</button>
        </div>
    )
}

export default App