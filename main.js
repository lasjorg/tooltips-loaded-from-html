$('.hover').on('mouseover', addTooltip);
$('.hover').on('mouseleave', removeTooltip);

function addTooltip() {
  if ($('.tooltip').length > 0) return;

  const hoverTarget = this;
  const hoverTargetId = hoverTarget.id;

  $.get('tooltips.html').then((html) => {
    $(html).find(`#tooltip-${hoverTargetId}`).appendTo(hoverTarget);
  });
}

function removeTooltip() {
  this.firstElementChild.remove();
}
