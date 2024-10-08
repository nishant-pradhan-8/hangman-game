import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (selectedCat)=>{
    const [categories, setCategories]=useState([])
    const [categoryQn, setCategoryQn] = useState([])
    const apiUrl = "https://raw.githubusercontent.com/nishant-pradhan-8/hangman-game/master/src/data/db.json"
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get(apiUrl)
                const data = response.data
                const cat = data.categories;
                const arrCategories = Object.keys(cat)
                const selectedCategoryQns = cat[selectedCat];
                setCategoryQn(selectedCategoryQns)  
                setCategories(arrCategories)
            }catch(err){
            console.log(err.message)
        }
        
       
    }
    fetchData();
},[selectedCat])

    return {categories, categoryQn}
}
export default useFetch;
