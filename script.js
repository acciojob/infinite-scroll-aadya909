const list = document.getElementById('infi-list');
let itemCount = 10;

// Function to add new list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Scroll listener for the list
list.addEventListener('scroll', () => {
  // Check if user scrolled to bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});


