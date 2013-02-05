module.exports = {
  nav: {
    about: function(){
      $.getJSON('https://api.github.com/users/zeekay', function(data) {
      });
    },
    projects: function() {
      $.getJSON('https://api.github.com/users/zeekay/repos', function(data) {
        template = require('./templates/projects');
        window.data = data;
        $('section').html(template({projects: data}));
      });
    }
  }
};
