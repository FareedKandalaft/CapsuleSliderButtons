const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach(toggle => toggle.addEventListener('change', (e)=> doTheTrick(e.target)));

function doTheTrick(theChangedToggle){
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theChangedToggle) {
      fast.checked = false;
    }
    if (cheap === theChangedToggle) {
      good.checked = false;
    }
    if (fast === theChangedToggle) {
      cheap.checked = false;
    }
  }
}

