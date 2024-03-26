import React from 'react';
import { Label } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

export const LabelFilled: React.FunctionComponent = () => {
  const logColor = (color: string) => {
    // eslint-disable-next-line no-console
    console.log(color, 'label clicked');
  };
  return (
    <React.Fragment>
      <Label>Grey</Label> <Label icon={<InfoCircleIcon />}>Grey icon</Label>{' '}
      <Label onClose={() => Function.prototype}>Grey removable</Label>{' '}
      <Label icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Grey icon removable
      </Label>{' '}
      <Label href="#filled">Grey link</Label>{' '}
      <Label href="#filled" onClose={() => Function.prototype}>
        Grey link removable
      </Label>{' '}
      <Label onClick={() => logColor('grey')}>Grey clickable</Label>{' '}
      <Label onClick={() => logColor('grey')} onClose={() => Function.prototype}>
        Grey clickable removable
      </Label>{' '}
      <Label icon={<InfoCircleIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Grey label with icon that overflows
      </Label>{' '}
      <Label isDisabled icon={<InfoCircleIcon />} href="#filled" onClose={() => Function.prototype}>
        Grey link removable (disabled)
      </Label>{' '}
      <Label isDisabled icon={<InfoCircleIcon />} onClick={() => logColor('grey')} onClose={() => Function.prototype}>
        Grey clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label color="blue">Blue</Label>{' '}
      <Label color="blue" icon={<InfoCircleIcon />}>
        Blue icon
      </Label>{' '}
      <Label color="blue" onClose={() => Function.prototype}>
        Blue removable
      </Label>{' '}
      <Label color="blue" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Blue icon removable
      </Label>{' '}
      <Label color="blue" href="#filled">
        Blue link
      </Label>{' '}
      <Label color="blue" href="#filled" onClose={() => Function.prototype}>
        Blue link removable
      </Label>{' '}
      <Label color="blue" onClick={() => logColor('blue')}>
        Blue clickable
      </Label>{' '}
      <Label color="blue" onClick={() => logColor('blue')} onClose={() => Function.prototype}>
        Blue clickable removable
      </Label>{' '}
      <Label color="blue" icon={<InfoCircleIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Blue label with icon that overflows
      </Label>{' '}
      <Label color="blue" isDisabled icon={<InfoCircleIcon />} href="#filled" onClose={() => Function.prototype}>
        Blue link removable (disabled)
      </Label>{' '}
      <Label
        color="blue"
        isDisabled
        icon={<InfoCircleIcon />}
        onClick={() => logColor('blue')}
        onClose={() => Function.prototype}
      >
        Blue clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label color="green">Green</Label>{' '}
      <Label color="green" icon={<InfoCircleIcon />}>
        Green icon
      </Label>{' '}
      <Label color="green" onClose={() => Function.prototype}>
        Green removable
      </Label>{' '}
      <Label color="green" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Green icon removable
      </Label>{' '}
      <Label color="green" href="#filled">
        Green link
      </Label>{' '}
      <Label color="green" href="#filled" onClose={() => Function.prototype}>
        Green link removable
      </Label>{' '}
      <Label color="green" onClick={() => logColor('green')}>
        Green clickable
      </Label>{' '}
      <Label color="green" onClick={() => logColor('green')} onClose={() => Function.prototype}>
        Green clickable removable
      </Label>{' '}
      <Label color="green" icon={<InfoCircleIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Green label with icon that overflows
      </Label>{' '}
      <Label color="green" isDisabled icon={<InfoCircleIcon />} href="#filled" onClose={() => Function.prototype}>
        Green link removable (disabled)
      </Label>{' '}
      <Label
        color="green"
        isDisabled
        icon={<InfoCircleIcon />}
        onClick={() => logColor('green')}
        onClose={() => Function.prototype}
      >
        Green clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label color="orange">Orange</Label>{' '}
      <Label color="orange" icon={<InfoCircleIcon />}>
        Orange icon
      </Label>{' '}
      <Label color="orange" onClose={() => Function.prototype}>
        Orange removable
      </Label>{' '}
      <Label color="orange" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Orange icon removable
      </Label>{' '}
      <Label color="orange" href="#filled">
        Orange link
      </Label>{' '}
      <Label color="orange" href="#filled" onClose={() => Function.prototype}>
        Orange link removable
      </Label>{' '}
      <Label color="orange" onClick={() => logColor('orange')}>
        Orange clickable
      </Label>{' '}
      <Label color="orange" onClick={() => logColor('orange')} onClose={() => Function.prototype}>
        Orange clickable removable
      </Label>{' '}
      <Label color="orange" icon={<InfoCircleIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Orange label with icon that overflows
      </Label>{' '}
      <Label color="orange" isDisabled icon={<InfoCircleIcon />} href="#filled" onClose={() => Function.prototype}>
        Orange link removable (disabled)
      </Label>{' '}
      <Label
        color="orange"
        isDisabled
        icon={<InfoCircleIcon />}
        onClick={() => logColor('orange')}
        onClose={() => Function.prototype}
      >
        Orange clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label color="red">Red</Label>{' '}
      <Label color="red" icon={<InfoCircleIcon />}>
        Red icon
      </Label>{' '}
      <Label color="red" onClose={() => Function.prototype}>
        Red removable
      </Label>{' '}
      <Label color="red" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Red icon removable
      </Label>{' '}
      <Label color="red" href="#filled">
        Red link
      </Label>{' '}
      <Label color="red" href="#filled" onClose={() => Function.prototype}>
        Red link removable
      </Label>{' '}
      <Label color="red" onClick={() => logColor('red')}>
        Red clickable
      </Label>{' '}
      <Label color="red" onClick={() => logColor('red')} onClose={() => Function.prototype}>
        Red clickable removable
      </Label>{' '}
      <Label color="red" icon={<InfoCircleIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Red label with icon that overflows
      </Label>{' '}
      <Label color="red" isDisabled icon={<InfoCircleIcon />} href="#filled" onClose={() => Function.prototype}>
        Red link removable (disabled)
      </Label>{' '}
      <Label
        color="red"
        isDisabled
        icon={<InfoCircleIcon />}
        onClick={() => logColor('red')}
        onClose={() => Function.prototype}
      >
        Red clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label color="purple">Purple</Label>{' '}
      <Label color="purple" icon={<InfoCircleIcon />}>
        Purple icon
      </Label>{' '}
      <Label color="purple" onClose={() => Function.prototype}>
        Purple removable
      </Label>{' '}
      <Label color="purple" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Purple icon removable
      </Label>{' '}
      <Label color="purple" href="#filled">
        Purple link
      </Label>{' '}
      <Label color="purple" href="#filled" onClose={() => Function.prototype}>
        Purple link removable
      </Label>{' '}
      <Label color="purple" onClick={() => logColor('purple')}>
        Purple clickable
      </Label>{' '}
      <Label color="purple" onClick={() => logColor('purple')} onClose={() => Function.prototype}>
        Purple clickable removable
      </Label>{' '}
      <Label color="purple" icon={<InfoCircleIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Purple label with icon that overflows
      </Label>{' '}
      <Label color="purple" isDisabled icon={<InfoCircleIcon />} href="#filled" onClose={() => Function.prototype}>
        Purple link removable (disabled)
      </Label>{' '}
      <Label
        color="purple"
        isDisabled
        icon={<InfoCircleIcon />}
        onClick={() => logColor('purple')}
        onClose={() => Function.prototype}
      >
        Purple clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label color="cyan">Cyan</Label>{' '}
      <Label color="cyan" icon={<InfoCircleIcon />}>
        Cyan icon
      </Label>{' '}
      <Label color="cyan" onClose={() => Function.prototype}>
        Cyan removable
      </Label>{' '}
      <Label color="cyan" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Cyan icon removable
      </Label>{' '}
      <Label color="cyan" href="#filled">
        Cyan link
      </Label>{' '}
      <Label color="cyan" href="#filled" onClose={() => Function.prototype}>
        Cyan link removable
      </Label>{' '}
      <Label color="cyan" onClick={() => logColor('cyan')}>
        Cyan clickable
      </Label>{' '}
      <Label color="cyan" onClick={() => logColor('cyan')} onClose={() => Function.prototype}>
        Cyan clickable removable
      </Label>{' '}
      <Label color="cyan" icon={<InfoCircleIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Cyan label with icon that overflows
      </Label>{' '}
      <Label color="cyan" isDisabled icon={<InfoCircleIcon />} href="#filled" onClose={() => Function.prototype}>
        Cyan link removable (disabled)
      </Label>{' '}
      <Label
        color="cyan"
        isDisabled
        icon={<InfoCircleIcon />}
        onClick={() => logColor('cyan')}
        onClose={() => Function.prototype}
      >
        Cyan clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label color="gold">Gold</Label>{' '}
      <Label color="gold" icon={<InfoCircleIcon />}>
        Gold icon
      </Label>{' '}
      <Label color="gold" onClose={() => Function.prototype}>
        Gold removable
      </Label>{' '}
      <Label color="gold" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Gold icon removable
      </Label>{' '}
      <Label color="gold" href="#filled">
        Gold link
      </Label>{' '}
      <Label color="gold" href="#filled" onClose={() => Function.prototype}>
        Gold link removable
      </Label>{' '}
      <Label color="gold" onClick={() => logColor('gold')}>
        Gold clickable
      </Label>{' '}
      <Label color="gold" onClick={() => logColor('gold')} onClose={() => Function.prototype}>
        Gold clickable removable
      </Label>{' '}
      <Label color="gold" icon={<InfoCircleIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Gold label with icon that overflows
      </Label>{' '}
      <Label color="gold" isDisabled icon={<InfoCircleIcon />} href="#filled" onClose={() => Function.prototype}>
        Gold link removable (disabled)
      </Label>{' '}
      <Label
        color="gold"
        isDisabled
        icon={<InfoCircleIcon />}
        onClick={() => logColor('gold')}
        onClose={() => Function.prototype}
      >
        Gold clickable removable (disabled)
      </Label>
      <br />
      <br />
      <div style={{ width: '250px' }}>
        <Label>Label that overflows its parent, but has no textMaxWidth on its own</Label>
      </div>
    </React.Fragment>
  );
};
