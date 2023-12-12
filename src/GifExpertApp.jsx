import { useState } from "react"
import { AddCaregory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Dragon Ball']);

    const handleAdd = (newCategory) => {
        // condición para evitar duplicidad de category
        if (categories.includes(newCategory)) return;
        //setcategories([...products, 'Four']);
        setcategories([ newCategory, ...categories]);
        //setcategories(pro => [...pro, 'Four']);

    }


  return (
    <>
    <h1>Productos</h1>
    <AddCaregory 
    //setcategories={setcategories} 
    onNewCategory={handleAdd}
    />
     {categories.map(category => (
        <GifGrid key={category} category={category}/>

      ))}
    </>
  )
}
