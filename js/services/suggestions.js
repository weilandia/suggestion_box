app.factory('suggestions', [function() {
  var demoSuggestions = {
    posts: [
      {
        id: 1,
        title: 'Lunch 4 dayzzz',
        upvotes: 23,
        comments:
        [{
          body: "This is an awesome comment.",
          upvotes: 0
         },
         {
           body: "So is this.",
           upvotes: 0
          }
        ],
      },
      {
        id: 2,
        title: 'Fridayssssss',
        upvotes: 13,
        comments:
        [{
          body: "This is an awesome comment.",
          upvotes: 0
         },
         {
           body: "So is this.",
           upvotes: 0
          }
        ],
      },
      {
        id: 3,
        title: 'Down with the alter.',
        upvotes: 0,
        comments:
        [{
          body: "This is an awesome comment.",
          upvotes: 0
         },
         {
           body: "So is this.",
           upvotes: 0
          }
        ],
      },
    ]
  }
  return demoSuggestions
}]);
