// // CHAPTER # 1
// // Question 1:

alert("Welcome to my website !!")

// Question 2:

alert("Error! Please enter a valid Password.")

//Question 3:

alert("Welcome to JS Land... \n Happy Coding!!")

//Question 4:

alert(" Welcome to JS Land... ")
alert(" Happy Coding!! ")

//Question 5:
//solved this on console
//alert(" Hello... I can run JS through my web browser's console.")

//Question 6:
//solution in index.html file


//Question 7:
//solution in index.html file

// CHAPTER # 2
// Question 1:

var username;

// Question 2:

var myName = "Khizra Mumtaz";

// Question 3:

 var message;
message = "Hello World!!";
alert (message);

// Question 4:

var student_name = "Jhone Doe";
var student_age = "15 years old";
var student_skill = "Certified Mobile Application Development";

alert(student_name);
alert(student_age);
alert(student_skill);

//Question 5:

var food = "PIZZA";
alert (food+"\n"+food.slice(0,4)+"\n"+food.slice(0,3)+"\n"+food.slice(0,2)+"\n"+food.slice(0,1))

//Question 6:

var email
email = "khizramumtaz09@gmail.com"
alert("My email address is "+email)

//Question 7:

var book =  "A smarter way to learn JavaScript"
alert("I am trying to learn from the book "+book)

//Question 7:

document.write("Yah!! I can write HTML content through JavaScript.")


//Question 9:

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design)

//Chapter 3
//Question 1:

var age = 20;
alert ( "I am "+ age + " years old.")

//Question 2:

var num = 10;
alert ("You have visited this page "+num+ " times.")

//Question 3:

var birthYear = 2000;
document.write("My birth year is "+birthYear+"<br>")

document.write("Datatype of my birthYear is number.")

//Question 4:

var visitor_name = "Johne Doe"
var product_title = " Shoes "
var quantity = 4
document.write("<br>"+visitor_name+" has bougth "+ quantity,product_title+ " from XYZ Clothing store.")

//Chapter 4
//Question 1:

var a,b,c;

//Question 2:

// var _name, $city, myName , country1, _a_
// var 2name , my#password , 44 , for , @city

//Question 3:

document.write("<h1>Rules for naming JS variables</h1>"+"<br>"+"Variable names can only contain number, letter, $ and _.For example $my_1stVariable "+"<br>"+"Variables must begin with a letter , $ or _.  For example $name, _name or name "+"<br>"+"Variable names are case sensitive"+"<br>"+" Variable names should not be JS keywords.")

//Chapter 5
//Question 1:

var a = +prompt("enter 1st no.: ")
var b = +prompt("enter 2nd no.: ")
document.write("Sum of "+a+ " and "+b+ " is "+(a+b)+"<br>")

//Question 2:
var a = +prompt("enter 1st no.: ")
var b = +prompt("enter 2nd no.: ")
document.write("Minus of "+a+ " and "+b+ " is "+(a-b)+"<br>")
document.write("Product of "+a+ " and "+b+ " is "+(a*b)+"<br>")
document.write("Ratio of "+a+ " and "+b+ " is "+(a/b)+"<br>")
document.write("Modulus of "+a+ " and "+b+ " is "+(a%b)+"<br>")

//Question 3:
var value;
document.write("Value after variable declaration is: "+value+"<br>")
value=10;
document.write("Initial value: "+ value+"<br>")
value++
document.write("Value after increment is: "+value+"<br>")
value=value+7
document.write("Value after addition is: "+value+"<br>")
value--
document.write("Value after decrement is: "+value+"<br>")
value= value%3
document.write("The remainder is: "+value+"<br>")

//Question 4:
var cost = 300;
var quantity = 5;
document.write("Total cost of "+quantity+ " tickets is "+(cost*quantity))

//Question 5:

num = +prompt("Enter number: ")
for(var i=1; i<= 10; i++ )
{
    document.write(num+" x "+i+" = "+(num*i)+"<br>")
}

//Question 6:

C_temp = 100 
var F_temp = C_temp*(1.8)+32
document.write(C_temp+ " <sup>o</sup>C is "+F_temp+" <sup>o</sup>F "+"<br>")
C_temp = (F_temp-32) * (5/9)
document.write(F_temp+ " <sup>o</sup>F is "+C_temp+" <sup>o</sup>C ")

//Question 7:

var price_1 = 100
var price_2 = 200
var quantity_1 = 3
var quantity_2 = 4
var shipping_charges = 200
var total = price_1*quantity_1 + price_2*quantity_2 + shipping_charges

document.write("<h1>SHOPPING CART</h1>"+"Price of item 1 : "+price_1+"<br>"+" Ordered quantity of item 1 : "+quantity_1+ "<br>"+" Price of item 2 "+price_2+"<br>"+" Ordered quantity of item 2 : "+quantity_2+"<br>"+"Shipping charges : "+shipping_charges+"<br>"+"Total cost : "+total)

//Question 8:

var total_marks = 500
var marks_oblained = 440
var per = (marks_oblained/total_marks)*100
document.write("<h1>Mark Sheet</h1>"+"<br>"+"Total marks: "+total_marks+"<br>"+"Marks Obtained: "+marks_oblained+"<br>"+"Your percentage is: "+per+" %")

