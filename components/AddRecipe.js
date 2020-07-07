import React, {Component,useState,useEffect} from 'react'
import PropTypes from "prop-types"



class AddRecipe extends Component{

  static defaultProps = {
    onClose(){},
    onSave(){},
    name: "john doe"
  }

  constructor(props){
    super(props);

    this.state={
      title: '',
      description: '',
      ingredients: [''],
      img: '',
    };

  }

  handleNewIngredient = () =>{
    const {ingredients} = this.state;
    this.setState({ingredients: [...ingredients,'']})
  }

  handleChangeIng = (e) =>{
    try{
      const index = Number(e.target.name.split('-')[1]);
      const ingredients = this.state.ingredients.map((ing, i) =>(
        i ===index ? e.target.value : ing
      ));

      this .setState({ingredeints});
    }
    catch(error){
      console.log(`something went wrong ${error}`)
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSave({...this.state}); //saves new Recipe

    //initial inputs
    this.setState({
      title: '',
      description: '',
      ingredients: [''],
      img: '',
    })
  };

  render(){
      const {title,description,ingredients,img} = this.state;
      const {handleChange,onClose,onSave} = this.props;
      let inputs = ingredients.map((ing, i) =>(
        <div key={`ingredient-${i}`}>
        {i + 1}.
          <input
            type='text'
            autoComplete='off'
            value={ing}
            name={`ingredient - ${i}`}
            placeholder='ingredient'
            size={45}
            onChange={this.handleChangeIng}
          />
        </div>
      ))

      return (
       <div className='add-recipe'>
        <span onClick={onClose}> x </span>
        <form onSubmit={this.handleSubmit} >
          <input
            type='text'
            name='title'
            onChange={this.handleChange}
            autoComplete="off"
            placeholder='Title'
          />
          <div>

         {inputs}

          <button type='button' onClick={this.handleNewIngredient}>
          +
          </button>
          </div>

          <input
            type='text'
            name='description'
            onChange={handleChange}
            autoComplete="off"
            placeholder='Description'
            
          />

          <input
            type='text'
            name='image'
            onChange={handleChange}
            autoComplete="off"
            placeholder='Paste image url'
          />
          <button type='submit'>Save Recipe</button>
        </form>
      </div>
    )
  }
  
}
/*
function AddRecipe(props){

  const {handleChange} = props

  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [ingredient, setIng] = useState(['']);
  const [description, setDesc] = useState('');


  const handleNewIngredient = () =>{
    const {ingredients} = this.state;
    this.setState({ingredients: [...ingredients,'']})
  }

  const handleChangeIng = (e) =>{
    const index = Number(e.target.name.split('-')[1]);
    const ingredients = this.state.ingredients.map((ing, i) =>(
      i ===index ? e.target.value : ing
    ));

    this .setState({ingredients});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSave({...this.state}); //saves new Recipe

    //initial inputs
    this.setState({
      title: '',
      description: '',
      ingredients: [''],
      img: '',
    })
  };


  return (
   
    <div className='add-recipe'>
      <span onClick={}> x </span>
      <form onSubmit={}>
        <input
          type='text'
          name='title'
          onChange={handleChange}
          autoComplete="off"
          placeholder='Title'
        />
        <div>
        <input
          type='text'
          name='ingredient'
          onChange={handleChange}
          autoComplete="off"
          placeholder='Ingredient'
        />
        <button type='button' onClick={}>
        +
        </button>
        </div>

        <input
          type='text'
          name='description'
          onChange={handleChange}
          autoComplete="off"
          placeholder='Description'
        />

        <input
          type='text'
          name='image'
          onChange={handleChange}
          autoComplete="off"
          placeholder='Paste image url'
        />
        <button type='submit'>Save Recipe</button>
      </form>
    </div>
  )
}
*/
export default AddRecipe;