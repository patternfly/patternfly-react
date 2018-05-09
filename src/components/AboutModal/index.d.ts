import AboutModalBase, { AboutModalProps } from './AboutModal';
import AboutModalVersionItem, {
  AboutModalVersionItemProps
} from './AboutModalVersionItem';
import AboutModalVersions, {
  AboutModalVersionsProps
} from './AboutModalVersions';

declare const AboutModal: typeof AboutModalBase & {
  VersionItem: typeof AboutModalVersionItem;
  Versions: typeof AboutModalVersions;
};

export {
  AboutModal,
  AboutModalProps,
  AboutModalVersionItem,
  AboutModalVersionItemProps,
  AboutModalVersions,
  AboutModalVersionsProps
};
