APIs

JSOM 

send data from server to client 
example:
{
    "name": "Jane Doe"
    "age": 30
    "isStudent": false
}


JSON vs Javascript Object:

>JSON
>
>Quotes: Double quotes
>
>Functions allowed?	❌ No
>
>Comments?	❌ No	✅
>
>Valid in JS?	✅ Yes (parsed)


>JavaScript 
>
>Quotes: Single or double quotes
>
>Functions allowed?	✅ Yes
>
>Comments?	❌ ✅ Yes
>
>Valid in JS? ✅ Yes


### Parse Json String to Javascript Object
const jsonstring = '{"name":"Jane"};
const obj= JSON.parse(jsonString);
console.log(obj.name);


### Convert Javascript objects to JSON string
const obj = { name: "Jane" };
const jsonString = JSON.stringify(obj);

### JSON can represent:
Objects
Arrays
Strings, numbers, booleans, and null


# INTRO TO FETCH, ASYNC/AWAIT and DOM updates