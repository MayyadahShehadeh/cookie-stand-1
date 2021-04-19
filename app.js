'use strict';

function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


let seattle = {
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgsale: 6.3,
  customersPerHour: function () {
    return Math.ceil(generateRandomNumber(this.maxCust, this.minCust) * this.avgsale);
  },


  page: function () {
    const parentElement = document.getElementById('display element');
    const h1 = document.createElement('h1');
    h1.textContent = this.name;
    parentElement.appendChild(h1);


    let ul = document.createElement('ul');
    parentElement.appendChild(ul);
    let total = 1;
    for (let i = 0; i <= this.hour.length; i++) {
      const li = document.createElement('li');
      let cookies = this.customersPerHour();
      li.textContent = `Totel  ${this.hour[i]}   : ${cookies}   Cookies`;
      ul.appendChild(li);
      total += total;
      if (total === this.hour.length) {
        let li = document.createElement('li');
        li.textContent = 'total: ' + total + ' cookies';
        ul.appendChild(li);

      }

    }

  }

}
seattle.page();
console.log(seattle);




let Tokyo = {
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Tokyo',
  maxCust: 24,
  minCust: 3,
  avgsale: 12,

  customersPerHour: function () {
    return Math.ceil(generateRandomNumber(this.maxCust, this.minCust) * this.avgsale);

  },
  page: function () {
    const parentElement = document.getElementById('display element');
    const h1 = document.createElement('h1');
    h1.textContent = this.name;
    parentElement.appendChild(h1);
    const ul = document.createElement('ul');
    parentElement.appendChild(ul);

    let total = 1;
    for (let i = 1; i <= this.hour.length; i++) {
      const li = document.createElement('li');
      let cookies = this.customersPerHour();
      li.textContent = `Totel  ${this.hour[i]}   : ${cookies}   Cookies`;
      ul.appendChild(li);
      if (total === this.hour.length) {
        const li = document.createElement('li');
        li.textContent = `Total: ${total}`;
        ul.appendChild(li);

      }

    }
  }

}
Tokyo.page();
console.log(Tokyo);





let Dubai = {
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Dubai',
  maxCust: 24,
  minCust: 3,
  avgsale: 12,

  customersPerHour: function () {
    return Math.ceil(generateRandomNumber(this.maxCust, this.minCust) * this.avgsale);

  },
  page: function () {
    const parentElement = document.getElementById('display element');
    const h1 = document.createElement('h1');
    h1.textContent = this.name;
    parentElement.appendChild(h1);
    const ul = document.createElement('ul');
    parentElement.appendChild(ul);

    let total = 1;
    for (let i = 1; i <= this.hour.length; i++) {
      const li = document.createElement('li');
      let cookies = this.customersPerHour();
      li.textContent = `Totel  ${this.hour[i]}   : ${cookies}   Cookies`;
      ul.appendChild(li);
      if (total === this.hour.length) {
        const li = document.createElement('li');
        li.textContent = `Total: ${total}`;
        ul.appendChild(li);

      }

    }
  }

}
Dubai.page();
console.log(Dubai);

let paris = {
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'paris',
  maxCust: 20,
  minCust: 38,
  avgsale: 2.3,

  customersPerHour: function () {
    return Math.ceil(generateRandomNumber(this.maxCust, this.minCust) * this.avgsale);

  },
  page: function () {
    const parentElement = document.getElementById('display element');
    const h1 = document.createElement('h1');
    h1.textContent = this.name;
    parentElement.appendChild(h1);
    const ul = document.createElement('ul');
    parentElement.appendChild(ul);

    let total = 1;
    for (let i = 1; i <= this.hour.length; i++) {
      const li = document.createElement('li');
      let cookies = this.customersPerHour();
      li.textContent = `Totel  ${this.hour[i]}   : ${cookies}   Cookies`;
      ul.appendChild(li);
      if (total === this.hour.length) {
        const li = document.createElement('li');
        li.textContent = `Total: ${total}`;
        ul.appendChild(li);

      }

    }
  }

}
paris.page();
console.log(paris);



let lima = {
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'lima',
  maxCust: 16,
  minCust: 4.6,
  avgsale: 2,

  customersPerHour: function () {
    return Math.ceil(generateRandomNumber(this.maxCust, this.minCust) * this.avgsale);

  },
  page: function () {
    const parentElement = document.getElementById('display element');
    const h1 = document.createElement('h1');
    h1.textContent = this.name;
    parentElement.appendChild(h1);
    const ul = document.createElement('ul');
    parentElement.appendChild(ul);

    let total = 1;
    for (let i = 1; i <= this.hour.length; i++) {
      const li = document.createElement('li');
      let cookies = this.customersPerHour();
      li.textContent = `Totel  ${this.hour[i]}   : ${cookies}   Cookies`;
      ul.appendChild(li);
      if (total === this.hour.length) {
        const li = document.createElement('li');
        li.textContent = `Total: ${total}`;
        ul.appendChild(li);

      }

    }
  }

}
lima.page();
console.log(lima);

