//FACTORY FUNCTION

function createCircle(radius){
    return {
      radius:radius,
      location:{
        x:1,
        y:1
      },
      draw:function(){
        console.log('draw')
      }
    }
  }
  const circle = createCircle(1)

// CONSTRUCTOR FUNCTION

function Circle(radius){
    console.log('this', this);
    this.radius = radius,
    this.location = {
        x:1,
        y:1
        },
        this.draw = function(){
        console.log('draw')
        }
    }
const another = new Circle(1);
