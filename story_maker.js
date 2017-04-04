function makeStory() {
    // get form values (2 points)
    var adjective = document.getElementById('adjective').value;
    var adverb = document.getElementById('adverb').value;
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var part1 = document.getElementById('part1').value;
    var part2 = document.getElementById('part2').value;
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var name3 = document.getElementById('name3').value;
    var verb = document.getElementById('verb').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "Medical Drama";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = " (starring " + name1 + " , " + name2 + " , and " + name3 + ".)";

  var paragraph2 = " NURSE: Thank goodness you are here, doctor. A patient was just brought in with a badly bruised " + part1 + " and a ruptured " + noun1 + ". Unfortunately, Dr. Smith plans to operate " + adverb + ". ";

var paragraph3 = " DOCTOR: We can't let him! Look at the way his " +  part2 + " is shaking. ";

var paragraph4 = " NURSE: Uh, oh, he's putting a mask over his " + noun2 + "! Doctor, stop him before he " + verb + " somebody.";

var paragraph5 = " DOCTOR: Smith, you can't operate on this " + noun3 + "! I forbid it.";

var paragraph6 = " SMITH: How dare you say that to me. I am your mentor. You are like a " + noun4 + " to me. ";

var paragraph7 = " DOCTOR: And you are  like a " + noun5 + " to me, but I can't risk the wrath of a " + noun6 + " to satisfy your ego. Look in the mirror. Would you trust that " + noun6 + " to remove a " + adjective + " nail? ";




    // Display story by putting title & paragraphs into appropriate divs. (3 points)

    document.getElementById('title').innerHTML = title;
    document.getElementById('one').innerHTML = paragraph1;
    document.getElementById('two').innerHTML = paragraph2;
    document.getElementById('three').innerHTML = paragraph3;
    document.getElementById('four').innerHTML = paragraph4;
    document.getElementById('five').innerHTML = paragraph5;
    document.getElementById('six').innerHTML = paragraph6;
    document.getElementById('seven').innerHTML = paragraph7;

}
