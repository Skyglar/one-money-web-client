import { Pie, PieConfig, measureTextWidth } from "@ant-design/charts";

// const data = [
//     {
//       type: 'Food',
//       value: 2453.96,
//     },
//     {
//       type: 'Gifts',
//       value: 3000,
//     },
//     {
//       type: 'Taxes',
//       value: 534.5,
//     },
//   ];

function renderStatistic(containerWidth: any, text: any, style: any) {
  const { width: textWidth, height: textHeight } = measureTextWidth(
    text,
    style
  );
  const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

  let scale = 1;

  if (containerWidth < textWidth) {
    scale = Math.min(
      Math.sqrt(
        Math.abs(
          Math.pow(R, 2) /
            (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
        )
      ),
      1
    );
  }

  const textStyleStr = `width:${containerWidth}px;`;
  return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
    scale < 1 ? 1 : "inherit"
  };">${text}</div>`;
}

export interface ICategoriesProps {
  data: any[];
}

function CategoriesChart({ data }: ICategoriesProps) {
  const config: PieConfig = {
    appendPadding: 10,
    data,
    legend: false,
    angleField: "value",
    colorField: "type",
    color: (type: any) => {
      return data.filter((e) => e.type === type.type)[0].color;
    },
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v: any) => `${v} ¥`,
      },
    },
    label: false,
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (container: any, view: any, datum: any) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : "总计";
          return renderStatistic(d, text, {
            fontSize: 28,
          });
        },
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: "32px",
        },
        customHtml: (container: any, view: any, datum: any, data: any) => {
          const { width } = container.getBoundingClientRect();
          const text = datum
            ? `¥ ${datum.value}`
            : `¥ ${data.reduce((r: any, d: any) => r + d.value, 0)}`;
          return renderStatistic(width, text, {
            fontSize: 32,
          });
        },
      },
    },
    pieStyle: {
      //configuring some styles for donut
      // line Width is width of space between segments
      // stroke is a color of space between segments
      lineWidth: 3,
      stroke: "yellow",
    },
    // 添加 中心统计文本 交互
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
      {
        type: "pie-statistic-active",
      },
    ],
  };

  return <Pie {...config} />;
}

export default CategoriesChart;
