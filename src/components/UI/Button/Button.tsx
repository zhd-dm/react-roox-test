import {FC} from 'react';
import './Button.scss';

interface IButton {
    // children?: React.ReactNode;
    onClick: () => void;
    title: string;
    className: string;
}

const Button: FC<IButton> = ({
    onClick,
    title,
    className
}) => {
    return (
        <button 
            className={'button-wrapper ' + className}
            onClick={onClick}
        >
            {title}
        </button>
    );
  }
  
  export default Button;