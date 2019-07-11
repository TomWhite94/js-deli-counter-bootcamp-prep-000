var katzDeliLine = []
var otherDeli = ["Steven", "Blake", "Avi"];
var nolongerserved =[]


function takeANumber(deli, name) {
  deli.push(name)
  return "Welcome, " + name + ". You are number " + parseInt(deli.length) + " in line."
}

function nowServing(deli) {
  if (deli.length > 0) {
    nolongerserved.unshift(deli[0])
    deli.shift()
    return "Currently serving " + nolongerserved[0] + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deli) {
  if (deli.length === 0) {
    return "The line is currently empty."
  } else {
    var text = "The line is currently: "
    for (var i = 0; i<deli.length; i++) {
      text+=i+1 + ". " + deli[i]
      if (i + 1 < deli.length) {
        text += ", "
      }
    }
    return text
    
    return "The line is currently: 1. " + deli[0] +"," + " 2. " + deli[1] + "," + " 3. " + deli[2]
  }
}

