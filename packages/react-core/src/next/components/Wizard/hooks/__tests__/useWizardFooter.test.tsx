import React from 'react';

import { renderHook } from '@testing-library/react-hooks';

import { useWizardFooter } from '../useWizardFooter';
import * as WizardContext from '../../WizardContext';

describe('useWizardFooter', () => {
  const customFooter = <>My custom footer</>;
  const useWizardContextSpy = jest.spyOn(WizardContext, 'useWizardContext');
  const setFooter = jest.fn();

  it('sets the footer when one is provided without a stepId', () => {
    useWizardContextSpy.mockReturnValueOnce({ setFooter } as any);

    renderHook(() => useWizardFooter(customFooter));
    expect(setFooter).toHaveBeenCalledWith(customFooter);
  });

  it(`sets the footer when the provided stepId matches the activeStep's id`, () => {
    useWizardContextSpy.mockReturnValueOnce({ setFooter, activeStep: { id: 'active-step-id' } } as any);

    renderHook(() => useWizardFooter(customFooter, 'active-step-id'));
    expect(setFooter).toHaveBeenCalledWith(customFooter);
  });

  it(`does not set the footer when the provided stepId does not match the activeStep's id`, () => {
    useWizardContextSpy.mockReturnValueOnce({ setFooter, activeStep: { id: 'active-step-id' } } as any);

    renderHook(() => useWizardFooter(customFooter, 'some-other-step-id'));
    expect(setFooter).not.toHaveBeenCalled();
  });

  it('sets the footer to null on unmount', () => {
    useWizardContextSpy.mockReturnValueOnce({ setFooter } as any);

    const { unmount } = renderHook(() => useWizardFooter(customFooter));
    unmount();

    expect(setFooter).toHaveBeenCalledWith(null);
  });

  it('sets footer with default props instead of react element', () => {
    const footerProps = { onNext: jest.fn(), onBack: jest.fn(), onClose: jest.fn() };
    useWizardContextSpy.mockReturnValueOnce({ setFooter } as any);

    renderHook(() => useWizardFooter(footerProps));

    expect(setFooter).toHaveBeenCalledWith(footerProps);
  });
});
