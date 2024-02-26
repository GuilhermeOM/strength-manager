'use client';

import { useEffect, useMemo, useState } from 'react';
import { AxisOptions, Chart } from 'react-charts';

interface LineChartProps {
  series: Series[];
}

interface Series {
  id?: string;
  label?: string;
  data: Cartesian<number, number>[] | Cartesian<Date, number>[];
}

interface Cartesian<X extends number | Date, Y extends number> {
  x: X;
  y: Y;
}

interface LineChartSeries extends Series {
  secondaryAxisId?: string;
}

export default function LineChart({ series }: LineChartProps) {
  const [lineChartSeries, setLineChartSeries] = useState<LineChartSeries[]>([]);

  useEffect(() => {
    function seriesToLineChartSeries(series: Series[]) {
      const lineChartSeriesMatrix = seriesToMatrix(series);
      const lineChartSeriesArr: LineChartSeries[] = [];

      lineChartSeriesMatrix.forEach((fstruct, fi) => {
        fstruct.forEach((sstruct) => {
          if (sstruct.id) {
            lineChartSeriesArr.push({
              id: (Number(sstruct.id) + fi).toString(),
              label: sstruct.label,
              data: sstruct.data,
              secondaryAxisId: (Number(sstruct.id) + fi).toString(),
            });
          }
        });
      });

      return lineChartSeriesArr;
    }

    function seriesToMatrix(series: Series[]) {
      // duplicate values due to "bubble" and "line" design
      return series.map((s, i) => [
        {
          id: i.toString(),
          ...s,
        },
        {
          id: (i + 1).toString(),
          ...s,
        },
      ]);
    }

    setLineChartSeries(seriesToLineChartSeries(series));
  }, [series]);

  const primaryAxis = useMemo(
    (): AxisOptions<Cartesian<number, number> | Cartesian<Date, number>> => ({
      getValue: (datum) => datum.x,
      showGrid: false,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<Cartesian<number, number> | Cartesian<Date, number>>[] =>
      lineChartSeries.map((s, i) => ({
        id: i.toString(),
        getValue: (datum) => datum.y,
        elementType: i % 2 === 0 ? 'line' : 'bubble',
        showGrid: false,
        show: i === 0 && i % 2 === 0,
      })),
    [lineChartSeries]
  );

  return (
    <div className='w-full h-full relative'>
      {lineChartSeries.length > 0 && (
        <Chart
          options={{
            data: lineChartSeries,
            primaryAxis,
            secondaryAxes,
            interactionMode: 'closest', // better for mobile
            tooltip: false,
            getSeriesStyle: (_) => ({
              color: '#000',
            }),
          }}
        />
      )}
    </div>
  );
}
