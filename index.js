class Polygon{
  constructor(array){
    this.sides = array;
  }
  
  get countSides(){
    return this.sides.length;
  }
  
  get perimeter(){
    let count=0;
    this.sides.forEach(item=>count+=item);
    return count;
  }
}

class Triangle extends Polygon{
  get isValid(){
    let valid = true;
    if(this.sides.length == 3) {
      let valid
      this.sides.forEach()
    }
    else return false;
  }
}

class Square extends Polygon{
  get isValid(){
    if(this.sides.length == 4) return true;
    else return false;
  }
  
  get area(){
    return this.sides[0]*this.sides[0];
  }
}