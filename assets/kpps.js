//DPT LAKI LAKI
function clrDptL() {
  document.getElementById('valueDptL').innerHTML = '0';
}

function addDptL() {
  var result = parseFloat(document.getElementById('valueDptL').innerHTML) + 1;

  document.getElementById('valueDptL').innerHTML = result;
}

function delDptL() {
  var result = parseFloat(document.getElementById('valueDptL').innerHTML) - 1;

  if (result < 0) {
    document.getElementById('valueDptL').innerHTML = 0;
  } else {
    document.getElementById('valueDptL').innerHTML = result;
  }
}

//DPT PEREMPUAN
function clrDptP() {
  document.getElementById('valueDptP').innerHTML = '0';
}

function addDptP() {
  var result = parseFloat(document.getElementById('valueDptP').innerHTML) + 1;

  document.getElementById('valueDptP').innerHTML = result;
}

function delDptP() {
  var result = parseFloat(document.getElementById('valueDptP').innerHTML) - 1;

  if (result < 0) {
    document.getElementById('valueDptP').innerHTML = 0;
  } else {
    document.getElementById('valueDptP').innerHTML = result;
  }
}
