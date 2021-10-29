
type Props = {
  isOpen: boolean;
  title: string;
  Content: React.FC;
  Footer: React.FC;
};

const Drawer: React.FC<Props> = ({ title, isOpen, Content, Footer }) => {
  if (isOpen)
    return (
      <div className="z-10 w-full h-screen fixed left-0 top-0 bg-black bg-opacity-25">
        <div className="w-[30rem] bg-white fixed right-0 h-screen flex flex-col">
          <div className="w-full text-3xl text-center border-b py-4">
            {title}
          </div>

          <div className="overflow-y-scroll flex-initial h-full">
            <Content />
          </div>
          <div className="w-full border-t flex flex-col p-4">
            <Footer />
          </div>
        </div>
      </div>
    );

  return <></>;
};

export default Drawer;
