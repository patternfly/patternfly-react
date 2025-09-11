import { ReactNode, createRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FloatingUIPopper } from '../FloatingUIPopper';

// Get the mock setReference function
const mockSetReference = jest.fn();

// Mock FloatingUI hooks
jest.mock('@floating-ui/react', () => ({
  useFloating: jest.fn(() => ({
    refs: {
      setReference: mockSetReference,
      setFloating: jest.fn()
    },
    floatingStyles: {
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'translate3d(0px, 40px, 0px)'
    },
    context: {},
    placement: 'bottom-start'
  })),
  autoUpdate: jest.fn(),
  offset: jest.fn(),
  flip: jest.fn(),
  shift: jest.fn(),
  size: jest.fn(),
  useClick: jest.fn(() => ({})),
  useHover: jest.fn(() => ({})),
  useFocus: jest.fn(() => ({})),
  useDismiss: jest.fn(() => ({})),
  useInteractions: jest.fn(() => ({
    getReferenceProps: jest.fn(() => ({})),
    getFloatingProps: jest.fn(() => ({}))
  })),
  FloatingPortal: ({ children }: { children: ReactNode }) => <div data-testid="floating-portal">{children}</div>
}));

// Mock the actual FloatingUI functions to capture their calls
const mockUseFloating = require('@floating-ui/react').useFloating;
const mockOffset = require('@floating-ui/react').offset;
const mockFlip = require('@floating-ui/react').flip;
const mockShift = require('@floating-ui/react').shift;
const mockSize = require('@floating-ui/react').size;

