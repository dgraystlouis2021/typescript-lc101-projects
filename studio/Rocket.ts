import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket{
    totalCapacityKg:number;
    name:string;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];
    constructor(name:string,totalCapacityKg:number){
        this.totalCapacityKg=totalCapacityKg;
        this.name=name;
    }
    sumMass( items: Payload[] ): number{
        //Returns the sum of all items using each item's massKg property
        let sum:number=0;
        for(let i=0;i<items.length;i++){
            sum+=items[i].massKg;
        }
        return sum;
    }
    currentMassKg(): number{
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        let massAstronauts:number=this.sumMass(this.astronauts);
        let massCargo:number=this.sumMass(this.cargoItems);
        return massAstronauts+massCargo;
    }
    canAdd(item: Payload): boolean{
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
        return false;
    }
    addCargo(cargo: Cargo): boolean{
        //Uses this.canAdd() to see if another item can be added.
        //If true, adds cargo to this.cargoItems and returns true.
        if(this.canAdd(cargo)){
            (this.cargoItems).push(cargo);
            return true;
        }
        return false;
    }
    addAstronaut(astronaut: Astronaut): boolean{
        //Uses this.canAdd() to see if another astronaut can be added.
        //If true, adds astronaut to this.astronauts and returns true.
        if(this.canAdd(astronaut)){
            (this.astronauts).push(astronaut);
            return true;
        }
        return false;
    }
}