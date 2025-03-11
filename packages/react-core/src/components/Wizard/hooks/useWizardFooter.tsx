import { useEffect } from 'react';
import { useWizardContext } from '../WizardContext';
import { WizardFooterProps } from '../WizardFooter';

/**
 * Set a unique footer for the wizard. stepId is only required if inactive steps are hidden instead of unmounted.
 * @param footer
 * @param stepId
 */
export const useWizardFooter = (
  footer: React.ReactElement<any> | Partial<WizardFooterProps>,
  stepId?: string | number
) => {
  const { activeStep, setFooter } = useWizardContext();

  useEffect(() => {
    if (footer && (!stepId || activeStep?.id === stepId)) {
      setFooter(footer);

      // Reset the footer on unmount.
      return () => {
        setFooter(null);
      };
    }
  }, [activeStep, footer, setFooter, stepId]);
};
