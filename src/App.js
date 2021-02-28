import React, {useState} from 'react';
import './styles/App.scss';
import Listitem from './components/Listitem'
import Pagination from './components/Pagination'

function App() {
const [items, setItems] = useState([]);
const [currentItem, setCurrentItem] = useState({
  text:'',
  key:''
})


function addItem(e){
  e.preventDefault();
  const newItem = currentItem
  if(newItem.text !== ""){
    const newItems = [...items,newItem]
    setCurrentItem({
      text: '',
      key: ''
    })
    setItems(newItems)
  }

}

function deleteHandler(key){
  const filteredArr = items.filter(item=>item.key !== key)
  setItems(filteredArr)
}
  return (
    <>
    <Pagination/>
    <div className="App">
      <header>
        <form action="" id="to_do_form">
        <input
         type="text"
         placeholder="Add task ex. visit bobby tonight"
         value={currentItem.text}
         onChange={(e)=>setCurrentItem({
           text: e.target.value,
           key:Date.now()
         })}
        />
          <button type="submit" onClick={addItem}>Add</button>  
        </form>
        
      </header>
      <Listitem itemArr={items} delete={deleteHandler}/>
    </div>
    
    </>
  );
}

export default App;
