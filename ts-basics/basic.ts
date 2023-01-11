//primitive type: number, boolean,string
//non primitive type: array, object
//function types and parameteers


//Primitive

let age:number;
age=1;

let uname: string;
uname='rahul'

//non primitive

let hobbies: string[];

hobbies=['rae','da']

//array of object type definition
let person:{
    name?:string;
    age:number
}[];
person=[
    {
name:'rahul',
age:29
}
]

//union type

let unname:string | boolean='sdass'

//type alias

type Person={
    name:string,
    age:number
}

let test1:Person;  //object type
let test2:Person[]; // arrayof object type


//generecis

const insert=<T>(array:T[],value:T)=>{
    const newarray=[value,...array];
    return newarray
}

const demo=[1,1,2];

const updated=insert(demo,-1);

// updated[0].split('')