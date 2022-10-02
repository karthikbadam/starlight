import React, { useMemo } from 'react'
import { Bar } from '@visx/shape'
import { Text } from '@visx/text'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import { Box, Skeleton, useToken } from '@chakra-ui/react'

const MIN_WIDTH = 30

type BarsProps = {
  width?: number
  height?: number
  events?: boolean
  loading?: boolean
  data: {
    [key: string]: number
  }
}

const VisBars = ({
  data = {},
  width = 300,
  events = false,
  loading = false,
}: BarsProps) => {
  const height = MIN_WIDTH * Object.keys(data).length + MIN_WIDTH

  // bounds
  const xMax = width
  const yMax = height

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [0, xMax],
        round: true,
        domain: [0, Math.max(...Object.values(data))],
      }),
    [xMax, data]
  )

  const yScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, yMax],
        round: true,
        domain: Object.keys(data),
        paddingInner: 0.4,
        paddingOuter: 0,
      }),
    [yMax, data]
  )

  const [primary, blue200] = useToken('colors', ['primary', 'blue.200'])

  return (
    <Skeleton isLoaded={!loading}>
      <Box maxH={600} overflow="scroll">
        <svg width={width} height={height}>
          <Group>
            {Object.entries(data).map(([key, value]) => {
              const barWidth = xScale(value)
              const barHeight = 4
              const x = 0
              const y = yScale(key) ?? 0
              return (
                <Group left={x} top={y} key={`bar-${key}`}>
                  <Text
                    textAnchor="start"
                    verticalAnchor="start"
                    fill={primary}
                  >
                    {key}
                  </Text>
                  <Bar
                    x={0}
                    y={yScale.bandwidth() - barHeight / 2}
                    width={barWidth}
                    height={barHeight}
                    fill={blue200}
                    rx={2}
                    onClick={() => {
                      if (events) console.log(`clicked: ${key} ${value}`)
                    }}
                  />
                </Group>
              )
            })}
          </Group>
        </svg>
      </Box>
    </Skeleton>
  )
}

export default VisBars
