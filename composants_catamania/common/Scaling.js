import {
  Dimensions
} from 'react-native';

/*
Dimensions standard : CIBLE Galaxy Tab S2
const diagonaleGTS2 = Math.hypot(2048, 1536);

Nexus 10
const diagonaleGTS2 = Math.hypot(2500, 1600);

Nexus 10 émulé
*/
const diagonaleGTS2 = Math.hypot(1232, 800);

export function normalize (size: number): number {

  const { height, width } = Dimensions.get('window');
  const diagonaleDevice = Math.hypot(height, width);
  const scale = diagonaleDevice / diagonaleGTS2;
  
/*
  console.log('size ' + size);
  console.log('height ' + height);
  console.log('width ' + width);
  console.log('diagonaleDevice ' + diagonaleDevice);
  console.log('diagonaleGTS2 ' + diagonaleGTS2);
*/
  return Math.round(size * scale)
}
