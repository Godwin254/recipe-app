import React, {Component} from 'react'


//Recipe component
const Delete = () =>{
  return(
     <span >delete</span>
  )
}


const Recipe = (props) =>{

  const {img,title,ingredients,description,clicked} = props
  const ing = ingredients.map(ingredient => (<li>{ingredient}</li>));

  return (
    <div className='recipe'>
      <img src={img} alt='image' width='200px' height='200'/>
      <h2>{title}</h2>
      <div>
       <h5>Ingredients :</h5>
      <ul> {ing} </ul>
      </div>

      <div>
      <h5>Instruction :</h5>
      <p>{description}</p>
      </div>
      
     <Delete/>
       
    </div>
  )
}



class RecipeList extends Component{
  constructor(props){
    super(props);

    
  }

  render(){
    const recipes = this.props.recipes.map((r, i) =>(
      <Recipe key={i} {...r}/>
    ))
    
    return (
      <div className="recipe-pane">
        {recipes}
      </div>
    )
  }
}

export default RecipeList;