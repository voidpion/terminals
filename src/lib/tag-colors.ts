const colorPairs = [
  { bg: 'rgba(158,206,106,0.15)', text: '#9ece6a', hoverBg: 'rgba(158,206,106,0.25)' },  // green
  { bg: 'rgba(122,162,247,0.15)', text: '#7aa2f7', hoverBg: 'rgba(122,162,247,0.25)' },  // blue
  { bg: 'rgba(187,154,247,0.15)', text: '#bb9af7', hoverBg: 'rgba(187,154,247,0.25)' },  // purple
  { bg: 'rgba(125,207,255,0.15)', text: '#7dcfff', hoverBg: 'rgba(125,207,255,0.25)' },  // cyan
  { bg: 'rgba(224,175,104,0.15)', text: '#e0af68', hoverBg: 'rgba(224,175,104,0.25)' },  // yellow
  { bg: 'rgba(255,158,100,0.15)', text: '#ff9e64', hoverBg: 'rgba(255,158,100,0.25)' },  // orange
  { bg: 'rgba(247,118,142,0.15)', text: '#f7768e', hoverBg: 'rgba(247,118,142,0.25)' },  // red
  { bg: 'rgba(115,218,202,0.15)', text: '#73daca', hoverBg: 'rgba(115,218,202,0.25)' },  // teal
];

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export function getTagColor(tag: string) {
  return colorPairs[hashCode(tag) % colorPairs.length];
}
