import React,{Component, useState} from 'react';

let Ninja = (props)=>{
    
    let [ninjaName,setNinjaName]=useState("");
    let [imgUrl,setImageUrl]=useState("");
    let [favColor,setFavColor]=useState("");
    let [graduated,setGraduated]=useState(false);
    // let listOfNinjas=[]; we need to make this a state variable so we have each ninja submitted from form:

    let [listOfNinjas,setListOfNinjas] = useState([])


    let CreateNinja=(e)=>{
        e.preventDefault();
        let ninjaObj ={          // you don't have to use : samename if you want the object to have the same name key pairing. 
            ninjaName:ninjaName,
            imgUrl:imgUrl,
            favColor:favColor,
            graduated
        }
        console.log(ninjaObj);
        setListOfNinjas([...listOfNinjas,ninjaObj])  //this is how you update a state array varialbe with more info into the array in this case we are adding an object
        
    }

    let toggleGaraduation = (idx)=>{
        //got ninja to manipulate
        const NinjaToBeChanged = {
            ...listOfNinjas[idx]
        }
        console.log(NinjaToBeChanged);
        //toggle graduation
        NinjaToBeChanged.graduated = !NinjaToBeChanged.graduated       

        //want to put obj back in place
        setListOfNinjas([
            ...listOfNinjas.slice(0, idx),
            NinjaToBeChanged,
            ...listOfNinjas.slice(idx + 1)
        ])
        console.log(listOfNinjas);
        // let [...cpListOfNinjas ]=listOfNinjas;
        // console.log(idx);
        // console.log(cpListOfNinjas);
        // cpListOfNinjas[idx].graduated=!cpListOfNinjas.graduated;
        // setListOfNinjas(cpListOfNinjas)
        // console.log(listOfNinjas);
        
    }

    return(
        <>
        <form className='container-sm col-2' onSubmit={CreateNinja}>
            <div className="form-group">
                <label htmlFor="">Ninja Name</label>
                <input type="text" className='form-control' onChange={(e)=>setNinjaName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">image Url</label>
                <input type="text" className='form-control' onChange={(e)=>setImageUrl(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Favorite Color</label>
                <input type="text" className='form-control' onChange={(e)=>setFavColor(e.target.value)}/>
            </div>
            <input type="submit" value="Create Ninja" />
        </form>
        <hr />
        <h3>Here is our list of Ninjas</h3>
        <div className='d-inline-flex'>
        {
            listOfNinjas.map((ninja,i)=>{  //this says make ninja an instance of each thing in list of ninjas and then do :
                return(
                    <div key={i} style={{border:"1px solid black",backgroundColor: ninja.favColor }}>
                    <h1>{ninja.ninjaName}</h1>  
                    <p><img src={ninja.imgUrl} alt="" width='100px' />  </p>
                    <p>favorite Color: {ninja.favColor}</p>
                    <p>Graduate<input type="checkbox" onClick={()=>toggleGaraduation(i)}  /></p>
                    </div>
                )
            })
        }
        </div>

        
        </>
    );

        
}

export default Ninja;