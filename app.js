//task1 

const currentDay = new date () .getDay ();
currentDay[0] = "კვირა";
currentDay[1] = "ორშაბათი";
currentDay[2] = "სამშაბათი";
currentDay[3] = "ოთხშაბათი";
currentDay[4] = "ხუთშაბათი";
currentDay[5] = "პარასკევი";
currentDay[6] = "შაბათი";

switch (currentDay) {
    case currentDay[0]:
        console.log ("კვირა")
        break;
    case currentDay[1]:
        console.log ("ორშაბათი")
        break;
    case currentDay[2]:
        console.log ("სამშაბათი")
        break;
    case currentDay[3]:
        console.log ("ოთხშაბათი")
        break;
    case currentDay[4]:
        console.log ("ხუთშაბათი")
        break;
    case currentDay[5]:
        console.log ("პარასკევი")
        break;
    case currentDay[6]:
        console.log ("შაბათი")
        break;
}

//task 2


for (let i = 0; step < 100; i++) {
    console.log(+ i);
  }

//task 3


let i=0;
while (i<50) {
    console.log(+i);
}

//task 4

let i=0;
do{
    i++;
    console.log (+i);
} 
while (i<150);

//task 5

const arr = [6, 3, 7];
arr.foo = 'hello';

for (let i=0 i<10000 ) {
   console.log(+i); 
   numbersArray.push(i*i)
}

