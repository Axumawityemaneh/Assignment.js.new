//find the last element of arrrays.arr1=[3,7,34,90,12]arr2=[true,"green,"where",12,56]
let arr1=[3,7,34,90,12]
console.log('last item', arr1[arr1.length -1]);

let arr2=[true, "green", "where", 12,56]
console.log('last item',arr2[arr2.length -1]);

//write a js program tht will join to array in to a string myPets = ["cow", "bird","snake","dog"];

let myPet=["Cow", "Bird", "Snake", "Dog"]
console.log(myPet.join());

//Write the js to sort array elemrnts in to StringmyPet item sevar arr3 = [-5,9,5,3,2,6,8,4,1]


var arr3=[-5,9,5,3,2,-3,6,8,4,1]
console.log(arr3.sort(function(a,b){
    return a-b}));

    //Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates

let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

       let result= arr.filter((item, index) => arr.indexOf(item) === index);
     console.log(result);

     //Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
     let arr5 = ["the", "way", "x", 4];

      let item = 'food';
      let search = arr5.includes(item);

      if(search) {
        console.log('${item}');
    }
      else{
        console.log('the search was not found');
      }
     

   //Write a JS script to sort the following string:let word = "renniw"
   let word ="renniw";
   let word1 = word.split("").sort().join();
   console.log(word1)

   
      