  function areaofTriangle(){
    let base = prompt("What is the base of the triangle");
    let height = prompt("what is the height of the Triangle");
    if (base == 8)
    if (height ==7){
    alert(base*height/2)
      } else {
        return confirm('Pay attention to picture');
      }
    }

    function areaofRectangle(){
      let lenght = prompt("What is the lenght of the Rectangle");
      let width = prompt("What is the Width of the Rectangle")
      if (lenght == 5)
      if (width==7){
        alert(lenght*width);
        } else {
          return confirm('Pay attention to picture');
        }
      }

      function areaofTrapezoid(){
        let b1 = prompt("What is Base1 of the Trapezoid");
        let b2 = prompt("What is Base2 of the Trapezoid");
        let height = prompt("What is the height of the Trapezoid")
        if (b1 == 10)
        if (b2 == 16)
        if (height==8) {
        alert(height*(b1/2+b2/2))
          } else {
            return confirm('Pay attention to picture');
          }
        }

        function areaofCircle(){
          let radius = prompt("What is the Radius of the Circle");
          if (radius == 5) {
              alert(3.14*radius**2)
            } else {
              return confirm('Pay attention to picture');
            }
          }