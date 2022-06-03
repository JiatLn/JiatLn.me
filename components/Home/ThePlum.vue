<script setup lang="ts">
interface Point {
  x: number
  y: number
}

interface Line {
  from: Point
  to: Point
}

interface Branch {
  from: Point
  length: number
  theta: number
}

const canParentEl = ref<HTMLDivElement>()
const canEl = ref<HTMLCanvasElement>()
const canWidth = computed(() => canParentEl.value?.clientWidth || 0)
const canHeight = computed(() => canParentEl.value?.clientHeight || 0)
const frameCnt = ref<number>(0)

onMounted(() => {
  setTimeout(() => {
    canEl.value && drawPlum()
  }, 600)
})

function drawLine(line: Line) {
  if (!canEl.value)
    return
  const ctx = canEl.value.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(line.from.x, line.from.y)
  ctx.lineTo(line.to.x, line.to.y)
  ctx.stroke()
}

function drawBranch(b: Branch) {
  function getEndPoint(b: Branch): Point {
    const x = b.from.x + Math.cos(b.theta) * b.length
    const y = b.from.y + Math.sin(b.theta) * b.length
    return { x, y }
  }
  const endPoint: Point = getEndPoint(b)
  const line: Line = {
    from: b.from,
    to: endPoint,
  }
  drawLine(line)
  return endPoint
}

const functionStack: Function[] = []
function step(branch: Branch, deep: number) {
  if (deep > 80)
    return

  const endPoint = drawBranch(branch)
  const leftBranch: Branch = {
    from: endPoint,
    length: branch.length + (5 - Math.random() * 10),
    theta: branch.theta + Math.random() * 0.5,
  }
  if (deep < 4 || Math.random() > 0.52)
    functionStack.push(() => step(leftBranch, deep + 1))
  const rightBranch: Branch = {
    from: endPoint,
    length: branch.length + (5 - Math.random() * 10),
    theta: branch.theta - Math.random() * 0.5,
  }
  if (deep < 4 || Math.random() > 0.52)
    functionStack.push(() => step(rightBranch, deep + 1))
}

function drawPlum() {
  const { width, height } = canEl.value
  const ctx = canEl.value.getContext('2d')
  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = '#fff3'
  const b1: Branch = {
    from: { x: 0, y: height },
    length: Math.min(40, width * 0.02),
    theta: -Math.PI / 4,
  }
  const b2: Branch = {
    ...b1,
    from: { x: width, y: 0 },
    theta: 3 * Math.PI / 4,
  }
  step(b1, 0)
  step(b2, 0)
  animationFrame()
}

function frame() {
  const tasks = [...functionStack]
  functionStack.length = 0
  tasks.forEach((fn) => {
    fn()
  })
}

function animationFrame() {
  requestAnimationFrame(() => {
    frameCnt.value++
    if (frameCnt.value === 4) {
      frameCnt.value = 0
      frame()
    }
    animationFrame()
  })
}
</script>

<template>
  <div ref="canParentEl" fixed z-1 top-60px left-0 bottom-0 right-0>
    <canvas ref="canEl" :width="canWidth" :height="canHeight" />
  </div>
</template>

<style scoped lang="scss">
</style>
