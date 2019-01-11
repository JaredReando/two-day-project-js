import { Haiku } from './haiku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#haiku-button').submit(function(event) {
    event.preventDefault();
    let textInput = $('#haiku-text').val()
    let newHaiku = new Haiku(textInput);



    // $('#test-span').text(`.}`);

    $('#haiku-readout').text('23');
    $('#haiku-text').val('');

  });
});
