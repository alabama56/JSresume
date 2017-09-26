var name = "Jake Downard";
var companyNameJobTitle = "Career: Red Mountain Ironworks / Welder";
var position = "Discription: Welded, painted, got dirty and sweaty";


console.log("Name:",name.toUpperCase());

function displayPosition(companyNameJobTitle, position){
    console.log(companyNameJobTitle);

}
 
displayPosition(companyNameJobTitle);
displayPosition(position);

console.log("My Interest:");
console.log("* Ice cold bevvies");
console.log("* Cracking open bevvies with the lads");
console.log("* Hiking");
console.log("* Gym time");
console.log("My Previous Experiance:");
console.log("* Fighting ninjas, Killing Ghost, Seducing Russain spies (women) - Tought the spies the art of sweet American love making.");
console.log("* Was a liason to Dwayne the Rock Johnson - helped him reach perfect human form, a method that was thought to have been lost to the monks of ancient China. ");
console.log("* A close personal friend of Elon Musk - Elon might go on to tell you about how Tesla was a brain child of ours that we cmae up with over some champaign while flying in his private jet to Keanu Reeves house, but I let him pursue the noble cause because my time was consumed teaching the above Russian spies.");
console.log("My Skills");

function displaySkill(skill, isCool){
    
    
    if(isCool === true){
        console.log("* Check It: " + skill);
    }else{
        console.log("* " + skill);
    }

}

displaySkill("Karate", true);
displaySkill("Beer Drinking", true);
displaySkill("Working out", false);
displaySkill("Love Making", true);
displaySkill("Hiking", false);
displaySkill("Over Thinking", false);
displaySkill("Fishing", true);
displaySkill("Drawing", false);