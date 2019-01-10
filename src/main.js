import { Haiku } from './haiku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#form-button').submit(function(event) {
    event.preventDefault();


    let myHaiku = new Haiku("this is the first sentence", "My name is Jared", "this is the third line");
    $('#test-span').text('. We\'re so glad you\'re here. This is the first sentence of a Haiku: ' + myHaiku.lineOne);

  });
});
