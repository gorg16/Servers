// import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
 public name: string;
 public description: string;
 public imagePath: string;
 public serverType: string;
 public serverStatus: string;
 constructor(name: string, desc: string, imagePath: string, serverType: string, serverStatus: string) {
   this.name = name;
   this.description = desc;
   this.imagePath = imagePath;
   this.serverType = serverType;
   this.serverStatus = serverStatus;
 }
}
