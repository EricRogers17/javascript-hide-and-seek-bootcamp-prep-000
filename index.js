function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector)
  return firstSelector
};

function nestedTarget() {
  return document.querySelector('#nested .target')
};

function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector)
  return firstSelector
};

function nestedTarget() {
  return document.querySelector('#nested .target')
};

function increaseRankBy(n) {
  const lis = document.querySelectorAll('#app ul.ranked-list li')
   
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
};
