// Let and var differences

// Let is blocked scope and var is function scoped..Example:


function check(){

	let a=50;

	if(true)
	{
		let a=40;
		console.log(a)
	}

	console.log(a);


} // Ans: a=40 and a=50 -> so we can understand that let block a depend kore and block theke ber hoye ager value ai return kore.

 function check(){

	var a=50;

	if(true)
	{
		var a=40;
		console.log(a)
	}

	console.log(a); 


} //Ans: 40 and 40     var -> function a updated jei value thake oitai return kore cz its function depended.

//Const Var

const name="Shamim"



// Destruction of object 

//previous way :

const a={ fname:"Shamim",lname:"Rahman",age:25,Subject:"CSE"}

//fetch korar way-> 

a.fname,a.lname,a.age,a.Subject //amra age aivabe kono object k fetch kortam ja motamoti lengthy

//ES6 ashar pore

const{fname,lname,age}=a   //ekhn amra sohojei fname, lname,age likhe object fetch korte pari..just aituku likhe.

fname // return fname

Subject //doesnot return anything cz amra second bracket a Subject key rakhi nai. 



//String Template

//amra age jokhn kono string likhtam and object k fetech kortam tokhon string formate perfectly korte gele valoi code kora lagto-> Example"

let show="My name is"+fname+lname

//ANs: "My name isShamimRahman"

//But ES6 a String Template ashar pore ai kaj ta onek easy hoye gese

let shows=`My name is ${fname} ${lname}`  //$ sign means= $ sign bolte object k bujano hoitese and aita document.getElementbyID er short form.Time Consuming

//ANS:"My name is Shamim Rahman"


// Default Argument

//previous Way

function drivingage(age) //Function Parameter
{
	return age;
}

drivingage(18) //function argument

//ES6 a default argument ashar por amra function parameter er moddhei value dite pari

function drivingage(age=18) //default argument
{
	return age;
}
drivingage() //function call and amra aikhn eo "drivingage()" onno value dite pari jeita dibo oitai show korbe 


//Object Properties

//Suppose amra kono object k agei define korlam thn oi object er value k amra new kono object a use korte parbo 

const b={firstname:fname,lastname:lname,age:age} 
b  //ager object er value ai return korbe

//ES6 ashar por amra aro shorcut ager obj value use korte pari

const b={fname,lname,age} 
b  //ager object er value ai return korbe


//Arrow Function or Fat Arrow Function 

//JS a normally amra jeivabe function likhe

function addsum(a,b)
{
	return a+b
}

addsum(5,5); //ans-10

//Fat Arrow Function

let addsum=(a,b)=>{return a+b}
addsum(5,5) //ans -10


//So what we learn in  ES6

//Var and let 
//const
//Function Arguments -> function age(a=18)
//String Template usng $ sign to fetch objext ` my name is ${name}`
//Function Properties -> ager function er value use kora jay 
//destruction of object // using const {name ,age}=info-> here info is pre define object name where name and age existed.











 
