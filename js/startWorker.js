const span = document.getElementById('worker');
let w;
function startWorker() {
  if (typeof Worker !== 'undefined') {
    if (typeof w === 'undefined') {
      w = new Worker('./js/testworker.js');
    }
    w.onmessage = function (event) {
      span.textContent = event.data;
    };
  } else {
    span.textContent = 'Web worker not supported';
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
