window.addEventListener('load',() => document.querySelector('.preloader').classList.add('hidePreloader'))

const CreateCars = (()=> {
    // car data
    const cars = []
    // car class
    class Car{
        constructor(make,country,img,special,model,price,type,trans,gas){
            this.make=make;
            this.country=country;
            this.img=img;
            this.special=special;
            this.model=model;
            this.price=price;
            this.type=type;
            this.trans=trans;
            this.gas=gas;
        }
    }

    // car creation function
    function makeCare(make,country,img = 'img/c1.jpeg',special=true,model='new model',price=10000,type = 'sedan',trans = 'automatic',gas='50'){
        const car = new Car(make,country,img,special,model,price,type,trans,gas)
        cars.push(cars)
    }
    
    // produce cars
    function produceCars(){makeCare('chevy','american','img/c5.jpeg',false);
        makeCare('chevy','american','img/c6.jpeg',true);
        makeCare('chevy','american','img/c7.jpeg',true);
        makeCare('mercedes','german','img/c2.jpeg');
        makeCare('chevy','american','img/c3.jpeg',false);
        makeCare('chevy','american','img/c4.jpeg',false);
        makeCare('chevy','american','img/c5.jpeg',false);
        makeCare('chevy','american','img/c6.jpeg',true);
        makeCare('chevy','american','img/c7.jpeg',true);
        makeCare('chevy','american','img/c8.jpeg',false);
        makeCare('chevy','american','img/c9.jpeg',true);
        makeCare('chevy','american','img/c10.jpeg',undefined);
        
    }
    produceCars();

})