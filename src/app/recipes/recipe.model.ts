import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name ?: string;
    public description ?: string;
    public imagePath ?: string;
    public ingredients ?: Ingredient[];

    constructor(name :string, desc : string, imgePath : string, ingredients : Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imgePath;
        this.ingredients = ingredients;
    }
}