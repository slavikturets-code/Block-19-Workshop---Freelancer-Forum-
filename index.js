class freeLancer {
  
  freelancerNum = 0;
  totalStartingPrice = 0; 
  
  constructor(namesArr, professionArr, startingPriceArr) {
    this.namesArr = namesArr;
    this.professionArr = professionArr;
    this.startingPriceArr = startingPriceArr;
  }

  createFreelancerForumTitle(title) {
    const freelancerForumTitle = document.querySelector("h1");
    freelancerForumTitle.textContent = title;
  }

  updateFreelancerNum(){
    this.freelancerNum++;
  }

  updateTotalStartingPrice(price){
    this.totalStartingPrice+=price;
  }

  getAverageStartingPrice(){
    if (this.freelancerNum == 0) {
      return this.totalStartingPrice;
    }
     else{
      return (this.totalStartingPrice) / (this.freelancerNum); 
     }
  }

  createFreelancer(){
    const randomName = Math.floor(Math.random() * this.namesArr.length);
    const randomProfession = Math.floor(Math.random() * this.professionArr.length);
    const randomStartingPrice = Math.floor(Math.random() * this.startingPriceArr.length);
    this.updateFreelancerNum();
    this.updateTotalStartingPrice(this.startingPriceArr[randomStartingPrice]);
    this.addFreelancerRow(this.namesArr[randomName],this.professionArr[randomProfession],this.startingPriceArr[randomStartingPrice]); 
    this.presentAverage();      
  }
  
  createTableBody(){
    const freeLancerTable = document.querySelector("table");
    const tableBody = document.createElement("tbody");
    tableBody.setAttribute("id", "tableBody")
    freeLancerTable.appendChild(tableBody);
  }

  addFreelancerRow(randomName,randomProfession,randomStartingPrice){
    const tableBody = document.getElementById("tableBody");
    const tableRow = document.createElement("tr");
    const tableData1 = document.createElement("td");
    tableData1.textContent = randomName;
    const tableData2 = document.createElement("td");
    tableData2.textContent = randomProfession;
    const tableData3 = document.createElement("td");
    tableData3.textContent = randomStartingPrice;
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableBody.appendChild(tableRow);
  } 

  presentAverage(){
    const paragraph = document.querySelector("p");
    paragraph.textContent = 'The average starting price is $' + this.getAverageStartingPrice().toFixed(2); 
  }  

}

let namesArr = [
  "Rachel",
  "Dana",
  "Alex",
  "Brandon",
  "Paul",
  "Abraham",
  "Michael",
  "Mary",
  "Anna",
  "Elizabeth",
  "Nathan",
  "Patricia",
  "John",
  "Nataly",
  "Benjamin",
];
let professionArr = [
  "Math Teacher",
  "Speech Therapist",
  "Occupational Therapist",
  "Real Estate Lawyer",
  "Java Developer",
  "Graphic Designer",
  "Economist",
  "Registered Nurse",
  "Pharmacist",
  "Physical Therapist",
  "Accountant",
  "Car Technician",
  "Chemistry Teacher",
  "Nurse Practitioner",
  "Sales Manager",
  "Electrician",
];
let startingPriceArr = [
  30, 80, 160, 50, 95, 100, 120, 60, 90, 200, 25, 140, 40, 75, 155, 55,
];

const freeLancerObj = new freeLancer(namesArr, professionArr, startingPriceArr);

freeLancerObj.createFreelancerForumTitle("Freelancer Forum");

freeLancerObj. createTableBody();

freeLancerObj.createFreelancer();
freeLancerObj.createFreelancer();


setInterval(freeLancerObj.createFreelancer.bind(freeLancerObj),3000);



