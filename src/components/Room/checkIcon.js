import walk from '../../assets/walk-icon--black.svg';
import underground from '../../assets/underground-icon.svg';
import overground from '../../assets/overground-icon.svg';

export default (type) => {
  if (type === 'underground') {
    return underground;
  } else if (type === 'overground') {
    return overground;
  } else if (type === 'walk') {
    return walk;
  }
};
