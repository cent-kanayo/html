const items = [...document.querySelectorAll('.number')];

function updateNum(el) {
  const value = parseInt(el.dataset.number);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
  const incremental = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(incremental);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 1);
}

items.forEach((item) => updateNum(item));
