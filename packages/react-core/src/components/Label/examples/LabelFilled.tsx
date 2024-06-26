import React from 'react';
import { Label } from '@patternfly/react-core';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

export const LabelFilled: React.FunctionComponent = () => {
  const logColor = (color: string) => {
    // eslint-disable-next-line no-console
    console.log(color, 'label clicked');
  };
  return (
    <React.Fragment>
      <strong>Non-status:</strong>
      <br />
      <br />
      <Label>Grey</Label>
      <Label icon={<CubeIcon />}>Grey icon</Label>
      <Label onClose={() => Function.prototype}>Grey removable</Label>
      <Label icon={<CubeIcon />} onClose={() => Function.prototype}>
        Grey icon removable
      </Label>
      <Label href="#filled">Grey link</Label>
      <Label href="#filled" onClose={() => Function.prototype}>
        Grey link removable
      </Label>{' '}
      <Label onClick={() => logColor('grey')}>Grey clickable</Label>{' '}
      <Label onClick={() => logColor('grey')} onClose={() => Function.prototype}>
        Grey clickable removable
      </Label>{' '}
      <Label icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Grey label with icon that overflows
      </Label>{' '}
      <Label isDisabled icon={<CubeIcon />} href="#filled" onClose={() => Function.prototype}>
        Grey link removable (disabled)
      </Label>{' '}
      <Label isDisabled icon={<CubeIcon />} onClick={() => logColor('grey')} onClose={() => Function.prototype}>
        Grey clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label color="blue">Blue</Label>
      <Label color="blue" icon={<CubeIcon />}>
        Blue icon
      </Label>
      <Label color="blue" onClose={() => Function.prototype}>
        Blue removable
      </Label>
      <Label color="blue" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Blue icon removable
      </Label>
      <Label color="blue" href="#filled">
        Blue link
      </Label>
      <Label color="blue" href="#filled" onClose={() => Function.prototype}>
        Blue link removable
      </Label>{' '}
      <Label color="blue" onClick={() => logColor('blue')}>
        Blue clickable
      </Label>
      <Label color="blue" onClick={() => logColor('blue')} onClose={() => Function.prototype}>
        Blue clickable removable
      </Label>{' '}
      <Label color="blue" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Blue label with icon that overflows
      </Label>{' '}
      <Label color="blue" isDisabled icon={<CubeIcon />} href="#filled" onClose={() => Function.prototype}>
        Blue link removable (disabled)
      </Label>{' '}
      <Label
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
      <Label color="green">Green</Label>
      <Label color="green" icon={<CubeIcon />}>
        Green icon
      </Label>
      <Label color="green" onClose={() => Function.prototype}>
        Green removable
      </Label>
      <Label color="green" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Green icon removable
      </Label>
      <Label color="green" href="#filled">
        Green link
      </Label>
      <Label color="green" href="#filled" onClose={() => Function.prototype}>
        Green link removable
      </Label>{' '}
      <Label color="green" onClick={() => logColor('green')}>
        Green clickable
      </Label>
      <Label color="green" onClick={() => logColor('green')} onClose={() => Function.prototype}>
        Green clickable removable
      </Label>{' '}
      <Label color="green" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Green label with icon that overflows
      </Label>{' '}
      <Label color="green" isDisabled icon={<CubeIcon />} href="#filled" onClose={() => Function.prototype}>
        Green link removable (disabled)
      </Label>{' '}
      <Label
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
      <Label color="orange">Orange</Label>
      <Label color="orange" icon={<CubeIcon />}>
        Orange icon
      </Label>
      <Label color="orange" onClose={() => Function.prototype}>
        Orange removable
      </Label>
      <Label color="orange" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Orange icon removable
      </Label>
      <Label color="orange" href="#filled">
        Orange link
      </Label>
      <Label color="orange" href="#filled" onClose={() => Function.prototype}>
        Orange link removable
      </Label>{' '}
      <Label color="orange" onClick={() => logColor('orange')}>
        Orange clickable
      </Label>
      <Label color="orange" onClick={() => logColor('orange')} onClose={() => Function.prototype}>
        Orange clickable removable
      </Label>{' '}
      <Label color="orange" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Orange label with icon that overflows
      </Label>{' '}
      <Label color="orange" isDisabled icon={<CubeIcon />} href="#filled" onClose={() => Function.prototype}>
        Orange link removable (disabled)
      </Label>{' '}
      <Label
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
      <Label color="red">Red</Label>
      <Label color="red" icon={<CubeIcon />}>
        Red icon
      </Label>
      <Label color="red" onClose={() => Function.prototype}>
        Red removable
      </Label>
      <Label color="red" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Red icon removable
      </Label>
      <Label color="red" href="#filled">
        Red link
      </Label>
      <Label color="red" href="#filled" onClose={() => Function.prototype}>
        Red link removable
      </Label>{' '}
      <Label color="red" onClick={() => logColor('red')}>
        Red clickable
      </Label>
      <Label color="red" onClick={() => logColor('red')} onClose={() => Function.prototype}>
        Red clickable removable
      </Label>{' '}
      <Label color="red" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Red label with icon that overflows
      </Label>{' '}
      <Label color="red" isDisabled icon={<CubeIcon />} href="#filled" onClose={() => Function.prototype}>
        Red link removable (disabled)
      </Label>{' '}
      <Label
        color="red"
        isDisabled
        icon={<CubeIcon />}
        onClick={() => logColor('red')}
        onClose={() => Function.prototype}
      >
        Red clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label color="orangered">Orange red</Label>
      <Label color="orangered" icon={<CubeIcon />}>
        Orange red icon
      </Label>
      <Label color="orangered" onClose={() => Function.prototype}>
        Orange red removable
      </Label>
      <Label color="orangered" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Orange red icon removable
      </Label>
      <Label color="orangered" href="#filled">
        Orange red link
      </Label>
      <Label color="orangered" href="#filled" onClose={() => Function.prototype}>
        Orange red link removable
      </Label>
      <Label color="orangered" onClick={() => logColor('orangered')}>
        Orange red clickable
      </Label>
      <Label color="orangered" onClick={() => logColor('orangered')} onClose={() => Function.prototype}>
        Orange red clickable removable
      </Label>
      <Label color="orangered" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Orange red label with icon that overflows
      </Label>
      <br />
      <br />
      <Label color="purple">Purple</Label>
      <Label color="purple" icon={<CubeIcon />}>
        Purple icon
      </Label>
      <Label color="purple" onClose={() => Function.prototype}>
        Purple removable
      </Label>
      <Label color="purple" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Purple icon removable
      </Label>
      <Label color="purple" href="#filled">
        Purple link
      </Label>
      <Label color="purple" href="#filled" onClose={() => Function.prototype}>
        Purple link removable
      </Label>{' '}
      <Label color="purple" onClick={() => logColor('purple')}>
        Purple clickable
      </Label>
      <Label color="purple" onClick={() => logColor('purple')} onClose={() => Function.prototype}>
        Purple clickable removable
      </Label>{' '}
      <Label color="purple" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Purple label with icon that overflows
      </Label>{' '}
      <Label color="purple" isDisabled icon={<CubeIcon />} href="#filled" onClose={() => Function.prototype}>
        Purple link removable (disabled)
      </Label>{' '}
      <Label
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
      <Label color="teal">Teal</Label>
      <Label color="teal" icon={<CubeIcon />}>
        Teal icon
      </Label>
      <Label color="teal" onClose={() => Function.prototype}>
        Teal removable
      </Label>
      <Label color="teal" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Teal icon removable
      </Label>
      <Label color="teal" href="#filled">
        Teal link
      </Label>
      <Label color="teal" href="#filled" onClose={() => Function.prototype}>
        Teal link removable
      </Label>{' '}
      <Label color="teal" onClick={() => logColor('teal')}>
        Teal clickable
      </Label>
      <Label color="teal" onClick={() => logColor('teal')} onClose={() => Function.prototype}>
        Teal clickable removable
      </Label>{' '}
      <Label color="teal" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Teal label with icon that overflows
      </Label>{' '}
      <Label color="teal" isDisabled icon={<CubeIcon />} href="#filled" onClose={() => Function.prototype}>
        Teal link removable (disabled)
      </Label>{' '}
      <Label
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
      <Label color="yellow">Yellow</Label>
      <Label color="yellow" icon={<CubeIcon />}>
        Yellow icon
      </Label>
      <Label color="yellow" onClose={() => Function.prototype}>
        Yellow removable
      </Label>
      <Label color="yellow" icon={<CubeIcon />} onClose={() => Function.prototype}>
        Yellow icon removable
      </Label>
      <Label color="yellow" href="#filled">
        Yellow link
      </Label>
      <Label color="yellow" href="#filled" onClose={() => Function.prototype}>
        Yellow link removable
      </Label>{' '}
      <Label color="yellow" onClick={() => logColor('yellow')}>
        Yellow clickable
      </Label>
      <Label color="yellow" onClick={() => logColor('yellow')} onClose={() => Function.prototype}>
        Yellow clickable removable
      </Label>{' '}
      <Label color="yellow" icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Yellow label with icon that overflows
      </Label>{' '}
      <Label color="yellow" isDisabled icon={<CubeIcon />} href="#filled" onClose={() => Function.prototype}>
        Yellow link removable (disabled)
      </Label>{' '}
      <Label
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
      <div style={{ width: '250px' }}>
        <Label>Label that overflows its parent, but has no textMaxWidth on its own</Label>
      </div>
      <br />
      <strong>Status:</strong>
      <br />
      <br />
      <Label status="success">Success</Label>
      <Label status="success" onClose={() => Function.prototype}>
        Success removable
      </Label>
      <Label status="success" href="#filled">
        Success link
      </Label>
      <Label status="success" href="#filled" onClose={() => Function.prototype}>
        Success link removable
      </Label>
      <Label status="success" onClick={() => logColor('success')}>
        Success clickable
      </Label>
      <Label status="success" onClick={() => logColor('success')} onClose={() => Function.prototype}>
        Success clickable removable
      </Label>
      <Label status="success" onClose={() => Function.prototype} textMaxWidth="16ch">
        Success label with text that overflows
      </Label>
      <br />
      <br />
      <Label status="warning">Warning</Label>
      <Label status="warning" onClose={() => Function.prototype}>
        Warning removable
      </Label>
      <Label status="warning" href="#filled">
        Warning link
      </Label>
      <Label status="warning" href="#filled" onClose={() => Function.prototype}>
        Warning link removable
      </Label>
      <Label status="warning" onClick={() => logColor('warning')}>
        Warning clickable
      </Label>
      <Label status="warning" onClick={() => logColor('warning')} onClose={() => Function.prototype}>
        Warning clickable removable
      </Label>
      <Label status="warning" onClose={() => Function.prototype} textMaxWidth="16ch">
        Warning label with text that overflows
      </Label>
      <br />
      <br />
      <Label status="danger">Danger</Label>
      <Label status="danger" onClose={() => Function.prototype}>
        Danger removable
      </Label>
      <Label status="danger" href="#filled">
        Danger link
      </Label>
      <Label status="danger" href="#filled" onClose={() => Function.prototype}>
        Danger link removable
      </Label>
      <Label status="danger" onClick={() => logColor('danger')}>
        Danger clickable
      </Label>
      <Label status="danger" onClick={() => logColor('danger')} onClose={() => Function.prototype}>
        Danger clickable removable
      </Label>
      <Label status="danger" onClose={() => Function.prototype} textMaxWidth="16ch">
        Danger label with text that overflows
      </Label>
      <br />
      <br />
      <Label status="info">Info</Label>
      <Label status="info" onClose={() => Function.prototype}>
        Info removable
      </Label>
      <Label status="info" href="#filled">
        Info link
      </Label>
      <Label status="info" href="#filled" onClose={() => Function.prototype}>
        Info link removable
      </Label>
      <Label status="info" onClick={() => logColor('info')}>
        Info clickable
      </Label>
      <Label status="info" onClick={() => logColor('info')} onClose={() => Function.prototype}>
        Info clickable removable
      </Label>
      <Label status="info" onClose={() => Function.prototype} textMaxWidth="16ch">
        Info label with text that overflows
      </Label>
      <br />
      <br />
      <Label status="custom">Custom</Label>
      <Label status="custom" onClose={() => Function.prototype}>
        Custom removable
      </Label>
      <Label status="custom" href="#filled">
        Custom link
      </Label>
      <Label status="custom" href="#filled" onClose={() => Function.prototype}>
        Custom link removable
      </Label>
      <Label status="custom" onClick={() => logColor('custom')}>
        Custom clickable
      </Label>
      <Label status="custom" onClick={() => logColor('custom')} onClose={() => Function.prototype}>
        Custom clickable removable
      </Label>
      <Label status="custom" onClose={() => Function.prototype} textMaxWidth="16ch">
        Custom label with text that overflows
      </Label>
    </React.Fragment>
  );
};
