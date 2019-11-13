const HIGH_CHART_CLASSES = [
  "highcharts-root",
  "highcharts-grid",
  "highcharts-grid-line",
  "highcharts-axis",
  "highcharts-axis-line",
  "highcharts-series-group",
  "highcharts-series",
  "highcharts-point",
  "highcharts-graph",
  "highcharts-area",
  "highcharts-markers"
];

const HANDY_CLASS = [];

const FILLSTYLE = "cross-hatch";
const ROUGHNESS = 3;

function classCheck(el) {
  for (let i = 0; i < HANDY_CLASS.length; i++) {
    if ($(el).hasClass(HANDY_CLASS[i])) {
      return true;
    }
  }
  return false;
}

function Sketchifier(svg, option) {
  const mySvg = svg;
  const myOption = option;
  const rc = rough.svg(svg);
  const hiddenEl = []; // save the state for all hidden elements

  function handifyRect(el, rc) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const x = $(el).attr("x") ? parseInt($(el).attr("x")) : 0;
    const y = $(el).attr("y") ? parseInt($(el).attr("y")) : 0;

    const width = parseInt($(el).attr("width"));
    const height = parseInt($(el).attr("height"));
    const fill = $(el).attr("fill");
    const strokeWidth = $(el).attr("stroke-width");
    const stroke = $(el).attr("stroke");
    const opacity = $(el).attr("opacity");
    let node = rc.rectangle(x, y, width, height, {
      fill: fill,
      stroke: stroke,
      fillStyle: FILLSTYLE,
      roughness: ROUGHNESS
    });
    $(node).addClass("handy");
    parent.appendChild(node);
  }

  function handifyPath(el, rc) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const d = $(el).attr("d");
    const fill = $(el).attr("fill");
    const strokeWidth = $(el).attr("stroke-width");
    const stroke = $(el).attr("stroke");
    const opacity = $(el).attr("opacity");
    let node = rc.path(d, {
      fill: fill,
      stroke: stroke,
      fillStyle: FILLSTYLE,
      roughness: ROUGHNESS
    });
    $(node).addClass("handy");
    parent.appendChild(node);
  }

  function handify(el, rc) {
    const tag = $(el).prop("tagName");
    const className = $(el).attr("class");

  /*
  if (!classCheck(el)) {
    return;
  }
  */

    switch (tag) {
      case "svg":
      case "g":
        $(el)
          .children()
          .each(function(child) {
            handify($(this)[0], rc);
          });
        break;
      case "rect":
        handifyRect(el, rc);
        break;
      case "path":
        handifyPath(el, rc);
        break;
      default:
      // do nothing
    }
  }

  return {
    handify: function() {
      handify(mySvg, rc);
    },
    restore: function() {
      $(".handy").remove();
      hiddenEl.forEach(function(el) {
        el.show();
      });
    }
  };
}