//Question 9:

var dollar = 10
var riyal = 25
var total = dollar*104.80 + riyal*28
document.write("Total Currency in PKR = "+total)

//Question 10:

var num = 4
document.write("result is: "+( ((num+5)*10)/2))

//Question 11:

var c_year = 2020
var b_year = 2001
var age = c_year - b_year
document.write("Current year: "+c_year+"<br> Birth year: "+b_year+"<br>Your age: "+age)

//Question 12:

var radius = 10
var circum = 2*(3.142)*radius
var area = 3.142*radius*radius

document.write("Radius of circle is: "+radius+ "<br>Circumference os circle is: "+circum+"<br>Area of circle is: "+area)

//Question 13:

var fav_snack = "Samosa"
var c_age = 20
var e_age = 45
var snack_per_day = 2
var total = ((e_age - c_age)* 365)*snack_per_day

document.write("You will need "+total+" "+fav_snack+" to last you until the ripe old age of "+e_age)

//Chapter 6 - 9:
//Question 1:

var a=10
document.write("<h3>Result: </h3> <br> Value of 'a' is: "+a+"<br> <br>*******************<br>")
document.write("<br>The value of ++a is: "+(++a)+"<br>Now the value of 'a' is: "+a+"<br><br>")
document.write("<br>The value of a++ is: "+(a++)+"<br>Now the value of 'a' is: "+a+"<br><br>")
document.write("<br>The value of --a is: "+(--a)+"<br>Now the value of 'a' is: "+a+"<br><br>")
document.write("<br>The value of a-- is: "+(a--)+"<br>Now the value of 'a' is: "+a+"<br><br>")

//Question 2:

var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
//--a;    = 1
// --a - --b;    = 1 - 0 = 1
//--a - --b + ++b;   = 1 - 0 + 1 = 2
//--a - --b + ++b + b--;    = 1 - 0 + 1 + 1 = 3

document.write(" a is: "+a+"<br> b is: "+b+"<br> Result is: "+result)

//Question 3:

var user = prompt("Enter your name: ")
alert("welcome "+user+ " to our page !!")

//Question 5:

var num = +prompt("Enter a number for table: ")
if(num == ""){
    for(var i=1; i<= 10; i++ )
{
     document.write(5+" x "+i+" = "+(5*i)+"<br>")
}}

else {
    for(var i=1; i<= 10; i++ )
    {
         document.write(num+" x "+i+" = "+(num*i)+"<br>")
    } 
}


//Question 6:
var sub1=prompt("Enter 1st subject name: ")
 var mark1 = +prompt("Enter "+sub1+ " marks: ")
 var sub2=prompt("Enter 2nd subject name: ")
 var mark2 = +prompt("Enter "+sub2+ " marks: ")
 var sub3=prompt("Enter 3rd subject name: ")
 var mark3 =+ prompt("Enter "+sub3+ " marks: ")
 var total = 100
