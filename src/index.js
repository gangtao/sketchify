import highchartsConfig from './highcharts.js';
import xchartsConfig from './xcharts.js'

import './style.css';

const chartConfigs = {
  highcharts: highchartsConfig,
  xcharts: xchartsConfig
};

function shouldFilter(el, blacklist) {
  if (!blacklist) {
    return false;
  }

  for (let i = 0; i < blacklist.length; i++) {
    if ($(el).hasClass(blacklist[i])) {
      return true;
    }
  }
  return false;
}

function Sketchifier(svg, option) {
  const defaultOptions = {
    fillStyle: 'hachure',
    roughness: 1,
    bowing: 1,
    chartType: ''
  }

  const mySvg = svg;
  const myOption = { ...defaultOptions,...option };
  const rc = rough.svg(svg);
  const hiddenEl = []; // save the state for all hidden elements
  const chartConfig = chartConfigs[myOption.chartType];
  const blacklist = chartConfig ? chartConfig.blacklist : [];

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
      fillStyle: myOption.fillStyle,
      roughness: myOption.roughness,
      bowing: myOption.bowing,
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
      fillStyle: myOption.fillStyle,
      roughness: myOption.roughness,
      bowing: myOption.bowing,
    });
    $(node).addClass("handy");
    parent.appendChild(node);
  }

  function handify(el, rc) {
    const tag = $(el).prop("tagName");
    const className = $(el).attr("class");

    if (shouldFilter(el, blacklist)) {
      return;
    }

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
      case "text":
        $(el).addClass("sk-text");
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
      $(mySvg).find('text').removeClass("sk-text");
    }
  };
}

global.Sketchifier = Sketchifier