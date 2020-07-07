import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from "./components/NavBar";
import AddRecipe from "./components/AddRecipe";
import RecipeList from "./components/RecipeList";
import ErrorCheck from "./components/ErrorCheck"
import "./style.css";
import "./stylesheet.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipe: [
        {
          id: 0,
          title: "Coconut Rice",
          description:
            "Add oil and salt to boiling water. Add grated Coconut.Finally add rice",
          ingredients: ["rice", "Coconut", "oil", "salt"],
          img:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/03/coconut-rice-1-500x447.jpg"
        },
        {
          id: 1,
          title: "Chicken Biriani",
          description:
            "Add oil and salt to boiling water. Add grated Coconut.Finally add rice. ",
          ingredients: ["Chicken", "corriander", "oil", "salt", "lemon"],
          img:
            "https://www.camberwellcurryhouse.com.au/wp-content/uploads/2019/05/Chicken-Biryani.jpg"
        },
        {
          id: 2,
          title: "Butternut Chapati",
          description:
            "Add oil and salt to boiling water. Add cooked butternut.",
          ingredients: ["Flour", "water", "oil", "salt"],
          img: "https://i.ytimg.com/vi/qRTpxmZRImc/maxresdefault.jpg"
        },
        {
          id: 3,
          title: "Pilau",
          description:
            "Add oil, salt and pilau masala to boiling water. Add grated Coconut.Finally add rice",
          ingredients: ["Rice", "water", "oil", "salt", "Pilau masala"],
          img: "https://i.ytimg.com/vi/7JCF_di4las/maxresdefault.jpg"
        }
      ],
      nextRecipeId: 4,
      isClicked: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  /*
  handleClick = e => {
    e.preventDefault();

    this.setState({
      isClicked: true
    });
  };
  */
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  handleSave = recipe =>{
    const {nextRecipeId} = this.state;
    this.setState((prevState,props) => {

      const newRecipe = {...recipe, id: nextRecipeId};

      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }

    });

  }

  render() {
    const { isClicked } = this.state;
    return (
      <div className="recipe-app">
        <ErrorCheck>
          <NavBar clicked={this.handleClick} />
        
          {isClicked ? <AddRecipe handleChange={this.handleChange} onSave={this.handleSave} /> : null}
        
          <RecipeList
            recipes={this.state.recipe}
            clicked={this.state.isClicked}
          />
        </ErrorCheck>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