document.write("<h2>Mark Sheet</h2><br> <table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+sub1+"</td><td>100</td><td>"+mark1+"</td><td>"+((mark1/100)*100)+"</td></tr><tr><td>"+sub2+"</td><td>100</td><td>"+mark2+"</td><td>"+((mark2/100)*100)+"</td></tr><tr><td>"+sub3+"</td><td>100</td><td>"+mark3+"</td><td>"+((mark3/100)*100)+"</td></tr><tr><td></td><th>300</th><th>"+(mark1+mark2+mark3)+"</th><th>"+(((mark1+mark2+mark3)/300)*100)+"</th></tr></table>")
  
//Chapter 9 - 11:
//Question 1:

var city = prompt("enter city name: ")
if(city === "karachi" || city === "Karachi")
{
    alert("WELCOME TO THE CITY OF LIGHTS !!!")
}

else{}

//Question 2:

var gender = prompt("enter gender : ")
if(gender === 'male'){
    alert("GOOD MORNING SIR!!!")
}
else if(gender === 'female')
{
    alert("GOOD MORNING MA'AM")
}

//Question 3:

var color = prompt("Enter the colour of traffic signal: ")
if(color === 'Red')
{
alert("Must Stop")
}
else if(color === 'Yellow')
{
    alert("Ready to move ")
}
else if(color === 'Green')
{
    alert("Move now ")
}

//Question 4:

var fuel_level = +prompt("Enter fuel level in liters: ")
if(fuel_level < 0.25){
    alert("Please refill the fuel in your car!!!")
}
else {
    alert("Fuel level is OK..")
}

//Question 5:

//The condition is true
var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
 
//the condition is not true
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 

var c = 12;
//the condition is not true
 if (c++ === 13){ alert("condition 1 is true"); } 
//The condition is true
if (c === 13){ alert("condition 2 is true"); } 
//The condition is not true
if (++c < 14){ alert("condition 3 is true"); }
//The condition is true
 if(c === 14){ alert("condition 4 is true"); } 
 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
//The condition is not true
if (totalCost === laborCost + materialCost)
{ alert("The cost equals"); } 
 
//The condition is true
if (true){ alert("True"); }
//The condition is not true
if (false){ alert("False"); }

//The condition is true
if("car" < "cat")
{ alert("car is smaller than cat");}

//Question 6:

var obtained_marks = +prompt("enter marks obtained in 3 subjects: ")
var total_marks = +prompt("enter total marks of 3 subjects: ")
var per = (obtained_marks/total_marks)*100
document.write("<h1> <b> Mark Sheet </b> </h1> <br> <br> Marks Obtained: "+obtained_marks+"<br>Total Marks: "+total_marks+"<br>Percentage: "+per+" %")
if( per >=80)
{
document.write("<br>Grade: A+1 <br> Remarks: Excellent")
} 
 
else if(per >= 70)
{
    document.write("<br>Grade: A <br> Remarks: Good")
}

else if(per >= 60)
{
    document.write("<br>Grade: B <br> Remarks: You need to improve")
}
else if(per < 60)
{
    document.write("<br>Grade: Fail <br> Remarks: Sorry")
}

//Question 7:

var num1 = +prompt("Enter a number from 1 to 10 : ")
var num2 = 8

if(num1 === num2)
{
    alert("Bingo! Correct answer.")
}
else if(num1+1 === num2)
{
    alert("Very close to the number.")
}

//Question 8:

var num = +prompt("enter a number: ")
if(num%3 == 0)
{
    alert("number you entered is divisible by '3'")
}

//Question 9:

var num = +prompt("enter a number: ")
if(num%2 == 0)
{
    alert("number you entered is EVEN")
}
else {
    alert("number you entered is ODD")
}

//Question 10:

var t = +prompt("enter temperature : ")
if(t > 40)
{
    alert("Its too hot outside.")
}
else if(t > 30)
{
    alert("The Weather today is Normal.")
}
else if(t > 20)
{
    alert("Today’s Weather is cool")
}
else if(t > 10)
{
    alert("OMG! Today’s weather is so Cool")
}

//Question 11:

var n1 = +prompt("enter 1st number: ")
var n2 = +prompt("enter 2nd number: ")
var op = prompt("enter the operator: ")

if(op === "+")
document.write("Result is: "+(n1+n2))

else if(op === "-")
document.write("Result is: "+(n1-n2))

else if(op === "*")
document.write("Result is: "+(n1*n2))

else if(op === "/")
document.write("Result is: "+(n1/n2))

else if(op === "%")
document.write("Result is: "+(n1%n2))

// Chapter 12 - 13:
//Question 1:

var char = prompt("Enter a character: ")
if(char >=0 || char <= 9)
{
    alert ("input is a number.")
}

else if(char >= 'A' && char <= 'Z')
{
    alert("input is uppercase letter.")
}

else if(char >= 'a' && char <= 'z')
{
    alert("input is lowercase letter.")
}

//Question 2:

var num1 = +prompt("enter 1st number: ")
var num2 = +prompt("enter 2nd number: ")

if(num1>num2)
{alert(num1+" is greater.")}

else if(num2>num1)
{alert(num2+" is greater.")}

else if(num2==num1)
{alert(num2+" and "+num1+" are equal.")}

//Question 3:

var num = +prompt("enter a number: ")
if(num > 0 )
{alert("number is positive. ")}
else if(num < 0)
{
    alert("number is negative.")
}
else if(num == 0)
{
    alert("number is 0.")
}

//Question 4:

var ch = prompt("enter a character: ")
if(ch.length > 1 || ch.length == 0 )
{
    alert("Enter a single character.")
}
else{

    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
    {
        alert("TRUE")
    }
    else
    alert("FALSE")
}

//Question 5:

var pass2 = prompt("Enter password: ")
var pass1 = 'pass123'

if( pass2.length == 0 )
{
    alert("please enter password..")
}
else {
    if(pass1 === pass2)
    {
        alert("Correct! The password you entered matches the original password.")
    }
    else{
        alert("Incorrect password..")
    }
}

// Question 6:

var greeting; 
var hour = 13;
if (hour < 18) 
{greeting = "Good day";
alert(greeting)}
else 
{greeting = "Good evening"; 
 alert(greeting)}
 
// Question 7:


var time = +prompt("Enter time in 24 hours format: ")
 
if(time >= 0000 && time <= 1200)
{
    alert("good morning!!")
}
else if(time >= 1200 && time < 1700)
{
    alert("good afternoon!!")
}
else if( time>=1700 && time<=2100)
{
    alert("good evening!!")
}
else if( time > 2100 && time <=2359)
{
    alert("good night!!")
}

// Chapter 14 - 16:
//Question 1:

var arr = []

// //Question 2:

var arr = new Array()

// //Question 3:

var arr = ["karachi" , "lahore" , "islamabad" ]

// //Question 4:

var arr = [2 , 4 , 6 , 8 , 10]

// //Question 5:

var arr = [true , false , true , true , false]

// //Question 6:

var arr = ["karachi" , 25 , true]

//Question 7:

var Qualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCom" , "MS" , "M.Phil" , "Phd"]
document.write("<h1>Qualification: </h1>")

for(i=1 ; i<=Qualification.length ; i++)
{
    document.write("<br>"+i+")"+Qualification[i-1])
}

//Question 8:

var name1 = [ 'Ali' , 'Hassan' , 'Komal']
var marks = [ 350 , 468 , 488 ]
for (var i=0 ; i<3 ; i++)
{
    document.write("Score of "+name1[i]+" is "+marks[i]+". Percentage is "+(((marks[i])/500)*100)+" %<br>")
}

// Question 9:

var colors = ["Red" , "Blue" , "Green"]
document.write("<h3>  COLOURS are: </h3><br>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")


var new_color = prompt("Enter color to add at beginning of list: ")
colors.unshift(new_color)
document.write("<h3> a) Now COLOURS are: </h3><br>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")


new_color1 = prompt("Enter color to add at end of list: ")
colors.push(new_color1)
document.write("<h3> b) Now COLOURS are: </h3><br>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")


new_color2 = prompt("Enter another color to add at start of list: ")
new_color3 = prompt("Enter another color to add at start of list: ")
colors.unshift(new_color2,new_color3)
document.write("<h3> c) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

colors.shift()
document.write("<h3> d) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

colors.pop()
document.write("<h3> e) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

new_color4 = prompt("Enter a color to add in the list: ")
new_index = +prompt("At which no. you want to add color: ")
colors.splice( new_index,0,new_color4 )
document.write("<h3> f) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

var start = +prompt("Enter starting index: ")
var count = +prompt("Enter number of elements to be deleted: ")
colors.splice( start, count )
document.write("<h3> g) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

// Question 10:

var num = [230, 450 , 670 , 100 , 900, 500]
document.write("Score of students: "+num)
num.sort()
document.write("<br>Ordered Score of students: "+num)

// Question 11:

var cities = ["khi" , "lah" , "isl" , "que" , "sibi"]
var selected_cities = cities.slice(1,3)
document.write("Cities are: <br>"+cities+"<br>Selected cities are: <br>"+selected_cities)

// Question 12:

var arr = ["this","is","my","cat"]
var str = arr.join(" ")
document.write("Array:<br>"+arr)
document.write("<br>String:<br>"+str)

// Question 13:

var device = ["keyboard" , "mouse" , "monitor" , "speaker" , "printer"]
document.write("Devices: <br>"+device)
for (var i = 0 ; i < 5 ; i++)
{
var out = device.shift();
document.write("<br>Out:<br>"+out)
}

// Question 14:

var device = ["keyboard" , "mouse" , "monitor" , "speaker" , "printer"]
document.write("Devices: <br>"+device)
for (var i = 0 ; i < 5 ; i++)
{
var out = device.pop();
document.write("<br>Out:<br>"+out)
}

// Question 15:

var arr = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony ','Haier']
document.write("<select><Option>"+arr[0]+"</Option><Option>"+arr[1]+"</Option><Option>"+arr[2]+"</Option><Option>"+arr[3]+"</Option><Option>"+arr[4]+"</Option><Option>"+arr[5]+"</Option></select>")


// Chapter 17 - 20:
//Question 1:

var mul_arr = []
mul_arr[0] = ['Khizra' , 20]
mul_arr[1] = ['Assad' , 23]
mul_arr[2] = ['Sidra' , 25]
document.write(mul_arr)

//Question 2:

var mul_arr = []
mul_arr[0] = [0 , 1 , 2 , 3]
mul_arr[1] = [1 , 0 , 1 , 2]
mul_arr[2] = [2 , 1 , 0 , 1]
for( var x = 0 ; x < 3 ; x++)
{
    for(var y = 0 ; y < 4 ; y++)
    {
        document.write(mul_arr[x][y]+" ")
    }
    document.write("<br>")
}

//Question 3:

for(var i=1 ; i<=10 ; i++)
{
    document.write(i+"<br>")
}

//Question 4:

var num = +prompt("enter a number for table: ")
var len = +prompt("enter lenth of table: ")
document.write("Number = "+num+"<br>Length = "+len+"<br>")
for( var i=1;i<=len;i++)
{
    document.write(num+" x "+i+" = "+(num*i)+"<br>")
}

//Question 5:

var fruit = ['“apple”', '“banana”', '“mango”' , '“orange”' , '“strawberry”' ] 

for(var i=0 ; i<fruit.length ; i++)
{document.write(fruit[i]+"<br>")}


for(var i=0 ; i<fruit.length ; i++)
{document.write("<br>Element at index "+i+" is "+fruit[i]+"<br>")}



//Question 6:

document.write("<h3>Counting:</h3>")
for (var i=1 ; i<=15 ; i++)
{
    document.write(i+" , ")
}

document.write("<h3>Reverse Counting:</h3>")
for (var i=10 ; i>0 ; i--)
{
    document.write(i+" , ")
}

document.write("<h3>Even:</h3>")
for (var i=1 ; i<=20 ; i++)
{if(i % 2 == 0){
    document.write(i+" , ")
}
}

document.write("<h3>Odd:</h3>")
for (var i=1 ; i<=20 ; i++)
{if(i % 2 !== 0){
    document.write(i+" , ")
}
}

document.write("<h3>Series:</h3>")
for (var i=1 ; i<=20 ; i++)
{if(i % 2 == 0){
    document.write(i+"k , ")
}
}
//Question 7:

var bake = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var search = prompt("Welcome to ABC bakers!!!  Enter what doyou want to order: ")
var count = 0
for(var i=0 ; i<bake.length ; i++)
{
    if(search===bake[i])
    {
        document.write(search+" is <b>available</b> in our bakery at index :"+i)
        break;
    }
    else{
        count++
    }
    }
    if(count == 5)  
      document.write(search+" is <b>not available</b> in our bakery.")

//Question 8:

var arr = [240 , 76 , 13 , 90 , 100 , 320]
var max = arr[0] , temp
for ( var i =0 ; i<arr.length-1 ; i++)
{
    if(arr[i] < arr[i+1])
    {
        if(max < arr[i+1])
        max = arr[i+1]
    }
    else if(arr[i] > arr[i+1])
    {
        if(max < arr[i])
        max = arr[i]
    }
}
document.write("Array numbers are :"+arr+"<br>Maximum number is: "+max)

//Question 9:

var arr = [240 , 76 , 13 , 90 , 100 , 320]
var max = arr[0] , temp
for ( var i =0 ; i<arr.length-1 ; i++)
{
    if(arr[i] > arr[i+1])
    {
        if(max > arr[i+1])
        max = arr[i+1]
    }
    else if(arr[i] < arr[i+1])
    {
        if(max > arr[i])
        max = arr[i]
    }
}
document.write("Array numbers are :"+arr+"<br>Minimum number is: "+max)


//Question 5:

for (var i=1 ; i<=100 ; i++)
{
    if(i%5 == 0)
    {
        document.write(i+" , ")
    }
}
// Chapter 21 - 25
//Question 1:

var fName = prompt("Enter your First name: ")
var lName = prompt("Enter your Last name: ")
var fullName = fName +" "+ lName
alert("Welcome "+fullName)

// Question 2:

var model = prompt("Enter your favourite mobile model: ")
var count = 0;
for (var i = 0 ; i < model.length ; i++){
count++
}

alert("Length of your input is: "+ count)

// Question 3;

var str = "Pakistani"
var ind = str.indexOf('n')
document.write("String: "+str+"<br>Index of  'n': "+ind)


// Question 4;

var str = "Hello World!!"
var ind = str.lastIndexOf("l")
document.write("String: "+str+"<br>Last index of  'l': "+ind)

// Question 5;

var str = "Pakistani"
var char = str.charAt(3)
document.write("String: "+str+"<br>Character at index  '3': "+char)

// Question 6;

var fName = prompt("Enter your First name: ")
var lName = prompt("Enter your Last name: ")
var fullName = fName.concat(" "+lName)
document.write("Welcome " +fullName)

//Question 7:

var str1 = "Hyderabad"
var str2 = str1.replace("Hyder" , "Islam")
document.write(" Old string is: " + str1)
document.write("<br> New string is: " + str2)

//Question 8:

var str1 = "Ali and Sami are best friends. They play cricket and football together." 
var str2 = str1.replace(/and/g , "&")
document.write(" Old string is: " + str1)
document.write("<br> New string is: " + str2)

//Question 9:

var str = "432"
var num = parseInt(str)
document.write("String is "+str + "<br>Type: "+typeof(str))
document.write("<br>number is "+num + "<br>Type: "+typeof(num))

//Question 10:

var Name = prompt("Enter a name: ")
alert(Name.toUpperCase())


//Question 11:

var Name = prompt("Enter a name: ")
document.write("User input: "+Name+ "<br>Title Case: "+Name.charAt(0).toUpperCase() + Name.slice(1))

//Question 12:

var num = 12.34
var str1 = num.toString()
alert("String is: "+str1.replace("." , ))

//Question no 13:

var uname = prompt("enter name: ")
for(var i=0 ; i<uname.length ; i++)
{
    if(uname[i] == '!' || uname[i] == ',' || uname[i] == '.' || uname[i] == '@'  )
    {
        alert("Enter Valid name.")
        break
    }
}

//Qurstion 14;

var arr = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties']
var item = prompt("Welcome to ABC bakers!!\nwhat do you want sir/maam ?")
var ind = arr.indexOf(item.toLowerCase())
if(ind == -1)
{
    alert("We are sorry "+item.toUpperCase()+" is not available!!")
}
else{
    alert(item.toUpperCase()+" is available at index "+ind)
}

//Question 15:

var pass = prompt("Enter password: ")
if(pass.length < 6)
{
    alert("Enter valid password of atleast 6 characters!!")
}

else if(pass[0]>= '0' && pass[0]<= '9')
{
    alert("First character should be an alphabet!!")

}
else{
var count1 = 0
var count2 = 0

for(var i =0 ; i<pass.length ; i++)
{
    if((pass[i] >= 'a' && pass[i]<= 'z') || (pass[i] >= 'A' && pass[i]<= 'Z'))
    {
        count1++
        if(count1==pass.length)
        {
            alert("Must enter a number!!")
        }
    }

    else if(pass[i] >='0' && pass[i]<= '9')
    {
        count2++
    }

}
if(count1+count2 != pass.length)
   {
    alert("Only enter number or alphabets!!")
  }
else if(count1 != pass.length){
    alert("Valid Password!!")
}
}

//Question 16:

var university = 'University of Karachi'; 
var arr = university.split('')
for(var i=0 ; i<arr.length ; i++)
document.write(arr[i]+"<br>")

//Question 17:

var inp = prompt("Enter a word: ")
var last = inp.charAt(inp.length-1)
document.write("User input: "+inp+"<br>Last letter: "+last)

//Question 18:

var text1 = " The quick brown fox jumps over the lazy dog "
var text = text1.toLowerCase()
var count=0
for(var i=0 ; i<text.length ; i++)
{
   if( text[i-1]==' ' && text[i]=='t' && text[i+1]=='h' && text[i+2]=='e' && text[i+3]==' ')
{
    count++
}
}
document.write("Text is: "+text1+"<br>Count of ocurrence of 'THE' is: "+count)

//Capter 26 - 30

//Question 1:

var num = +prompt("Enter a positive number with decimal point: ")
var rnd = Math.round(num)
var flr = Math.floor(num)
var cie = Math.ceil(num)
document.write("Number is: "+num+"<br>Round of number is: "+rnd+"<br>Floor of number is: "+flr+"<br>Cieling of number is: "+cie)

//Question 2:

var num = +prompt("Enter a Negative number with decimal point: ")
var rnd = Math.round(num)
var flr = Math.floor(num)
var cie = Math.ceil(num)
document.write("Number is: "+num+"<br>Round of number is: "+rnd+"<br>Floor of number is: "+flr+"<br>Cieling of number is: "+cie)


//Question 3:

var num = -4
var absolute = Math.abs(num )
document.write("Number is: "+num+"<br>Absolute number is: "+absolute)

//Question 4:

var dice = Math.floor((Math.random() * 6) + 1)
document.write("Random number is: "+dice)

//Question 5:

var coin = Math.floor((Math.random()*2)+1)
if(coin==1)
{
    document.write(coin+"<br>Its a tail.")
}
else {
    document.write(coin+"<br>Its a head.")
}

//Question 6:

var num = Math.floor((Math.random()*100)+1)
document.write("Random number between 1 and 100 is: "+num)

//Question 7:

var weight = prompt("enter your weight in kilogram:")
var num = parseInt(weight)
document.write("your weight is "+num+" kilograms.")

//Question 8:

var secret = Math.floor((Math.random()*10)+1)
var inp = +prompt("Enter number between 1 to 10: ")
if(secret==inp){
    alert("congratulations!!!!")
}
else{
    alert("try again!!!")
}

//Capter 26 - 30
//Question 1:

document.write( new Date() )

//Question 2:
var months = ['january' , 'february' , 'march' , 'april' , 'may' , 'june' , 'july' , 'august' , 'september']
var i = new Date()
alert("Month: "+ months[i.getMonth()] )

//Question 3:
var day =  new Date().toString()
document.write("Today is: ")
for(var i=0 ; i<3 ; i++)
{
    document.write( day.charAt(i))
}

//Question 4:

var day =  new Date()
if(day.getDay == 5 || day.getDay == 6 )
{
    alert("Its a fun day!!!")
}
else
{
    alert("no fun today!!!")
}

//Question 5:

var day =  new Date()
if(day.getDate >= 1 && day.getDate <=15 )
{
    alert("First fifteen days of month!!!")
}
else
{
    alert("Last days of month!!!")
}

//Question 6:

var d = new Date()
var mili = d.getTime()
var min = ((d.getTime())/(1000*60))
document.write("Corrent date: "+d+"<br>Ellapsed millisecond since jan 1,1970: "+mili+"<br>Ellapsed minutes since jan, 1 1970: "+min)

//Question 7:

var d = new Date()
var h = d.getHours
if(h>=0 && h<=12)
{
    alert("Its AM!!")
}
else {
    alert("Its PM!!")
}

//Question 8:

var laterDate = new Date(2020,11,31,0,0,0,0)
document.write("Later Date: "+laterDate)

//Question 9:

var d = new Date("April 25, 2020") 
var day =Math.floor((new Date().getTime() - d.getTime())/(1000*60*60*24))
document.write(day)

Question 10:

var a = new Date("January 1,2020")
var b = new Date()
var dif = b.getTime() - a.getTime()
document.write("elapsed time is: "+(dif/1000))

//Question 11:

var d = new Date()
document.write("current time: "+d)
var h = d.getHours()
d.setHours(h+1)
document.write("<br>1 hour later time: "+d)

//Question 12:

var d = new Date()
alert("current time: "+d)
var y = d.getFullYear()
d.setFullYear(y-100)
alert("<br>100 year ago, time: "+d)

//Queston 13:

var age = prompt("Enter your age: ")
var d = new Date().getFullYear()
alert("your age is: "+(d-age))

//Question 14:

var unit = 312
var charges = 15
var sur = 250

document.write("<h2>KE BILL: </h2>Customer name: Ahmed Ali<br>Current Charges: "+charges+"<br>Current Units: "+unit+"<br>Amount payable (within due date): "+(charges*unit)+"<br>Surcharges: "+sur+"<br>Amount payable(after due date): "+((charges*unit)+sur))

//Chapter 35 - 38
//Question 1:

function date (){
    document.write( new Date())
}
date()

//Question 2:

function greet()
{
var f=prompt("enter first name: ")
var l = prompt("enter last name: ")
var full = f+" "+l
alert("Welcome "+full)
}
greet()

//Question 3:

function sum(){
    var a=+prompt("enter 1st number: ")
    var b=+prompt("enter 2nd number: ")
    return a+b
}
document.write("sum is: "+sum())

//Question 4:

var a=+prompt("Enter a number: ")
var b=+prompt("Enter a number: ")
var o=prompt("Enter an operator: ")

function cal(a,b,o){
    if(o == '+')
    return a+b
    else if(o == '-')
    return a-b
    else if( o == '*')
    return a*b
}

document.write("Result is:" +cal(a,b,o))

//Question 5:

function sqr(n){
return n*n
}
document.write("Square of 5 is: "+sqr(5))

//Question 6:

function fact(num){
    var x = num
    var f=0
if(x != 0)
{
    f = x * fact(x-1)
    return f
}
else{
    return 1
}
    
}
document.write(fact(3))

//Question 7:

function count(){
    var s = +prompt("enter starting number: ")
    var e = +prompt("Enter ending number: ")
    for(var i=s ; i<=e ; i++)
    document.write(i+"<br>")
}
count()

//Question 8:

function hypo(){
    var b = +prompt("enter base: ")
    var p = +prompt("enter perpendicular: ")
    function sqr(n){
        return n*n
    }
    var hypo = Math.pow((sqr(b) + sqr(p)), (0.5))
    return hypo
}

document.write("Hypotenuse is: "+ hypo())

//Question 9(I)

function area(w,h){
    return w*h
}
document.write("area is: "+ area(3,5))

//Question 9(II)

function area(w,h){
    return w*h
}
var w=5
var h=10
document.write("area is: "+ area(w,h))

//Question 10:

var str = "MADAM"
var count = 0
for(var i=0 ; i<str.length ; i++)
{
    if(str[i]==str[str.length - 1 - i])
    {
        count ++
    }

}
if(count == str.length)
{
    alert("Its PALINDROME !!")
}
else {
    alert("not a PALINDROME !!")
}

//Question 11:
var str = "a quick brown fox"
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 
 }
 titleCase(str)

//Question 12:
var str = "Web development course"
function longest(string) {
    var sentence = string.split(" ");
    var temp=0 , ind=0
    for(var i = 0; i< sentence.length; i++){
    
        if(temp<sentence[i].length)
        {
            temp = sentence[i].length 
            ind = i  
        }
    }
 document.write("longest word is: "+ sentence[ind]);
 
 }
 longest(str)

//Question 13:

function count(str="Hellooo World" , l="o")
{
    var count = 0
    for(var i=0 ; i<str.length ; i++)
    {
        if(str[i] == l)
        {
            count++
        }
    }
return count
}
document.write(count())

//Question 14:

function calcCircumference(r){
var c = (2*3.142)*r
return c
}

function calcArea(r){
    var a = (3.142)*(r*r)
    return a
    }
document.write("Circumference is: "+calcCircumference(5)+"m <br>Area is: "+calcArea(5)+" m<sup>2</sup>")

//chapter 38 - 44
//Question # 1

function power (a,b){
    var result = Math.pow(a,b)
    return result
}
document.write(power(2,2))

//Question # 2

var year = prompt("enter an year: ")
function leap(yr){
    if((yr % 4 == 0) || (yr % 100 == 0) || (yr % 400 == 0))
    {
        alert("its leap year")
    }
    else{
        alert("not a leap year")
    }
}
leap(year)

//Question # 3

var a = 10 , b=10 , c=10
function sub(a,b,c){
    return((a+b+c)/2)
}
function area(a,b,c){
    var s = sub(a,b,c)
    return(s*(s-a)*(s-b)*(s-c))
}
document.write("area is: ", area(5,5,5)) 

//Question # 4

function avg(a,b,c){
    return((a+b+c)/3)
}
function per(a,b,c)
{
    return(((a+b+c)/300)*100)
}

function main(a,b,c){

    var average = avg(a,b,c)
    var percentage = per(a,b,c)
    document.write("Average is: "+ Math.round(average)  +"<br>Percentage is: "+  Math.fround(percentage))
}
main(90,80,95)

//Question # 5:

var str = "hello"
function index(strn)
{
    var char = prompt("enter a character: ")
    for ( var i=0 ; i < 5 ; i++)
    {
        if(char == strn[i])
        { var ind =  i 
        break }

    }
    return ind

}
var indexof = index(str)
alert("your character index is: "+ indexof)

//Question # 6:

function del()
{var strn = "helila" 
    for ( var i=0 ; i<strn.length ; i++) 
    {var regex= /a|e|i|o|u/gi;
    var newstr=strn.replace(regex, "");}
    return newstr
}

document.write ("new string is: " + del())

//Questio # 7:

function findOccurrences() {
    var str = "you like doing JavaScript Assignment";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var nextchar = chars[i + 1];
      
      if(isvowel(char) && isvowel(nextchar)) {
        count++
      }
    }
    
    return count;
  }
  
  function isvowel(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
  
  var occurenceofvowel = findOccurrences();
  
  alert(occurenceofvowel);

//Question # 8:

var len = prompt("enter distance in km: ")
function meter(dis)
{
    return(dis*1000)
}
function centi(dis)
{
    return(dis * 1000 * 100)
}
function feet(dis){
    return(dis* 3280.84)
}
function inch(dis){
    return(dis * 39370.08)
}
document.write("meters: "+meter(len))
document.write("<br>centimeter: "+centi(len))
document.write("<br>feet: "+feet(len))
document.write("<br>inches: "+inch(len))

//Question # 9:

var hr = prompt("enter working hour: ")
function overtime(hr)
{ if(hr>40)
    {
        var over = (hr - 40)*(12)
        alert("overtime is: "+over+" Rs")
    }
else 
 alert("Sorry!! no overtime")
}

overtime(hr)

//Question # 10:

var amount = prompt("enter withdrawel amount: ")
document.write("Required notes of Rs. 100  : " + Math.floor(amount / 100))
document.write("<br>Required notes of Rs. 50  : " + (Math.floor((amount % 100) / 50)))
document.write("<br>Required notes of Rs. 10  : " + (Math.floor(((amount % 100) % 50)/10)))
document.write("<br>Amount still remaining Rs."+ (Math.floor((((amount % 100) % 50) % 10))))

//Chapter 43 - 48

//Question # 1:

function display(){
    alert("I am a link!!")
}

//Question # 2:


function display(){
    alert("Thanks for buying mobile from us!!")
}

//Question # 3:

function del(i){
    var ind = i.parentNode.parentNode.rowIndex;
    document.getElementById('table1').deleteRow(ind)
}

//Question # 4;

function pic1(){
var s = document.getElementById('img')
s.setAttribute('src','pic1.jpg')
}
function pic2()
{
    var s = document.getElementById('img')
    s.setAttribute('src','pic2.jpg')
}

//Question# 5;
var count = 0
function increase(){
count++
document.getElementById('counter').innerHTML = count
}
function decrease(){
    count--
    document.getElementById('counter').innerHTML = count
    }

//Chapter 49 - 52

//Question # 1;

function sub(){
    var un = document.getElementById("username")
    var p = document.getElementById('pass')
    document.write("UserName: "+ un.value +"<br>Password: "+p.value)
}

//Question # 2;

function more(){
var p = document.getElementById("para")
p.style.display = "block"

}

//Question # 3:
function deleted(e){
   e.parentNode.parentNode.remove();
        }

function edited(f){

document.getElementById("hidden2").style.display = "block"
var sname = document.getElementById("sname")
var sfname = document.getElementById("sfname")
sname.value = f.parentNode.parentNode.childNodes[0].innerHTML
sfname.value = f.parentNode.parentNode.childNodes[1].innerHTML

}
function table()
{
    document.getElementById("hidden").style.display= "block"
    var name = document.getElementById('name').value
    var father = document.getElementById('father').value
    document.getElementById('name').value=""
    document.getElementById('father').value=""
    var tab = document.getElementById('table')
    var r = document.createElement('tr')
    var c1 =  document.createElement('td')
    var c2 = document.createElement('td')
    var c3 = document.createElement('td')
    var c4 = document.createElement('td')
    var del = document.createElement('button')
   del.appendChild(document.createTextNode('DELETE'))
    del.setAttribute("onclick","deleted(this)")
    var edt = document.createElement('button')
    edt.appendChild(document.createTextNode('EDIT'))
     edt.setAttribute("onclick","edited(this)")
    
    c1.appendChild(document.createTextNode(name))
    c2.appendChild(document.createTextNode(father))
    c3.appendChild(del)
    c4.appendChild(edt)
    r.appendChild(c1)
    r.appendChild(c2)
    r.appendChild(c3)
    r.appendChild(c4)
    tab.appendChild(r)
    
}

    
//Chapter 58 - 67

//Question 1 (i);

var v = document.getElementById('main-content')

//Question 1 (ii);

console.log(v.childNodes)

//Question 1 (iii);

var v = document.getElementsByClassName("render")
for(var i=0 ; i<v.length ; i++)
console.log(v[i].innerHTML)

//Question 1 (iv);

var fname = document.getElementById('first-name')
name.value = 'khizra'

//Question 1 (v);

var lname = document.getElementById('last-name')
lname.value = 'mumtaz'
var email = document.getElementById('email')
email.value = 'email@gmail.com'

//Question 2 (i);

var ntype = document.getElementById('form-content')
console.log(ntype.nodeValue)

//Question 2 (ii);

var lname = document.getElementById('last-name')
console.log(lname.nodeValue)
console.log(lname.childNodes)

//Question 2 (iii)

var cn = lname.childNodes
cn[0].nodeValue = 'hello'

//Question 2 (iv)

var mc = document.getElementById('main-content')
console.log(mc.firstChild)
console.log(mc.lastChild)

//Question 2 (v)

var lname = document.getElementById('last-name')
console.log(lname.nextSibling)
console.log(lname.previousSibling)


//Question 2 (vi)

var eml = document.getElementById('email')
console.log(eml.parentNode)
console.log(eml.nodeType)