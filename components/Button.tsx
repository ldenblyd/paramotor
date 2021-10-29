import Link from "next/link";

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
};

const SimpleButton: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-700 w-full text-white font-bold py-2 px-4 mx-1 rounded cursor-pointer"
    >
      {label}
    </button>
  );
};

const Button: React.FC<Props> = ({ label, href, onClick }) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <a>
          <SimpleButton label={label} />
        </a>
      </Link>
    );
  }
  return <SimpleButton label={label} onClick={onClick} />;
};

export default Button;
