import React from 'react';
import { Label } from '@patternfly/react-core';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

export const LabelOutline: React.FunctionComponent = () => {
  const logColor = (color: string) => {
    // eslint-disable-next-line no-console
    console.log(color, 'label clicked');
  };
  return (
    <React.Fragment>
      <strong>Non-status:</strong>
      <br />
      <br />
      <Label variant="outline">Grey</Label>
      <Label variant="outline" icon={<CubeIcon />}>
        Grey icon
      </Label>
      <Label variant="outline" onClose={() => Function.prototype}>
        Grey removable
      </Label>
      <Label variant="outline" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Grey icon removable
      </Label>
      <Label variant="outline" href="#outline">
        Grey link
      </Label>
      <Label variant="outline" href="#outline" onClose={() => Function.prototype}>
        Grey link removable
      </Label>{' '}
      <Label variant="outline" onClick={() => logColor('grey')}>
        Grey clickable
      </Label>
      <Label variant="outline" onClick={() => logColor('grey')} onClose={() => Function.prototype}>
        Grey clickable removable
      </Label>
      <Label variant="outline" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Grey label with icon that overflows
      </Label>{' '}
      <Label variant="outline" isDisabled icon={<CubeIcon />} href="#filled" onClose={() => Function.prototype}>
        Grey link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
        isDisabled
        icon={<CubeIcon />}
        onClick={() => logColor('grey')}
        onClose={() => Function.prototype}
      >
        Grey clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label variant="outline" color="blue">
        Blue
      </Label>
      <Label variant="outline" color="blue" icon={<CubeIcon />}>
        Blue icon
      </Label>
      <Label variant="outline" color="blue" onClose={() => Function.prototype}>
        Blue removable
      </Label>
      <Label variant="outline" color="blue" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Blue icon removable
      </Label>
      <Label variant="outline" color="blue" href="#outline">
        Blue link
      </Label>
      <Label variant="outline" color="blue" href="#outline" onClose={() => Function.prototype}>
        Blue link removable
      </Label>{' '}
      <Label variant="outline" color="blue" onClick={() => logColor('blue')}>
        Blue clickable
      </Label>
      <Label variant="outline" color="blue" onClick={() => logColor('blue')} onClose={() => Function.prototype}>
        Blue clickable removable
      </Label>
      <Label variant="outline" color="blue" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Blue label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="blue"
        isDisabled
        icon={<CubeIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Blue link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
        color="blue"
        isDisabled
        icon={<CubeIcon />}
        onClick={() => logColor('blue')}
        onClose={() => Function.prototype}
      >
        Blue clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label variant="outline" color="green">
        Green
      </Label>
      <Label variant="outline" color="green" icon={<CubeIcon />}>
        Green icon
      </Label>
      <Label variant="outline" color="green" onClose={() => Function.prototype}>
        Green removable
      </Label>
      <Label variant="outline" color="green" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Green icon removable
      </Label>
      <Label variant="outline" color="green" href="#outline">
        Green link
      </Label>
      <Label variant="outline" color="green" href="#outline" onClose={() => Function.prototype}>
        Green link removable
      </Label>{' '}
      <Label variant="outline" color="green" onClick={() => logColor('green')}>
        Green clickable
      </Label>
      <Label variant="outline" color="green" onClick={() => logColor('green')} onClose={() => Function.prototype}>
        Green clickable removable
      </Label>
      <Label variant="outline" color="green" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Green label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="green"
        isDisabled
        icon={<CubeIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Green link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
        color="green"
        isDisabled
        icon={<CubeIcon />}
        onClick={() => logColor('green')}
        onClose={() => Function.prototype}
      >
        Green clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label variant="outline" color="orange">
        Orange
      </Label>
      <Label variant="outline" color="orange" icon={<CubeIcon />}>
        Orange icon
      </Label>
      <Label variant="outline" color="orange" onClose={() => Function.prototype}>
        Orange removable
      </Label>
      <Label variant="outline" color="orange" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Orange icon removable
      </Label>
      <Label variant="outline" color="orange" href="#outline">
        Orange link
      </Label>
      <Label variant="outline" color="orange" href="#outline" onClose={() => Function.prototype}>
        Orange link removable
      </Label>{' '}
      <Label variant="outline" color="orange" onClick={() => logColor('orange')}>
        Orange clickable
      </Label>
      <Label variant="outline" color="orange" onClick={() => logColor('orange')} onClose={() => Function.prototype}>
        Orange clickable removable
      </Label>{' '}
      <Label
        variant="outline"
        color="orange"
        icon={<CubeIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Orange label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="orange"
        isDisabled
        icon={<CubeIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Orange link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
        color="orange"
        isDisabled
        icon={<CubeIcon />}
        onClick={() => logColor('orange')}
        onClose={() => Function.prototype}
      >
        Orange clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label variant="outline" color="red">
        Red
      </Label>
      <Label variant="outline" color="red" icon={<CubeIcon />}>
        Red icon
      </Label>
      <Label variant="outline" color="red" onClose={() => Function.prototype}>
        Red removable
      </Label>
      <Label variant="outline" color="red" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Red icon removable
      </Label>
      <Label variant="outline" color="red" href="#outline">
        Red link
      </Label>
      <Label variant="outline" color="red" href="#outline" onClose={() => Function.prototype}>
        Red link removable
      </Label>{' '}
      <Label variant="outline" color="red" onClick={() => logColor('red')}>
        Red clickable
      </Label>
      <Label variant="outline" color="red" onClick={() => logColor('red')} onClose={() => Function.prototype}>
        Red clickable removable
      </Label>
      <Label variant="outline" color="red" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Red label with icon that overflows
      </Label>
      <br />
      <br />
      <Label variant="outline" color="orangered">
        Orange red
      </Label>
      <Label variant="outline" color="orangered" icon={<CubeIcon />}>
        Orange red icon
      </Label>
      <Label variant="outline" color="orangered" onClose={() => Function.prototype}>
        Orange red removable
      </Label>
      <Label variant="outline" color="orangered" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Orange red icon removable
      </Label>
      <Label variant="outline" color="orangered" href="#outline">
        Orange red link
      </Label>
      <Label variant="outline" color="orangered" href="#outline" onClose={() => Function.prototype}>
        Orange red link removable
      </Label>
      <Label variant="outline" color="orangered" onClick={() => logColor('orangered')}>
        Orange red clickable
      </Label>
      <Label
        variant="outline"
        color="orangered"
        onClick={() => logColor('orangered')}
        onClose={() => Function.prototype}
      >
        Orange red clickable removable
      </Label>
      <Label
        variant="outline"
        color="orangered"
        icon={<CubeIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Orange red label with icon that overflows
      </Label>
      <br />
      <br />
      <Label variant="outline" color="purple">
        Purple
      </Label>
      <Label variant="outline" color="purple" icon={<CubeIcon />}>
        Purple icon
      </Label>
      <Label variant="outline" color="purple" onClose={() => Function.prototype}>
        Purple removable
      </Label>
      <Label variant="outline" color="purple" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Purple icon removable
      </Label>
      <Label variant="outline" color="purple" href="#outline">
        Purple link
      </Label>
      <Label variant="outline" color="purple" href="#outline" onClose={() => Function.prototype}>
        Purple link removable
      </Label>{' '}
      <Label variant="outline" color="purple" onClick={() => logColor('purple')}>
        Purple clickable
      </Label>
      <Label variant="outline" color="purple" onClick={() => logColor('purple')} onClose={() => Function.prototype}>
        Purple clickable removable
      </Label>{' '}
      <Label
        variant="outline"
        color="purple"
        icon={<CubeIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Purple label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="purple"
        isDisabled
        icon={<CubeIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Purple link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
        color="purple"
        isDisabled
        icon={<CubeIcon />}
        onClick={() => logColor('purple')}
        onClose={() => Function.prototype}
      >
        Purple clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label variant="outline" color="teal">
        Teal
      </Label>
      <Label variant="outline" color="teal" icon={<CubeIcon />}>
        Teal icon
      </Label>
      <Label variant="outline" color="teal" onClose={() => Function.prototype}>
        Teal removable
      </Label>
      <Label variant="outline" color="teal" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Teal icon removable
      </Label>
      <Label variant="outline" color="teal" href="#outline">
        Teal link
      </Label>
      <Label variant="outline" color="teal" href="#outline" onClose={() => Function.prototype}>
        Teal link removable
      </Label>{' '}
      <Label variant="outline" color="teal" onClick={() => logColor('teal')}>
        Teal clickable
      </Label>
      <Label variant="outline" color="teal" onClick={() => logColor('teal')} onClose={() => Function.prototype}>
        Teal clickable removable
      </Label>
      <Label variant="outline" color="teal" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Teal label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="teal"
        isDisabled
        icon={<CubeIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Teal link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
        color="teal"
        isDisabled
        icon={<CubeIcon />}
        onClick={() => logColor('teal')}
        onClose={() => Function.prototype}
      >
        Teal clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label variant="outline" color="yellow">
        Yellow
      </Label>
      <Label variant="outline" color="yellow" icon={<CubeIcon />}>
        Yellow icon
      </Label>
      <Label variant="outline" color="yellow" onClose={() => Function.prototype}>
        Yellow removable
      </Label>
      <Label variant="outline" color="yellow" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Yellow icon removable
      </Label>
      <Label variant="outline" color="yellow" href="#outline">
        Yellow link
      </Label>
      <Label variant="outline" color="yellow" href="#outline" onClose={() => Function.prototype}>
        Yellow link removable
      </Label>{' '}
      <Label variant="outline" color="yellow" onClick={() => logColor('yellow')}>
        Yellow clickable
      </Label>
      <Label variant="outline" color="yellow" onClick={() => logColor('yellow')} onClose={() => Function.prototype}>
        Yellow clickable removable
      </Label>
      <Label
        variant="outline"
        color="yellow"
        icon={<CubeIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Yellow label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="yellow"
        isDisabled
        icon={<CubeIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Yellow link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
        color="yellow"
        isDisabled
        icon={<CubeIcon />}
        onClick={() => logColor('yellow')}
        onClose={() => Function.prototype}
      >
        Yellow clickable removable (disabled)
      </Label>
      <br />
      <br />
      <strong>Status:</strong>
      <br />
      <br />
      <Label status="success" variant="outline">
        Success
      </Label>
      <Label status="success" variant="outline" onClose={() => Function.prototype}>
        Success removable
      </Label>
      <Label status="success" variant="outline" href="#filled">
        Success link
      </Label>
      <Label status="success" variant="outline" href="#filled" onClose={() => Function.prototype}>
        Success link removable
      </Label>
      <Label status="success" variant="outline" onClick={() => logColor('success')}>
        Success clickable
      </Label>
      <Label status="success" variant="outline" onClick={() => logColor('success')} onClose={() => Function.prototype}>
        Success clickable removable
      </Label>
      <Label status="success" variant="outline" onClose={() => Function.prototype} textMaxWidth="16ch">
        Success label with text that overflows
      </Label>
      <br />
      <br />
      <Label status="warning" variant="outline">
        Warning
      </Label>
      <Label status="warning" variant="outline" onClose={() => Function.prototype}>
        Warning removable
      </Label>
      <Label status="warning" variant="outline" href="#filled">
        Warning link
      </Label>
      <Label status="warning" variant="outline" href="#filled" onClose={() => Function.prototype}>
        Warning link removable
      </Label>
      <Label status="warning" variant="outline" onClick={() => logColor('warning')}>
        Warning clickable
      </Label>
      <Label status="warning" variant="outline" onClick={() => logColor('warning')} onClose={() => Function.prototype}>
        Warning clickable removable
      </Label>
      <Label status="warning" variant="outline" onClose={() => Function.prototype} textMaxWidth="16ch">
        Warning label with text that overflows
      </Label>
      <br />
      <br />
      <Label status="danger" variant="outline">
        Danger
      </Label>
      <Label status="danger" variant="outline" onClose={() => Function.prototype}>
        Danger removable
      </Label>
      <Label status="danger" variant="outline" href="#filled">
        Danger link
      </Label>
      <Label status="danger" variant="outline" href="#filled" onClose={() => Function.prototype}>
        Danger link removable
      </Label>
      <Label status="danger" variant="outline" onClick={() => logColor('danger')}>
        Danger clickable
      </Label>
      <Label status="danger" variant="outline" onClick={() => logColor('danger')} onClose={() => Function.prototype}>
        Danger clickable removable
      </Label>
      <Label status="danger" variant="outline" onClose={() => Function.prototype} textMaxWidth="16ch">
        Danger label with text that overflows
      </Label>
      <br />
      <br />
      <Label status="info" variant="outline">
        Info
      </Label>
      <Label status="info" variant="outline" onClose={() => Function.prototype}>
        Info removable
      </Label>
      <Label status="info" variant="outline" href="#filled">
        Info link
      </Label>
      <Label status="info" variant="outline" href="#filled" onClose={() => Function.prototype}>
        Info link removable
      </Label>
      <Label status="info" variant="outline" onClick={() => logColor('info')}>
        Info clickable
      </Label>
      <Label status="info" variant="outline" onClick={() => logColor('info')} onClose={() => Function.prototype}>
        Info clickable removable
      </Label>
      <Label status="info" variant="outline" onClose={() => Function.prototype} textMaxWidth="16ch">
        Info label with text that overflows
      </Label>
      <br />
      <br />
      <Label status="custom" variant="outline">
        Custom
      </Label>
      <Label status="custom" variant="outline" onClose={() => Function.prototype}>
        Custom removable
      </Label>
      <Label status="custom" variant="outline" href="#filled">
        Custom link
      </Label>
      <Label status="custom" variant="outline" href="#filled" onClose={() => Function.prototype}>
        Custom link removable
      </Label>
      <Label status="custom" variant="outline" onClick={() => logColor('custom')}>
        Custom clickable
      </Label>
      <Label status="custom" variant="outline" onClick={() => logColor('custom')} onClose={() => Function.prototype}>
        Custom clickable removable
      </Label>
      <Label status="custom" variant="outline" onClose={() => Function.prototype} textMaxWidth="16ch">
        Custom label with text that overflows
      </Label>
    </React.Fragment>
  );
};
