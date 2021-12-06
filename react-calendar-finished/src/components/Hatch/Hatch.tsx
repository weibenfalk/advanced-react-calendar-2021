import React from 'react';
// Types
import { HatchType } from '../../helpers';
// Styles
import { Wrapper } from './Hatch.styles';

type Props = {
  hatch: HatchType;
  handleClick: (nr: number) => void;
  enabledCallback: (nr: number) => boolean;
};

const Hatch: React.FC<Props> = ({ hatch: { nr, text, img, open }, handleClick, enabledCallback }) => (
  <Wrapper open={open} background={img} enabled={enabledCallback(nr)} onClick={() => handleClick(nr)}>
    {console.log('re-render')}
    <div className='front'>
      <p>{nr}</p>
    </div>
    <div className='back'>
      <p>{text}</p>
    </div>
  </Wrapper>
);

export default React.memo(Hatch);
