# Install

```
npm install @ngrx/store --save

npm install   @ngrx/effects
 
ng g c      components/cart
ng g c      components/cart-list

ng g c      components/product-list

```

# NGRX - Functioanl approach, Pure functions

-- immutable
-- given same input, there must same output

OOP vs Functional 

class Calculator {
    int sum = 0;
    int add(int value) {
        sum += value; // 1 line code, busienss logic
        return sum;
    }
}

c = new calculator()

// impure function
c.add(10); // 10
c.add(10); // 20

c.add(10); // 20
c.add(10); // 20
c.add(10); // 20
c.add(10); // 20
c.add(10); // 20
c.add(10);  
c.add(10);  
c.add(5);  ?? - unpredictable

NGRX - Redux

pure function - given same arg as input, get same output 

function add(sum, value) {
    return sum + value
}

add(0, 10); // 10

add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); 



