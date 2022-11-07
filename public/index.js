const body = $(document.body);
body.find('.btn-group-toggle').on('click', (event) => {
  if (event.target.classList.contains('filter-btn')) {
    const currentlyActiveButton = event.target;
    console.log('currentlyActiveButton: ', currentlyActiveButton);
  }
});