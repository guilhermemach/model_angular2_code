import { Component , AfterViewChecked , ElementRef} from '@angular/core';
let $ = require('../js/jquery.min.js');

@Component({
  selector: 'index',
  templateUrl : 'app/pages/index.html'
})
export class IndexComponent implements AfterViewChecked{

  constructor (public element: ElementRef) {
       console.log('IndexComponent running...');
  }

  /* Workaround */
  ngAfterViewChecked() {

    var b ='';
 	  $('#nav a').each(function() {

 			var	$this = $(this),
 			indent = Math.max(0, $this.parents('li').length - 1),
 			href = $this.attr('href'),
 			target = $this.attr('target');

 			b = b +
 				'<a routerlink=' + href + ' ng-reflect-router-link=' + href + ' ng-reflect-href="' + href + '"' +
 					'class="link depth-' + indent + '"' +
 					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
 					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
 				'>' +
 					'<span class="indent-' + indent + '"></span>' +
 					$this.text() +
 				'</a>';

 		});

    $('#navPanel nav').remove();
    $('#navPanel').append('<nav>' + b + '</nav>');

    $('.title').remove();
    $('#titleBar').append('<span class="title">Menu</span>')

  };
}
