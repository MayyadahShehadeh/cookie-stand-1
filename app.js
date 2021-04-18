'use strict';
let seattle = {
    name:'Seattle',
    mincust:23,
    maxcust:65,
    avgsale:6.3,
    hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    gitCustNumber: function(){
  
      return Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
    },


render : function(){
    const parentElement = document.getElementById('portfolio');


    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element=document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement=document.createElement('ul');
    h2Element.appendChild(ulElement);
    let total=0;
    for(let i=0;i<this.hour.length;i++){
      let liElement=document.createElement('li');
      let cookie=this.gitCustNumber();
      liElement.textContent=this.hour[i]+': '+cookie+' cookies';
      total=total+cookie;
      ulElement.appendChild(liElement);
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: '+total+' cookies';
        ulElement.appendChild(liElement);
      }
    }

},
};
let tokyo = {
    name:'Tokyo',
    mincust:3,
    maxcust:24,
    avgsale:1.2,
    hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    gitCustNumber: function(){
  
      return Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
    },
  
    render: function(){
        const parentElement = document.getElementById('portfolio');
    
    
        let articleElement=document.createElement('article');
        parentElement.appendChild(articleElement);
    
        let h2Element=document.createElement('h2');
        h2Element.textContent=this.name;
        articleElement.appendChild(h2Element);
    
        let ulElement=document.createElement('ul');
        h2Element.appendChild(ulElement);
        let total=0;
        for(let i=0;i<this.hour.length;i++){
          let liElement=document.createElement('li');
          let cookie=this.gitCustNumber();
          liElement.textContent=this.hour[i]+': '+cookie+' cookies';
          total=total+cookie;
          ulElement.appendChild(liElement);
          if (i===13){
            let liElement=document.createElement('li');
            liElement.textContent='total: '+total+' cookies';
            ulElement.appendChild(liElement);
          }
        }

    
      },
    
    };

    let dubai = {
        name:'Dubai',
        mincust:11,
        maxcust:38,
        avgsale:3.7,
        hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
        gitCustNumber: function(){
      
          return Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
        },
      
      
        render: function(){
          const parentElement = document.getElementById('portfolio');
      
      
          let articleElement=document.createElement('article');
          parentElement.appendChild(articleElement);
      
          let h2Element=document.createElement('h2');
          h2Element.textContent=this.name;
          articleElement.appendChild(h2Element);
      
          let ulElement=document.createElement('ul');
          h2Element.appendChild(ulElement);
          let total=0;
          for(let i=0;i<this.hour.length;i++){
            let liElement=document.createElement('li');
            let cookie=this.gitCustNumber();
            liElement.textContent=this.hour[i]+': '+cookie+' cookies';
            total=total+cookie;
            ulElement.appendChild(liElement);
            if (i===13){
              let liElement=document.createElement('li');
              liElement.textContent='total: '+total+' cookies';
              ulElement.appendChild(liElement);
            }
          }
      
        },
      
      };

      
let paris = {
    name:'Paris',
    mincust:20,
    maxcust:38,
    avgsale:2.3,
    hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    gitCustNumber: function(){
  
      return Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
    },
  
  
    render: function(){
      const parentElement = document.getElementById('portfolio');
  
  
      let articleElement=document.createElement('article');
      parentElement.appendChild(articleElement);
  
      let h2Element=document.createElement('h2');
      h2Element.textContent=this.name;
      articleElement.appendChild(h2Element);
  
      let ulElement=document.createElement('ul');
      h2Element.appendChild(ulElement);
      let total=0;
      for(let i=0;i<this.hour.length;i++){
        let liElement=document.createElement('li');
        let cookie=this.gitCustNumber();
        liElement.textContent=this.hour[i]+': '+cookie+' cookies';
        total=total+cookie;
        ulElement.appendChild(liElement);
        if (i===13){
          let liElement=document.createElement('li');
          liElement.textContent='total: '+total+' cookies';
          ulElement.appendChild(liElement);
        }
      }
  
  
  
  
    },
  
  };
  let lima = {
    name:'Lima',
    mincust:2,
    maxcust:16,
    avgsale:4.6,
    hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    gitCustNumber: function(){
  
      return Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
    },
  
  
    render: function(){
      const parentElement = document.getElementById('portfolio');
  
  
      let articleElement=document.createElement('article');
      parentElement.appendChild(articleElement);
  
      let h2Element=document.createElement('h2');
      h2Element.textContent=this.name;
      articleElement.appendChild(h2Element);
  
      let ulElement=document.createElement('ul');
      h2Element.appendChild(ulElement);
      let total=0;
      for(let i=0;i<this.hour.length;i++){
        let liElement=document.createElement('li');
        let cookie=this.gitCustNumber();
        liElement.textContent=this.hour[i]+': '+cookie+' cookies';
        total=total+cookie;
        ulElement.appendChild(liElement);
        if (i===13){
          let liElement=document.createElement('li');
          liElement.textContent='total: '+total+' cookies';
          ulElement.appendChild(liElement);
        }
      }
  
  
  
    },
  
  };
  
  
  function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
 
seattle.render();
console.log(seattle);
tokyo.render();
console.log(tokyo);
dubai.render();
console.log(tokyo);
paris.render();
console.log(paris);
lima.render();
console.log(lima);