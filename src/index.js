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

function Sketchifier(svg, option) {
  const defaultOptions = {
    fillStyle: 'hachure',
    roughness: 1,
    bowing: 1,
    chartType: '',
  };

  const mySvg = svg;
  const myOption = { ...defaultOptions, ...option };
  const rc = rough.svg(svg);
  const hiddenEl = []; // save the state for all hidden elements
  const chartConfig = chartConfigs[myOption.chartType];
  const blacklist = chartConfig ? chartConfig.blacklist : [];

  function handifyRect(el) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const x = $(el).attr('x') ? parseInt($(el).attr('x'), 10) : 0;
    const y = $(el).attr('y') ? parseInt($(el).attr('y'), 10) : 0;

    const width = parseInt($(el).attr('width'), 10);
    const height = parseInt($(el).attr('height'), 10);
    const fill = $(el).attr('fill');
    // const strokeWidth = $(el).attr("stroke-width");
    const stroke = $(el).attr('stroke');
    // const opacity = $(el).attr('opacity');
    const node = rc.rectangle(x, y, width, height, {
      fill,
      stroke,
      fillStyle: myOption.fillStyle,
      roughness: myOption.roughness,
      bowing: myOption.bowing,
    });
    $(node).addClass('handy');
    parent.appendChild(node);
  }

  function handifyCircle(el) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const cx = parseInt($(el).attr('cx'),10);
    const cy = parseInt($(el).attr('cy'),10);
    const r = parseInt($(el).attr('r'),10);
    const fill = $(el).attr('fill');
    const stroke = $(el).attr('stroke');
    const node = rc.circle(cx,cy,r, {
      fill,
      stroke,
      fillStyle: myOption.fillStyle,
      roughness: myOption.roughness,
      bowing: myOption.bowing,
    });
    $(node).addClass('handy');
    parent.appendChild(node);
  }

  function handifyPath(el) {
    $(el).hide();
    hiddenEl.push($(el));
    const parent = $(el).parent()[0];
    const d = $(el).attr('d');
    const fill = $(el).attr('fill');
    // const strokeWidth = $(el).attr("stroke-width");
    const stroke = $(el).attr('stroke');
    // const opacity = $(el).attr('opacity');
    const node = rc.path(d, {
      fill,
      stroke,
      fillStyle: myOption.fillStyle,
      roughness: myOption.roughness,
      bowing: myOption.bowing,
    });
    $(node).addClass('handy');
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
          .each(function () {
            handify($(this)[0]);
          });
        break;
      case 'rect':
        handifyRect(el);
        break;
      case 'circle':
        console.log('find circiles');
        handifyCircle(el);
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
