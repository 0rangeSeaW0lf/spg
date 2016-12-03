var timerId =
  countdown(
    new Date(2016,12,31),
    function(ts) {
      document.getElementById('pageTimer').innerHTML = ts.toHTML("strong");
    },
    countdown.HOURS|countdown.MINUTES|countdown.SECONDS);