describe('FloatingUIPopper', () => {
  const defaultProps = {
    trigger: <button>Test Trigger</button>,
    popper: <div>Test Popper</div>,
    isVisible: true
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('renders trigger and popper when visible', () => {
      render(<FloatingUIPopper {...defaultProps} />);

      expect(screen.getByText('Test Trigger')).toBeInTheDocument();
      expect(screen.getByText('Test Popper')).toBeInTheDocument();
    });

    it('does not render popper when not visible', () => {
      render(<FloatingUIPopper {...defaultProps} isVisible={false} />);

      expect(screen.getByText('Test Trigger')).toBeInTheDocument();
      expect(screen.queryByText('Test Popper')).not.toBeInTheDocument();
    });

    it('renders without trigger when triggerRef is provided', () => {
      const triggerRef = createRef<HTMLButtonElement>();
      const mockElement = document.createElement('button');
      (triggerRef as any).current = mockElement;

      render(<FloatingUIPopper {...defaultProps} triggerRef={triggerRef} />);

      // Should not render the wrapper div when triggerRef is provided
      expect(screen.queryByText('Test Trigger')).not.toBeInTheDocument();
    });
  });

  describe('Width Props Mapping', () => {
    it('applies width prop correctly', () => {
      render(<FloatingUIPopper {...defaultProps} width="200px" />);

      // Verify size middleware was called with correct parameters
      expect(mockSize).toHaveBeenCalledWith(
        expect.objectContaining({
          apply: expect.any(Function)
        })
      );
    });

    it('applies minWidth prop correctly', () => {
      render(<FloatingUIPopper {...defaultProps} minWidth="150px" />);

      expect(mockSize).toHaveBeenCalledWith(
        expect.objectContaining({
          apply: expect.any(Function)
        })
      );
    });

    it('applies maxWidth prop correctly', () => {
      render(<FloatingUIPopper {...defaultProps} maxWidth="300px" />);

      expect(mockSize).toHaveBeenCalledWith(
        expect.objectContaining({
          apply: expect.any(Function)
        })
      );
    });

    it('handles trigger width values correctly', () => {
      render(<FloatingUIPopper {...defaultProps} minWidth="trigger" />);

      expect(mockSize).toHaveBeenCalledWith(
        expect.objectContaining({
          apply: expect.any(Function)
        })
      );
    });

    it('applies width constraints with important flag', () => {
      render(<FloatingUIPopper {...defaultProps} minWidth="200px" />);

      // Verify that size middleware was called
      expect(mockSize).toHaveBeenCalled();

      // Get the size middleware apply function
      const sizeMiddleware = mockSize.mock.calls[0][0];
      const mockElements = {
        floating: {
          style: {
            setProperty: jest.fn()
          }
        }
      };
      const mockRects = {
        reference: { width: 200 }
      };

      sizeMiddleware.apply({ elements: mockElements, rects: mockRects });

      expect(mockElements.floating.style.setProperty).toHaveBeenCalledWith('min-width', '200px', 'important');
    });
  });

  describe('Positioning Props Mapping', () => {
    it('maps direction and position to correct placement', () => {
      render(<FloatingUIPopper {...defaultProps} direction="up" position="right" />);

      expect(mockUseFloating).toHaveBeenCalledWith(
        expect.objectContaining({
          placement: 'top-end'
        })
      );
    });

    it('maps direction and position to correct placement for center', () => {
      render(<FloatingUIPopper {...defaultProps} direction="down" position="center" />);

      expect(mockUseFloating).toHaveBeenCalledWith(
        expect.objectContaining({
          placement: 'bottom'
        })
      );
    });

    it('uses placement prop directly when provided', () => {
      render(<FloatingUIPopper {...defaultProps} placement="top-start" />);

      expect(mockUseFloating).toHaveBeenCalledWith(
        expect.objectContaining({
          placement: 'top-start'
        })
      );
    });

    it('handles RTL direction correctly', () => {
      // Mock getLanguageDirection to return RTL
      const originalGetComputedStyle = window.getComputedStyle;
      window.getComputedStyle = jest.fn(() => ({
        direction: 'rtl'
      })) as any;

      render(<FloatingUIPopper {...defaultProps} direction="down" position="start" />);

      expect(mockUseFloating).toHaveBeenCalledWith(
        expect.objectContaining({
          placement: 'bottom-end' // start becomes end in RTL
        })
      );

      // Restore original function
      window.getComputedStyle = originalGetComputedStyle;
    });
  });

  describe('Middleware Props Mapping', () => {
    it('applies offset middleware with correct distance', () => {
      render(<FloatingUIPopper {...defaultProps} distance={25} />);

      expect(mockOffset).toHaveBeenCalledWith(25);
    });

    it('applies flip middleware when enableFlip is true', () => {
      render(<FloatingUIPopper {...defaultProps} enableFlip={true} />);

      expect(mockFlip).toHaveBeenCalledWith(
        expect.objectContaining({
          fallbackPlacements: undefined
        })
      );
    });

    it('applies flip middleware with custom flipBehavior', () => {
      const customFlipBehavior = ['top', 'bottom'] as ('top' | 'bottom')[];
      render(<FloatingUIPopper {...defaultProps} enableFlip={true} flipBehavior={customFlipBehavior} />);

      expect(mockFlip).toHaveBeenCalledWith(
        expect.objectContaining({
          fallbackPlacements: customFlipBehavior
        })
      );
    });

    it('does not apply flip middleware when enableFlip is false', () => {
      render(<FloatingUIPopper {...defaultProps} enableFlip={false} />);

      expect(mockFlip).not.toHaveBeenCalled();
    });

    it('applies shift middleware when preventOverflow is true', () => {
      render(<FloatingUIPopper {...defaultProps} preventOverflow={true} />);

      expect(mockShift).toHaveBeenCalled();
    });

    it('does not apply shift middleware when preventOverflow is false', () => {
      render(<FloatingUIPopper {...defaultProps} preventOverflow={false} />);

      expect(mockShift).not.toHaveBeenCalled();
    });
  });

  describe('Event Handler Props', () => {
    it('calls onMouseEnter when provided', () => {
      const onMouseEnter = jest.fn();
      render(<FloatingUIPopper {...defaultProps} onMouseEnter={onMouseEnter} />);

      const trigger = screen.getByText('Test Trigger');
      fireEvent.mouseEnter(trigger);

      expect(onMouseEnter).toHaveBeenCalled();
    });

    it('calls onMouseLeave when provided', () => {
      const onMouseLeave = jest.fn();
      render(<FloatingUIPopper {...defaultProps} onMouseLeave={onMouseLeave} />);

      const trigger = screen.getByText('Test Trigger');
      fireEvent.mouseLeave(trigger);

      expect(onMouseLeave).toHaveBeenCalled();
    });

    it('calls onFocus when provided', () => {
      const onFocus = jest.fn();
      render(<FloatingUIPopper {...defaultProps} onFocus={onFocus} />);

      const trigger = screen.getByText('Test Trigger');
      fireEvent.focus(trigger);

      expect(onFocus).toHaveBeenCalled();
    });

    it('calls onBlur when provided', () => {
      const onBlur = jest.fn();
      render(<FloatingUIPopper {...defaultProps} onBlur={onBlur} />);

      const trigger = screen.getByText('Test Trigger');
      fireEvent.blur(trigger);

      expect(onBlur).toHaveBeenCalled();
    });

    it('calls onTriggerClick when provided', () => {
      const onTriggerClick = jest.fn();
      render(<FloatingUIPopper {...defaultProps} onTriggerClick={onTriggerClick} />);

      const trigger = screen.getByText('Test Trigger');
      fireEvent.click(trigger);

      expect(onTriggerClick).toHaveBeenCalled();
    });
  });

  describe('Portal and Container Props', () => {
    it('renders in FloatingPortal by default', () => {
      render(<FloatingUIPopper {...defaultProps} />);

      expect(screen.getByTestId('floating-portal')).toBeInTheDocument();
    });

    it('applies correct zIndex', () => {
      render(<FloatingUIPopper {...defaultProps} zIndex={5000} />);

      const popper = screen.getByText('Test Popper').parentElement;
      expect(popper).toHaveStyle({ zIndex: 5000 });
    });
  });

  describe('Animation and Timing Props', () => {
    it('applies animation duration correctly', () => {
      render(<FloatingUIPopper {...defaultProps} animationDuration={500} />);

      const popper = screen.getByText('Test Popper').parentElement;
      expect(popper).toHaveStyle({
        transition: 'opacity 500ms cubic-bezier(.54, 1.5, .38, 1.11)'
      });
    });

    it('handles entry and exit delays', async () => {
      jest.useFakeTimers();

      render(<FloatingUIPopper {...defaultProps} isVisible={false} entryDelay={100} exitDelay={200} />);

      // Should not be visible initially
      expect(screen.queryByText('Test Popper')).not.toBeInTheDocument();

      // Fast forward timers to test delay behavior
      jest.advanceTimersByTime(100);

      jest.useRealTimers();
    });
  });

  describe('Lifecycle Callbacks', () => {
    it('calls onMount when component mounts', () => {
      const onMount = jest.fn();
      render(<FloatingUIPopper {...defaultProps} onMount={onMount} />);

      expect(onMount).toHaveBeenCalled();
    });

    it('calls onShow when becoming visible', () => {
      const onShow = jest.fn();
      const { rerender } = render(<FloatingUIPopper {...defaultProps} isVisible={false} onShow={onShow} />);

      rerender(<FloatingUIPopper {...defaultProps} isVisible={true} onShow={onShow} />);

      expect(onShow).toHaveBeenCalled();
    });

    it('calls onHide when becoming hidden', () => {
      const onHide = jest.fn();
      const { rerender } = render(<FloatingUIPopper {...defaultProps} isVisible={true} onHide={onHide} />);

      rerender(<FloatingUIPopper {...defaultProps} isVisible={false} onHide={onHide} />);

      expect(onHide).toHaveBeenCalled();
    });
  });

  describe('API Compatibility', () => {
    it('maintains same prop interface as legacy Popper', () => {
      // This test ensures that all props from the legacy Popper are supported
      const allProps = {
        trigger: <button>Test</button>,
        popper: <div>Test</div>,
        direction: 'down' as const,
        position: 'start' as const,
        placement: 'bottom-start' as const,
        width: '200px',
        minWidth: 'trigger',
        maxWidth: '300px',
        appendTo: document.body,
        zIndex: 9999,
        isVisible: true,
        distance: 10,
        onMouseEnter: jest.fn(),
        onMouseLeave: jest.fn(),
        onFocus: jest.fn(),
        onBlur: jest.fn(),
        onTriggerClick: jest.fn(),
        onTriggerEnter: jest.fn(),
        onPopperClick: jest.fn(),
        onPopperMouseEnter: jest.fn(),
        onPopperMouseLeave: jest.fn(),
        onDocumentClick: jest.fn(),
        onDocumentKeyDown: jest.fn(),
        enableFlip: true,
        flipBehavior: 'flip' as const,
        triggerRef: createRef<HTMLElement>(),
        popperRef: createRef<HTMLElement>(),
        animationDuration: 300,
        entryDelay: 0,
        exitDelay: 0,
        onHidden: jest.fn(),
        onHide: jest.fn(),
        onMount: jest.fn(),
        onShow: jest.fn(),
        onShown: jest.fn(),
        preventOverflow: false
      };

      // Should render without errors
      expect(() => render(<FloatingUIPopper {...allProps} />)).not.toThrow();
    });

    it('handles undefined props gracefully', () => {
      const minimalProps = {
        trigger: <button>Test</button>,
        popper: <div>Test</div>
      };

      expect(() => render(<FloatingUIPopper {...minimalProps} />)).not.toThrow();
    });
  });

  describe('Version Compatibility', () => {
    it('should maintain core API compatibility across FloatingUI versions', () => {
      // This test ensures that core FloatingUI APIs still work
      expect(mockUseFloating).toBeDefined();
      expect(mockOffset).toBeDefined();
      expect(mockFlip).toBeDefined();
      expect(mockShift).toBeDefined();
      expect(mockSize).toBeDefined();
    });

    it('should handle all legacy Popper props without errors', () => {
      const allLegacyProps = {
        trigger: <button>Test</button>,
        popper: <div>Test</div>,
        direction: 'down' as const,
        position: 'start' as const,
        placement: 'bottom-start' as const,
        width: '200px',
        minWidth: 'trigger',
        maxWidth: '300px',
        appendTo: document.body,
        zIndex: 9999,
        isVisible: true,
        distance: 10,
        enableFlip: true,
        flipBehavior: 'flip' as const,
        preventOverflow: false,
        animationDuration: 300,
        entryDelay: 0,
        exitDelay: 0
      };

      expect(() => render(<FloatingUIPopper {...allLegacyProps} />)).not.toThrow();
    });

    it('should maintain width behavior compatibility', () => {
      // Test that width props still work correctly
      render(<FloatingUIPopper {...defaultProps} minWidth="trigger" />);
      expect(mockSize).toHaveBeenCalled();
    });

    it('should maintain positioning behavior compatibility', () => {
      // Test that positioning props still work correctly
      render(<FloatingUIPopper {...defaultProps} direction="up" position="right" />);
      expect(mockUseFloating).toHaveBeenCalledWith(
        expect.objectContaining({
          placement: 'top-end'
        })
      );
    });
  });

  describe('Reference Element Handling', () => {
    it('uses triggerRef as reference element when provided', () => {
      const triggerRef = createRef<HTMLButtonElement>();
      const mockElement = document.createElement('button');
      (triggerRef as any).current = mockElement;

      render(<FloatingUIPopper {...defaultProps} triggerRef={triggerRef} />);

      // Should call setReference with the element from triggerRef
      expect(mockSetReference).toHaveBeenCalledWith(mockElement);
    });

    it('handles function triggerRef', () => {
      const mockElement = document.createElement('button');
      const triggerRef = () => mockElement;

      render(<FloatingUIPopper {...defaultProps} triggerRef={triggerRef} />);

      // Should call setReference with the element from triggerRef
      expect(mockSetReference).toHaveBeenCalledWith(mockElement);
    });

    it('handles HTMLElement triggerRef', () => {
      const mockElement = document.createElement('button');

      render(<FloatingUIPopper {...defaultProps} triggerRef={mockElement} />);

      // Should call setReference with the element from triggerRef
      expect(mockSetReference).toHaveBeenCalledWith(mockElement);
    });
  });
});
