$('.hover').on('mouseover', addTooltip);

function addTooltip() {
  if ($('.tooltip').length > 0) return;

  const hoverTarget = this;
  const hoverTargetId = hoverTarget.id;

  $.get('tooltips.html').then((html) => {
    $(html).find(`#tooltip-${hoverTargetId}`).appendTo(hoverTarget);
    $('.btn-wrapper').on('click', removeTooltipOnClick);
  });
}

function removeTooltipOnClick() {
  this.parentElement && this.parentElement.remove();
}
