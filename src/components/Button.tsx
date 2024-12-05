interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  }

  export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
    const baseStyles = 'px-4 py-2 rounded text-white transition';
    const variantStyles =
      variant === 'primary' ? 'bg-primary hover:bg-secondary' : 'bg-secondary hover:bg-primary';

    return (
      <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
        {label}
      </button>
    );
  }



//   usage:
//   <Button label="Click Me" onClick={() => alert('Button Clicked!')} variant="primary" />