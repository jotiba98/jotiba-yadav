import React from 'react';
const Recipeitem=(props)=>{
    const{name,image,ingredientLines}=props;
return(
    <div class="col-md3">
            <div class="card py-2">
                <img src={image} className="img-fluid w-50 mx-auto rounded-circle"/>
                <div class="card-body">
                   <h5>{name}</h5> 
                </div>
                <ul class="list-group list-group-flush">
                    {ingredientLines.map(ingredient=>(
                    <li class="list-group-item">{ingredient}</li>))}
                </ul>
            </div>
        </div>
)
}
export default Recipeitem;