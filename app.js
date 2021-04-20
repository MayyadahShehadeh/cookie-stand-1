'use strict';


const parentElement = document.getElementById('Datatable');
var table = document.createElement('table');
table.setAttribute('border', '1');
parentElement.appendChild(table);

var hour= [' 6:00am ', ' 7:00am ', ' 8:00am ', ' 9:00am ', ' 10:00am ', ' 11:00am ', ' 12:00pm ', ' 1:00pm ', ' 2:00pm ', ' 3:00pm ', ' 4:00pm ', ' 5:00pm ', ' 6:00pm ', ' 7:00pm '];


function CookiesShop(name,minCust,maxCust,avgsale){
  this.name=name;
  this.mincust=minCust;
  this.maxcust=maxCust;
  this.avgsale=avgsale;
  this.cookiesPerHour=[];
  this.customerPerHour = [];
  this.total=0;
CookiesShop.City.push(this);
}
CookiesShop.City=[];

CookiesShop.prototype.gitCustNumber = function () {
  for (let i = 0; i < hour.length; i++) {
    let cookiee = Math.ceil(generateRandomNumber(this.mincust, this.maxcust) * this.avgsale);
    this.cookiesPerHour.push(cookiee);
    this.total += cookiee;
    console.log(`${hour[i]} : ${this.cookiesPerHour[i]}`)
  };
};

CookiesShop.prototype.renderPage=function() {
  this.gitCustNumber();
  
  const trow = document.createElement('tr');
 table.appendChild(trow);

  let td = document.createElement('td');
  trow.appendChild(td);
  td.textContent = this.name;
  

  for(let i = 0; i < hour.length; i++) {
    let tdContent = document.createElement('td');
    trow.appendChild(tdContent);
    tdContent.textContent = this.cookiesPerHour[i];
  }

  let tdtotal = document.createElement('td');
  trow.appendChild(tdtotal);
  tdtotal.textContent = this.total;
  table.appendChild(trow)
}
//______________________________________________________
function heading() {
  
  let trow = document.createElement('tr');
 table.appendChild(trow);

  let th = document.createElement('td');
  trow.appendChild(th);
  th.textContent = '';

  for (let i = 0; i < hour.length; i++) {
    let th = document.createElement('td');
    trow.appendChild(th);
    th.textContent = hour[i];
  }

  let th1Ele = document.createElement('td');
  trow.appendChild(th1Ele);
  th1Ele.textContent = 'Total Daily Location';

  table.appendChild(trow);
}

//__________________________________________________________________________________________________________________
function footer() {
  let tfoot = document.createElement('tr');
  table.appendChild(tfoot);

  let thEle = document.createElement('th');
  tfoot.appendChild(thEle);
  thEle.textContent = 'Total';

  let AllTotal = 0;
  for (let i = 0; i < hour.length; i++) {
   
    let thEle = document.createElement('th');
    let hourlyTotal = 0;
    for(let j = 0; j < CookiesShop.City.length; j++) {
      hourlyTotal += CookiesShop.City[j].cookiesPerHour[i];
      AllTotal += CookiesShop.City[j].cookiesPerHour[i];
    }
    thEle.textContent = hourlyTotal;
    tfoot.appendChild(thEle);
  }

  let th1Ele = document.createElement('th');
  tfoot.appendChild(th1Ele);
  th1Ele.textContent = AllTotal;

  table.appendChild(tfoot);
}


 new CookiesShop('Seattle', '23', '65', '6.3');
 new CookiesShop('Dubai', '11', '38', '3.7');
 new CookiesShop('Paris', '20', '38', '2.3');
 new CookiesShop('Lima', '2', '16', '4.6');
 new CookiesShop('Tokyo', '3', '24', '1.2');

function renderPage() {
  for(let i = 0; i < CookiesShop.City.length; i++){
    CookiesShop.City[i].renderPage();
  }
}


renderPage();
footer();
heading();

function generateRandomNumber(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  function generateRandomNumber(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(CookiesShop.City);