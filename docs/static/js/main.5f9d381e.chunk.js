(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),o=n.n(s),i=(n(14),n(1)),c=n(2),m=n(4),p=n(3),u=n(5),l=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"card"},r.a.createElement("div",{className:"card__item card__item--".concat(this.props.name)},r.a.createElement("img",{className:"card__image",src:this.props.urlImage,alt:"Imagen de ".concat(this.props.name)}),r.a.createElement("h2",{className:"card__name"},this.props.name),r.a.createElement("ul",{className:"card__types"},this.props.types.map(function(e,t){return r.a.createElement("li",{className:"card__type--element card__type--element".concat(t)},r.a.createElement("div",{className:"type"},e))}))))}}]),t}(a.Component)),h=(n(18),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.pokemon;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"cards__list--name"},"Mi lista de Pokemon"),r.a.createElement("ul",{className:"cards__list"},e.map(function(e){return r.a.createElement("li",{className:"cards__list--element"},r.a.createElement(l,{urlImage:e.url,name:e.name,types:e.types}))})))}}]),t}(a.Component)),d=(n(20),[{id:1,name:"bulbasaur",types:["poison","grass"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{id:2,name:"ivysaur",types:["poison","grass"],evolution:"bulbasaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{id:3,name:"venusaur",types:["poison","grass"],evolution:"ivysaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{id:4,name:"charmander",types:["fire"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{id:5,name:"charmeleon",types:["fire"],evolution:"charmander",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{id:6,name:"charizard",types:["flying","fire"],evolution:"charmeleon",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{id:7,name:"squirtle",types:["water"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{id:8,name:"wartortle",types:["water"],evolution:"squirtle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{id:9,name:"blastoise",types:["water"],evolution:"wartortle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{id:10,name:"caterpie",types:["bug"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-list__container"},r.a.createElement(h,{pokemon:d}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.5f9d381e.chunk.js.map