import { tool as asciiToHex } from './ascii-to-hex';
import type { ToolCategory } from './tools.types';

import { tool as caculateBytesLength } from './caculateBytesLength';

export const toolsByCategory: ToolCategory[] = [
  {
    name: '数据转换',
    components: [
      asciiToHex,
      caculateBytesLength,
    ],
  },
];

export const tools = toolsByCategory.flatMap(({ components }) => components);
export const toolsWithCategory = toolsByCategory.flatMap(({ components, name }) =>
  components.map(tool => ({ category: name, ...tool })),
);
