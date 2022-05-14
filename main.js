$('.hover').on('mouseover', addHTML);
$('.hover').on('mouseleave', removeHTML);

function addHTML() {
  if ($('.tooltip').length > 0) return;

  const hoverTarget = this;
  const hoverTargetId = hoverTarget.id;

  $.get('tooltips.html').then((html) => {
    $(html).find(`#tooltip-${hoverTargetId}`).appendTo(hoverTarget);
  });
}

function removeHTML() {
  this.firstElementChild.remove();
}
