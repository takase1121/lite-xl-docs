// Filters the keymap tables rendered by the keymap shortcode.
// Every word in the query must prefix-match a word of the command or keys.
// Uses a delegated listener so tables inserted after load (client-side
// navigation) work without re-running this script.
(function () {
  function filter(container, input) {
    var words = input.value.toLowerCase().split(/[\s:+-]+/).filter(Boolean);
    var rows = container.querySelectorAll("tbody tr[data-terms]");
    var shown = 0;
    Array.prototype.forEach.call(rows, function (row) {
      var terms = " " + row.dataset.terms;
      var match = words.every(function (word) {
        return terms.indexOf(" " + word) !== -1;
      });
      row.hidden = !match;
      if (match) shown++;
    });
    container.querySelector(".keymap-empty").hidden = shown !== 0;
  }

  var timer;
  document.addEventListener("input", function (e) {
    var input = e.target;
    if (!input.matches('.keymap input[name="search"]')) return;
    var container = input.closest(".keymap");
    clearTimeout(timer);
    timer = setTimeout(function () {
      filter(container, input);
    }, 150);
  });
})();
