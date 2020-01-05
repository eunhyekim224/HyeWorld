function disemvowel(str) {
    var vowels = ["a", "e", "i", "o", "u"];

    for (var i = 0; i < vowels.length; i++) {
        var regex = new RegExp(vowels[i], 'g');
        //var regex = /wer/
        var str = str.replace(regex, "")
    }

    return str;
  }




  // This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


  //var vowels
  //position of vowels in a str --> str.indexOf(vowels[i]) 
  //replace vowels with ""


  function warnTheSheep(queue) {
    var currentAnimalIndex = queue.length - 1;
    var currentAnimal = queue[currentAnimalIndex];
    if (currentAnimal === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    var wolfIndex = queue.indexOf("wolf");
    var sheepIndex = queue.length - wolfIndex; 
    return "Oi! Sheep number " + sheepIndex + "! You are about to be eaten by a wolf!"
  }
  }
