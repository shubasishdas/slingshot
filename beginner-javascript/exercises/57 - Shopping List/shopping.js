const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
let items = [];
// console.log(`item value: ${items} & item length: ${items.length}`);

function displayItems() {
  console.log(items);
  //   const html = items.map((item) => `<li>${item.name} </li>`).join('');

  // Folllowing two lines are same in output
  // ${item.complete ? 'checked' : ''}
  // ${item.complete && 'checked'}
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input
      type="checkbox"
      value = "${item.id}"
      ${item.complete && 'checked'}

      >
      <span ">${item.name}</span>
      <button 
      aria-label="Remove ${item.name}"
      value = "${item.id}"
      >&times;</button>

       </li>`
    )

    .join('');
  //   console.log(html);
  list.innerHTML = html;
}

function handleSubmit(e) {
  e.preventDefault();
  //   console.log('submitted');
  //   console.log(e.currentTarget);
  //   console.log(e.currentTarget.item);
  //   console.log(e.target.item);
  const name = e.currentTarget.item.value;
  //   console.log(name);
  //   const name1 = e.target.item.value;
  //   console.log(name1);
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // Push the items nto our state
  items.push(item);
  //   console.log(`There are now ${items.length} in your state`);
  // Clean the form
  //   e.currentTarget.item.value = '';
  e.currentTarget.reset();
  // displayItems();

  // fire off a custom event that will tell anyone else who cares that the items have been updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function mirrorToLocalStorage() {
  console.info('Saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from LS');
  // pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  // console.log(IsItems);
  if (lsItems.length) {
    // lsItems.forEach((item) => items.push(item));
    // items.push(lsItems[0], lsItems[1]);
    items.push(...lsItems);
    // console.log('still works!');
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('Deleting Item', id);
  // update our items array without this one
  items = items.filter((item) => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('marking as complete', id);
  // console.log(items);
  const itemRef = items.find((item) => item.id === id);
  // console.log(itemRef);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);

// list.addEventListener('itemsUpdated', (e) => {
//   console.log(e);
// });

list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// const buttons = list.querySelectorAll('button');
// console.log(buttons);
// buttons.forEach((button) => button.addEventListener('click', deleteItem));

/* Event Delegation: We listen for the click on the list <ul> but
then delegate the click over to the button if that is what was clicked */
list.addEventListener('click', function (e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }

  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
