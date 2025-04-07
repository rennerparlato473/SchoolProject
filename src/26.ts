function calculateArea(rectangle1: [number, number], rectangle2: [number, number]): number {
  const x1 = Math.min(rectangle1[0], rectangle2[0]);
  const y1 = Math.min(rectangle1[1], rectangle2[1]);
  const x2 = Math.max(rectangle1[0], rectangle2[0]);
  const y2 = Math.max(rectangle1[1], rectangle2[1]);

  return (x2 - x1) * (y2 - y1);
}
