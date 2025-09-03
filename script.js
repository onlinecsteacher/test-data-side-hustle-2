// Side Hustle Employability Form - Step-by-Step Plan for Students

//1) Create a variable called "dataEntries" and store an empty array in it
let dataEntries = [];

//2) Create a function called "addNewEntry" that will handle form submission
function addNewEntry() {
    //3) Inside the function, create variables to get the values from each form field: title, categoryType, barrierToEntry, collegeAdmissions, technicalSkills, and nonFinancialBenefits

    // Note: the values of the form fields have not yet been defined, they must
    // be defined in the HTML file and match the fields here
    title = document.getElementById("title").value;
    categoryType = document.getElementById("categoryType").value;
    barrierToEntry = document.getElementById("barrierToEntry").value;
    collegeAdmissions = document.getElementById("collegeAdmissions").value;
    technicalSkills = document.getElementById("technicalSkills").value;
    nonFinancialBenefits = document.getElementById("nonFinancialBenefits").value;
}
    
//4) Create an object called "newEntry" and store all the form values in it with proper property names

const newEntry = {
    title: title,
    categoryType: categoryType,
    barrierToEntry: barrierToEntry,
    collegeAdmissions: collegeAdmissions,
    technicalSkills: technicalSkills,
    nonFinancialBenefits: nonFinancialBenefits
}; 

//5) Add the newEntry object to the dataEntries array using the push method
dataEntries.push(newEntry)

//6) Create a function called "displayEntries" that ** loops ** 
// through the dataEntries array and shows each entry on the webpage

//7) Call the displayEntries function after adding a new entry to update the display

//8) Add an event listener to the form that calls addNewEntry when the form is submitted

//9) Prevent the default form submission behavior using preventDefault()

//10) Clear all form fields after successfully adding an entry

//11) Add validation to check that all required fields are filled before adding the entry

//12) Display an error message if any required fields are empty
