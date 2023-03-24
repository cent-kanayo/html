// function add(num1 = 10, num2 = 20) {
//   const a = num1;
//   const b = num2;
//   const c = a + b;

//   return c;
// }

// const a = add(50, 40);
// console.log(a);

const myFriends = [
  'David',
  'Caleb',
  'Mathew',
  'Mark',
  'Gold',
  'Silver',
  'Gab',
  'Jason',
  'Dwayne',
];
// const [a, b, c, ...rest] = myFriends;
// const woleFriends = [...myFriends];
// console.log(rest);

const numbers = [2, 4, 6, 8];

// const [a, b] = numbers;

// const result = a * d;

const obj = {
  name: 'Wole',
  Sex: 'Male',
  age: 25,
  hobbies: ['Football', 'Dancing', 'Cooking'],
  collection: {
    Jeans: 'Dior',
    Shirt: 'Fendi',
    shoes: ['Air Force 1', 'Nike', 'Off-White'],
  },
};

const {
  name,
  age,
  Sex: gender,
  // hobbies: [a, b, c],
  collection: {
    Jeans,
    Shirt,
    shoes: [ab, cd, ef],
  },
} = obj;
// const [a, b, c] = hobbies;
// console.log(name, age, gender, a, b, c, Shirt, Jeans, ab, cd, ef);

const myObj = {
  title: 'Coding',
  class: 'Coding class',
  school: 'Cyclobold',
};
const woleObj = {
  title: 'Sleeping',
  title: 'Cooking',
  ...myObj,
};
const data = {
  fullname: 'John Doe',
  age: 54,
  hobbies: ['Rapping', 'Basketball', 'Skating'],
  experiences: {
    places: {
      mountains: ['Kili', 'Everest', 'Eden'],
      rating: {
        fun: 4,
        environment: 8,
        people: 9,
      },
    },
    adventures: ['Sky diving', 'Turbo jetting', 'Mountain climbing'],
  },
};
