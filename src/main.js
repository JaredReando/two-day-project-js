import { Haiku } from './haiku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#haiku-button').submit(function(event) {
    event.preventDefault();

    let myHaiku = new Haiku("this is the first sentence", "This is the second sentence", "this is the third line");

    const userHaiku = $('#haiku-text').val();
    console.log(myHaiku.newFromString(userHaiku));

    $('#test-span').text(`. We're so glad you're here. This is the first sentence of a Haiku: ${myHaiku.lineOne}`);

    $('#haiku-readout').text(userHaiku);
    $('#haiku-text').val('');

  });
});
