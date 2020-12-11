console.log('It Works!');
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role ="tab"]');
// const tabPanels = tabs.querySelectorAll('[role ="tabpanel"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role ="tabpanel"]'));
function handleTabClick(event) {
  //   console.log(event.currentTarget);
  //   console.log(tabPanels);
  tabPanels.forEach(function (panel) {
    // console.log(panel);
    panel.hidden = true;
  });

  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });
  event.currentTarget.setAttribute('aria-seleced', true);
  const { id } = event.currentTarget;
  //   console.log(id);
  //   const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  //   console.log(tabPanel);
  //   tabPanel.hidden = false;

  console.log(tabPanels);
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-lebelledby') === id
  );

  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
