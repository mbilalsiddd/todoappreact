import { usestate } from 'react';
import './App.css';

function App() {
  let [txt, settxt] = usestate("abc");
  let [list, setlist] = usestate([]);

  let add = () => {
    list.push(txt);
    console.log(list)
    setlist([...list])
  }
  let edititem = (e) => {
    var newval = prompt("edit");
    console.log(newval)
    // newval = list.filter(((elem, id) => {
    //   return elem !== e;
    // })
    setlist(newval)
  }
  let deleteitem = (id) => {
    // console.log(id)
    let updateitems = list.filter((elem, ind) => {
      return ind !== id;
    })
    setlist(updateitems);
  }
  let removeall = () => {
    setlist([]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo app</h1>
        <div>
          <input onchange={(e) => {
            settxt(e.target.value)
            // console.log(txt)
          }} />
          <button otherclass="hi" click={add} btnvalue="Add Item" />

        </div>
        <button btnvalue="Delete All" click={removeall} otherclass="hi" />

        <br />

        <div>
          {list.map((e, i) => {
            return <div className='item' key={i}>{e}
              <button btnvalue="Edit" click={edititem} otherclass="hi" />
            </div>
          })}
        </div>


      </header>
    </div>
  );
}



export default App;
