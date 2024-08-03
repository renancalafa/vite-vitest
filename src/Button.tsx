
interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
  }

const Button: React.FC<ButtonProps> = ({text, onClick, disabled = false}) => {
    
    return ( 
        <div>
            <button disabled={disabled} onClick={onClick}>{text}</button>
        </div>
     );
}
 
export default Button;