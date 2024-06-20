import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '计算十六进制字节长度',
  path: '/caculateBytesLength',
  description: '',
  keywords: ['caculateBytesLength'],
  component: () => import('./caculateBytesLength.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-06-20'),
});