import PropTypes from "prop-types"

function List(props) {

    /* const fruits = [
         { id: 1, name: "apple", calories: 95 },
         { id: 2, name: 'orange', calories: 45 },
         { id: 3, name: 'banana', calories: 105 },
         { id: 4, name: 'coconut', calories: 159 },
         { id: 5, name: 'pineapple', calories: 37 }
     ]
     
     //fruits.sort((a, b) => a.name.localeCompare(b.name));
     //fruits.sort((a, b) => a.calories - b.calories); // numeric
 
     const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
 
     const listItemsLowCal = lowCalFruits.map(lowCalFruit =>
         <li key={lowCalFruit.id}>
             {lowCalFruit.name} ------ calorias:{lowCalFruit.calories}</li>)
 
     const listItems = fruits.map(fruit =>
         <li key={fruit.id}>{fruit.name} ------ calorias:{fruit.calories}</li>)
 
     ---------------------------------------------------------------------------
     */
    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map(item =>
        <li key={item.id}>
            {item.name} ------ calorias:{item.calories}
        </li>
    )

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    )
}
List.defaultProps = {
    category: "Category",
    item: [],
}
List.propTypes = {
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}
export default List