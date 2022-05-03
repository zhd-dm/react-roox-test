import {FC} from 'react';
import './Loader.scss';

interface ILoader {
    // children?: React.ReactNode;
    // onClick: () => void;
    // title: string;
    // className: string;
}

const Loader: FC<ILoader> = ({
    // onClick,
    // title,
    // className
}) => {
    return (
        <div className="loader-wrapper">
            
        </div>
    );
  }
  
  export default Loader;