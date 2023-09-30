export function calculateTargetWeight(params: {
  oneRM: number;
  targetReps: number;
  targetRPE: number;
}): number {
  const { oneRM, targetReps, targetRPE } = params;
  const estimatedLoad = oneRM * (1 - (targetReps + (10 - targetRPE) - 1) * (1 / 30));
  return parseFloat(estimatedLoad.toFixed(1));
}
