Bustle.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('post', {path: 'posts/:post_id'});
  this.resource('about');
  this.resource('contributors');
});
