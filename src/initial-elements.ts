import { Position } from '@braks/vue-flow'

export const initialElements = [
  { id: '1', type: 'custom', data: { label: 'Monitor', icon: 'monitor'}, position: { x: 0, y: 100 }, sourcePosition: Position.Left, targetPosition: Position.Right, width: 160, height: 100 },
  { id: '2', type: 'custom', data: { label: 'Analyze', icon: 'ruler'}, position: { x: 200, y: 100 }, sourcePosition: Position.Left, targetPosition: Position.Right, width: 160, height: 100 },
  { id: '3', type: 'custom', data: { label: 'Decide', icon: 'shuffle'}, position: { x: 400, y: -25 }, sourcePosition: Position.Left, targetPosition: Position.Right, width: 160, height: 100 },
  { id: '4', type: 'custom', data: { label: 'Decide', icon: 'shuffle'}, position: { x: 400, y: 275 }, sourcePosition: Position.Left, targetPosition: Position.Right, width: 160, height: 100 },
  { id: '5', type: 'custom', data: { label: 'Transform CPU', icon: 'cpu'}, position: { x: 600, y: -100 }, sourcePosition: Position.Left, targetPosition: Position.Right, width: 160, height: 100 },
  { id: '6', type: 'custom', data: { label: 'Transform GPU', icon: 'gpu'}, position: { x: 600, y: 50 }, sourcePosition: Position.Left, targetPosition: Position.Right, width: 160, height: 100 },
  { id: '7', type: 'custom', data: { label: 'Transcode Cloud', icon: 'cloud'}, position: { x: 600, y: 200 }, sourcePosition: Position.Left, targetPosition: Position.Right, width: 160, height: 100 },
  { id: '8', type: 'custom', data: { label: 'Transcode Cloud', icon: 'cloud'}, position: { x: 600, y: 350 }, sourcePosition: Position.Left, targetPosition: Position.Right, width: 160, height: 100 },
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e4-7', source: '4', target: '7' },
  { id: 'e4-8', source: '4', target: '8' },
]