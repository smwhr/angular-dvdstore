(function() {

var app = angular.module("dvdStore", []);

var films = [{
  "title": "Mulholland Drive",
  "release_date": "2001-11-21",
  "price": 3.99,
  "synopsis": "Victime d'un accident, une mystérieuse jeune femme, amnésique et blessée, erre sur les hauteurs d'Hollywood en limousine quand un accident survient sur la sinueuse route de Mulholland Drive. Elle se réfugie dans la première maison qu'elle trouve : chez Betty Elms qui vient d'arriver en ville et rêve de devenir actrice. Intriguée par cette inconnue se faisant appeler Rita, Betty découvre dans son sac des liasses de billets verts et une clef bleue. De plus en plus complices, les deux femmes mènent l'enquête pour retrouver l'identité de Rita. Entre conscience et inconscience.",
  "est_dispo": true,
  "force_cache": false,
  "poster": "http://aws.vdkimg.com/film/5/9/0/8/59088_poster_scale_188x250.jpg",
  "directors":[
      {"first_name": "David",
       "last_name": "Lynch"
      }
    ],
    "actors":[
        {"first_name": "Naomi",
         "last_name": "Watts"
        },
        {"first_name": "Laura",
         "last_name": "Harring"
        },
    ],
  },

  {
    "title": "Tout ce qui brille",
    "price": 2,
    //"synopsis": "Ely et Lila sont comme deux soeurs. Elles se connaissent depuis l'enfance, partagent tout et rêvent ensemble d'une autre vie. Elles vivent dans la même banlieue, à dix minutes de Paris.Aujourd'hui, Ely et Lila ne veulent plus être à dix minutes de leurs vies. De petites embrouilles en gros mensonges, elles vont tout faire pour essayer de pénétrer un monde qui n'est pas le leur où tout leur semble possible.Mais tout ce qui brille...",
    "release_date": "2010-03-24",
    "est_dispo": true,
    "force_cache": false,
    "poster": "http://aws.vdkimg.com/film/2/7/5/4/275485_poster_scale_188x250.jpg",
    "directors":[{first_name: "Géraldine",last_name: "Nakache"},
                 {first_name: "Hervé",last_name: "Mimran"}
                ],
    "actors":[{first_name: "Leïla",last_name: "Bekhti"},
              {first_name: "Géraldine",last_name: "Nakache"}
              ]
  }
];


app.controller("StoreController", function(){
  this.products = films;
});

app.controller("TabController", function(){
  this.tab = 1;

  this.setTab = function(t){
    //ping à google analytics
    this.tab = t;
  }

  this.isTab = function(t){
    return this.tab === t;
  }

});

})();