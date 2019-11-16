import highchartsConfig from './highcharts.js';
import xchartsConfig from './xcharts.js';

import './style.css';

const chartConfigs = {
  highcharts: highchartsConfig,
  xcharts: xchartsConfig,
};

function shouldFilter(el, blacklist) {
  if (!blacklist) {
    return false;
  }

  for (let i = 0; i < blacklist.length; i += 1) {
    if ($(el).hasClass(blacklist[i])) {
      return true;
    }
  }
  return false;
}

function Sketchifier(root, option) {
  const svgList = $(root).find('svg');
  const handlers = [];
  svgList.each(function(index) {
    const el = $(this)[0];
    handlers.push(SVGSketchifier(el, option));
  })

  return {
    handify() {
      handlers.forEach(h => h.handify());
    },
    restore() {
      handlers.forEach(h => h.restore());
    },
  };
}

function SVGSketchifier(svg, option) {
  const defaultOptions = {
    fillStyle: 'hachure',
    roughness: 1,
    bowing: 1,
    strokeWidth: 1,
    chartType: '',
  };

  const mySvg = svg;
  const myOption = {
    ...defaultOptions,
    ...option,
  };

  const rc = rough.svg(svg);
  const hiddenEl = []; // save the state for all hidden elements
  const chartConfig = chartConfigs[myOption.chartType];
  const blacklist = chartConfig ? chartConfig.blacklist : [];

  function getAttrValue(el, attr, defaultValue = 0.0) {
    if ($(el).attr(attr)) {
      return parseFloat($(el).attr(attr));
    }
    if ($(el).css(attr)) {
      return parseFloat($(el).css(attr));
    }
    return defaultValue;
  }

  function getStyleAttrValue(el, attr) {
    return $(el).attr(attr) ? $(el).attr(attr) : $(el).css(attr);
  }

  function handifyRect(el) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const x = getAttrValue(el, 'x');
    const y = getAttrValue(el, 'y');
    const width = getAttrValue(el, 'width');
    const height = getAttrValue(el, 'height');
    const fill = getStyleAttrValue(el, 'fill');
    const stroke = getStyleAttrValue(el, 'stroke');
    const opacity = getAttrValue(el, 'opacity', 1.0);
    const node = rc.rectangle(x, y, width, height, {
      fill,
      stroke,
      fillStyle: myOption.fillStyle,
      roughness: myOption.roughness,
      bowing: myOption.bowing,
      strokeWidth: myOption.strokeWidth
    });
    $(node).addClass('handy');
    $(node).attr('opacity', opacity);
    if (myOption.fillStyle === 'solid') {
      $(node).children().css('fill', fill);
    }
    if ($(el).attr('transform')) {
      $(node).attr('transform', $(el).attr('transform'));
    }
    parent.appendChild(node);
  }

  function handifyCircle(el) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const cx = getAttrValue(el, 'cx');
    const cy = getAttrValue(el, 'cy');
    const r = getAttrValue(el, 'r');
    const rr = r || parseFloat(getStyleAttrValue(el, 'r'));
    const fill = getStyleAttrValue(el, 'fill');
    const stroke = getStyleAttrValue(el, 'stroke');
    const opacity = getAttrValue(el, 'opacity', 1.0);
    const node = rc.circle(cx, cy, rr * 2, {
      fill,
      stroke,
      fillStyle: myOption.fillStyle,
      roughness: myOption.roughness,
      bowing: myOption.bowing,
      strokeWidth: myOption.strokeWidth
    });
    $(node).addClass('handy');
    $(node).attr('opacity', opacity);
    if (myOption.fillStyle === 'solid') {
      $(node).children().css('fill', fill);
    }
    if ($(el).attr('transform')) {
      $(node).attr('transform', $(el).attr('transform'));
    }
    parent.appendChild(node);
  }

  function handifyLine(el) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const x1 = getAttrValue(el, 'x1');
    const x2 = getAttrValue(el, 'x2');
    const y1 = getAttrValue(el, 'y1');
    const y2 = getAttrValue(el, 'y2');
    const fill = getStyleAttrValue(el, 'fill');
    const stroke = getStyleAttrValue(el, 'stroke');
    const opacity = getAttrValue(el, 'opacity', 1.0);
    const node = rc.line(x1, y1, x2, y2, {
      fill,
      stroke,
      fillStyle: myOption.fillStyle,
      roughness: myOption.roughness,
      bowing: myOption.bowing,
      strokeWidth: myOption.strokeWidth
    });
    $(node).addClass('handy');
    $(node).attr('opacity', opacity);
    if (myOption.fillStyle === 'solid') {
      $(node).children().css('fill', fill);
    }
    if ($(el).attr('transform')) {
      $(node).attr('transform', $(el).attr('transform'));
    }
    parent.appendChild(node);
  }

  function handifyEllipse(el) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const cx = getAttrValue(el, 'cx');
    const cy = getAttrValue(el, 'cy');
    const rx = getAttrValue(el, 'rx');
    const ry = getAttrValue(el, 'ry');
    const fill = getStyleAttrValue(el, 'fill');
    const stroke = getStyleAttrValue(el, 'stroke');
    const opacity = getAttrValue(el, 'opacity', 1.0);
    const node = rc.ellipse(cx, cy, rx * 2, ry * 2, {
      fill,
      stroke,
      fillStyle: myOption.fillStyle,
      roughness: myOption.roughness,
      bowing: myOption.bowing,
      strokeWidth: myOption.strokeWidth,
    });
    $(node).addClass('handy');
    $(node).attr('opacity', opacity);
    if (myOption.fillStyle === 'solid') {
      $(node).children().css('fill', fill);
    }
    if ($(el).attr('transform')) {
      $(node).attr('transform', $(el).attr('transform'));
    }
    parent.appendChild(node);
  }

  function handifyPolygon(el) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const points = $(el).attr('points');
    if (points) {
      const pointsArray = points.split(/(\s+)/).filter((e) => e.trim().length > 0);
      const pointsPairArray = pointsArray.map((p) => {
        const po = p.split(',');
        return [parseFloat(po[0]), parseFloat(po[1])];
      });
      const fill = getStyleAttrValue(el, 'fill');
      const stroke = getStyleAttrValue(el, 'stroke');
      const opacity = getAttrValue(el, 'opacity', 1.0);
      const node = rc.polygon(pointsPairArray, {
        fill,
        stroke,
        fillStyle: myOption.fillStyle,
        roughness: myOption.roughness,
        bowing: myOption.bowing,
        strokeWidth: myOption.strokeWidth,
      });
      $(node).addClass('handy');
      $(node).attr('opacity', opacity);
      if (myOption.fillStyle === 'solid') {
        $(node).children().css('fill', fill);
      }
      if ($(el).attr('transform')) {
        $(node).attr('transform', $(el).attr('transform'));
      }
      parent.appendChild(node);
    }
  }

  function handifyPath(el) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const d = $(el).attr('d');
    const fill = getStyleAttrValue(el, 'fill');
    const stroke = getStyleAttrValue(el, 'stroke');
    const opacity = getAttrValue(el, 'opacity', 1.0);
    const node = rc.path(d, {
      fill,
      stroke,
      fillStyle: myOption.fillStyle,
      roughness: myOption.roughness,
      bowing: myOption.bowing,
      strokeWidth: myOption.strokeWidth,
    });
    $(node).addClass('handy');
    $(node).attr('opacity', opacity);
    if (myOption.fillStyle === 'solid') {
      $(node).children().css('fill', fill);
    }
    if ($(el).attr('transform')) {
      $(node).attr('transform', $(el).attr('transform'));
    }
    parent.appendChild(node);
  }

  function handify(el) {
    const tag = $(el).prop('tagName').toLowerCase();

    if (shouldFilter(el, blacklist)) {
      return;
    }

    switch (tag) {
      case 'svg':
      case 'g':
        $(el)
          .children()
          .each(function() {
            handify($(this)[0]);
          });
        break;
      case 'rect':
        handifyRect(el);
        break;
      case 'circle':
        handifyCircle(el);
        break;
      case 'line':
        handifyLine(el);
        break;
      case 'ellipse':
        handifyEllipse(el);
        break;
      case 'polygon':
        handifyPolygon(el);
        break;
      case 'path':
        handifyPath(el);
        break;
      case 'text':
        $(el).addClass('sk-text');
        break;
      default:
    }
  }

  return {
    handify() {
      handify(mySvg);
    },
    restore() {
      $('.handy').remove();
      hiddenEl.forEach((el) => {
        el.show();
      });
      $(mySvg)
        .find('text')
        .removeClass('sk-text');
    },
  };
}

global.Sketchifier = Sketchifier;