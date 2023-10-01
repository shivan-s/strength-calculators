import { describe, it, expect } from 'vitest';
import { calculateTargetWeight } from './targetWeight';

describe('targetWeight', () => {
  it.each([{ input: { oneRM: 190, targetReps: 3, targetRPE: 8.5 } }])(
    'should calculate',
    ({ input }) => {
      const result = calculateTargetWeight(input);
      expect(result).not.toBeNaN();
    }
  );
});
