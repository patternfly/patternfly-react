import UtilizationCardBase, { UtilizationCardProps } from './UtilizationCard';
import UtilizationCardDetails, {
  UtilizationCardDetailsProps
} from './UtilizationCardDetails';
import UtilizationCardDetailsCount, {
  UtilizationCardDetailsCountProps
} from './UtilizationCardDetailsCount';
import UtilizationCardDetailsDesc, {
  UtilizationCardDetailsDescProps
} from './UtilizationCardDetailsDesc';
import UtilizationCardDetailsLine1, {
  UtilizationCardDetailsLine1Props
} from './UtilizationCardDetailsLine1';
import UtilizationCardDetailsLine2, {
  UtilizationCardDetailsLine2Props
} from './UtilizationCardDetailsLine2';

declare const UtilizationCard: typeof UtilizationCardBase & {
  Details: typeof UtilizationCardDetails;
  DetailsCount: typeof UtilizationCardDetailsCount;
  DetailsDesc: typeof UtilizationCardDetailsDesc;
  DetailsLine1: typeof UtilizationCardDetailsLine1;
  DetailsLine2: typeof UtilizationCardDetailsLine2;
};

export {
  UtilizationCard,
  UtilizationCardProps,
  UtilizationCardDetails,
  UtilizationCardDetailsProps,
  UtilizationCardDetailsDesc,
  UtilizationCardDetailsCount,
  UtilizationCardDetailsCountProps,
  UtilizationCardDetailsDescProps,
  UtilizationCardDetailsLine1,
  UtilizationCardDetailsLine1Props,
  UtilizationCardDetailsLine2,
  UtilizationCardDetailsLine2Props
};
