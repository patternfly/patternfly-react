import React from 'react';
import { Label } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

export const LabelOutline: React.FunctionComponent = () => {
  const logColor = (color: string) => {
    // eslint-disable-next-line no-console
    console.log(color, 'label clicked');
  };
  return (
    <React.Fragment>
      <Label variant="outline">Grey</Label>{' '}
      <Label variant="outline" icon={<InfoCircleIcon />}>
        Grey icon
      </Label>{' '}
      <Label variant="outline" onClose={() => Function.prototype}>
        Grey removable
      </Label>{' '}
      <Label variant="outline" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Grey icon removable
      </Label>{' '}
      <Label variant="outline" href="#outline">
        Grey link
      </Label>{' '}
      <Label variant="outline" href="#outline" onClose={() => Function.prototype}>
        Grey link removable
      </Label>{' '}
      <Label variant="outline" onClick={() => logColor('grey')}>
        Grey clickable
      </Label>{' '}
      <Label variant="outline" onClick={() => logColor('grey')} onClose={() => Function.prototype}>
        Grey clickable removable
      </Label>{' '}
      <Label variant="outline" icon={<InfoCircleIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Grey label with icon that overflows
      </Label>{' '}
      <Label variant="outline" isDisabled icon={<InfoCircleIcon />} href="#filled" onClose={() => Function.prototype}>
        Grey link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
        isDisabled
        icon={<InfoCircleIcon />}
        onClick={() => logColor('grey')}
        onClose={() => Function.prototype}
      >
        Grey clickable removable (disabled)
      </Label>
      <br />
      <br />
      <Label variant="outline" color="blue">
        Blue
      </Label>{' '}
      <Label variant="outline" color="blue" icon={<InfoCircleIcon />}>
        Blue icon
      </Label>{' '}
      <Label variant="outline" color="blue" onClose={() => Function.prototype}>
        Blue removable
      </Label>{' '}
      <Label variant="outline" color="blue" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Blue icon removable
      </Label>{' '}
      <Label variant="outline" color="blue" href="#outline">
        Blue link
      </Label>{' '}
      <Label variant="outline" color="blue" href="#outline" onClose={() => Function.prototype}>
        Blue link removable
      </Label>{' '}
      <Label variant="outline" color="blue" onClick={() => logColor('blue')}>
        Blue clickable
      </Label>{' '}
      <Label variant="outline" color="blue" onClick={() => logColor('blue')} onClose={() => Function.prototype}>
        Blue clickable removable
      </Label>{' '}
      <Label
        variant="outline"
        color="blue"
        icon={<InfoCircleIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Blue label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="blue"
        isDisabled
        icon={<InfoCircleIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Blue link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
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
      <Label variant="outline" color="green">
        Green
      </Label>{' '}
      <Label variant="outline" color="green" icon={<InfoCircleIcon />}>
        Green icon
      </Label>{' '}
      <Label variant="outline" color="green" onClose={() => Function.prototype}>
        Green removable
      </Label>{' '}
      <Label variant="outline" color="green" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Green icon removable
      </Label>{' '}
      <Label variant="outline" color="green" href="#outline">
        Green link
      </Label>{' '}
      <Label variant="outline" color="green" href="#outline" onClose={() => Function.prototype}>
        Green link removable
      </Label>{' '}
      <Label variant="outline" color="green" onClick={() => logColor('green')}>
        Green clickable
      </Label>{' '}
      <Label variant="outline" color="green" onClick={() => logColor('green')} onClose={() => Function.prototype}>
        Green clickable removable
      </Label>{' '}
      <Label
        variant="outline"
        color="green"
        icon={<InfoCircleIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Green label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="green"
        isDisabled
        icon={<InfoCircleIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Green link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
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
      <Label variant="outline" color="orange">
        Orange
      </Label>{' '}
      <Label variant="outline" color="orange" icon={<InfoCircleIcon />}>
        Orange icon
      </Label>{' '}
      <Label variant="outline" color="orange" onClose={() => Function.prototype}>
        Orange removable
      </Label>{' '}
      <Label variant="outline" color="orange" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Orange icon removable
      </Label>{' '}
      <Label variant="outline" color="orange" href="#outline">
        Orange link
      </Label>{' '}
      <Label variant="outline" color="orange" href="#outline" onClose={() => Function.prototype}>
        Orange link removable
      </Label>{' '}
      <Label variant="outline" color="orange" onClick={() => logColor('orange')}>
        Orange clickable
      </Label>{' '}
      <Label variant="outline" color="orange" onClick={() => logColor('orange')} onClose={() => Function.prototype}>
        Orange clickable removable
      </Label>{' '}
      <Label
        variant="outline"
        color="orange"
        icon={<InfoCircleIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Orange label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="orange"
        isDisabled
        icon={<InfoCircleIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Orange link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
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
      <Label variant="outline" color="red">
        Red
      </Label>{' '}
      <Label variant="outline" color="red" icon={<InfoCircleIcon />}>
        Red icon
      </Label>{' '}
      <Label variant="outline" color="red" onClose={() => Function.prototype}>
        Red removable
      </Label>{' '}
      <Label variant="outline" color="red" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Red icon removable
      </Label>{' '}
      <Label variant="outline" color="red" href="#outline">
        Red link
      </Label>{' '}
      <Label variant="outline" color="red" href="#outline" onClose={() => Function.prototype}>
        Red link removable
      </Label>{' '}
      <Label variant="outline" color="red" onClick={() => logColor('red')}>
        Red clickable
      </Label>{' '}
      <Label variant="outline" color="red" onClick={() => logColor('red')} onClose={() => Function.prototype}>
        Red clickable removable
      </Label>{' '}
      <Label
        variant="outline"
        color="red"
        icon={<InfoCircleIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Red label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="red"
        isDisabled
        icon={<InfoCircleIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Red link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
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
      <Label variant="outline" color="purple">
        Purple
      </Label>{' '}
      <Label variant="outline" color="purple" icon={<InfoCircleIcon />}>
        Purple icon
      </Label>{' '}
      <Label variant="outline" color="purple" onClose={() => Function.prototype}>
        Purple removable
      </Label>{' '}
      <Label variant="outline" color="purple" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Purple icon removable
      </Label>{' '}
      <Label variant="outline" color="purple" href="#outline">
        Purple link
      </Label>{' '}
      <Label variant="outline" color="purple" href="#outline" onClose={() => Function.prototype}>
        Purple link removable
      </Label>{' '}
      <Label variant="outline" color="purple" onClick={() => logColor('purple')}>
        Purple clickable
      </Label>{' '}
      <Label variant="outline" color="purple" onClick={() => logColor('purple')} onClose={() => Function.prototype}>
        Purple clickable removable
      </Label>{' '}
      <Label
        variant="outline"
        color="purple"
        icon={<InfoCircleIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Purple label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="purple"
        isDisabled
        icon={<InfoCircleIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Purple link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
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
      <Label variant="outline" color="cyan">
        Cyan
      </Label>{' '}
      <Label variant="outline" color="cyan" icon={<InfoCircleIcon />}>
        Cyan icon
      </Label>{' '}
      <Label variant="outline" color="cyan" onClose={() => Function.prototype}>
        Cyan removable
      </Label>{' '}
      <Label variant="outline" color="cyan" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Cyan icon removable
      </Label>{' '}
      <Label variant="outline" color="cyan" href="#outline">
        Cyan link
      </Label>{' '}
      <Label variant="outline" color="cyan" href="#outline" onClose={() => Function.prototype}>
        Cyan link removable
      </Label>{' '}
      <Label variant="outline" color="cyan" onClick={() => logColor('cyan')}>
        Cyan clickable
      </Label>{' '}
      <Label variant="outline" color="cyan" onClick={() => logColor('cyan')} onClose={() => Function.prototype}>
        Cyan clickable removable
      </Label>{' '}
      <Label
        variant="outline"
        color="cyan"
        icon={<InfoCircleIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Cyan label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="cyan"
        isDisabled
        icon={<InfoCircleIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Cyan link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
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
      <Label variant="outline" color="gold">
        Gold
      </Label>{' '}
      <Label variant="outline" color="gold" icon={<InfoCircleIcon />}>
        Gold icon
      </Label>{' '}
      <Label variant="outline" color="gold" onClose={() => Function.prototype}>
        Gold removable
      </Label>{' '}
      <Label variant="outline" color="gold" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Gold icon removable
      </Label>{' '}
      <Label variant="outline" color="gold" href="#outline">
        Gold link
      </Label>{' '}
      <Label variant="outline" color="gold" href="#outline" onClose={() => Function.prototype}>
        Gold link removable
      </Label>{' '}
      <Label variant="outline" color="gold" onClick={() => logColor('gold')}>
        Gold clickable
      </Label>{' '}
      <Label variant="outline" color="gold" onClick={() => logColor('gold')} onClose={() => Function.prototype}>
        Gold clickable removable
      </Label>{' '}
      <Label
        variant="outline"
        color="gold"
        icon={<InfoCircleIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Gold label with icon that overflows
      </Label>{' '}
      <Label
        variant="outline"
        color="gold"
        isDisabled
        icon={<InfoCircleIcon />}
        href="#filled"
        onClose={() => Function.prototype}
      >
        Gold link removable (disabled)
      </Label>{' '}
      <Label
        variant="outline"
        color="gold"
        isDisabled
        icon={<InfoCircleIcon />}
        onClick={() => logColor('gold')}
        onClose={() => Function.prototype}
      >
        Gold clickable removable (disabled)
      </Label>
    </React.Fragment>
  );
};
