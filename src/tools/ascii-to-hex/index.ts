import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '文本 ↔ ASCII十六进制',
  path: '/ascii-to-hex',
  description: '',
  keywords: ['ascii', 'to', 'hex'],
  component: () => import('./ascii-to-hex.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-06-20'),
});