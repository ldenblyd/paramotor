import useModal from "hooks/useModal";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";

type Provider = {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
};

type Providers = {
  google: Provider;
};

const AuthMenu: React.FC = () => {
  const { isShowing, toggle, Modal } = useModal();
  const { data: session, status } = useSession();

  const [providers, setProviders] = useState<Providers>();

  useEffect(() => {
    const loadContent = async () => {
      const providers: Providers = await getProviders();
      setProviders(providers);
    };
    loadContent();
  }, []);

  return (
    <>
      {status === "authenticated" ? (
        <div>
          <Image
            src={session.user.image ? session.user.image : "/icons/user.svg"}
            alt="user"
            width={32}
            height={32}
            onClick={() => signOut()}
            className="rounded-full"
          />
        </div>
      ) : (
        <div onClick={toggle}>Sign In</div>
      )}
      <Modal isShowing={isShowing} hide={toggle}>
        <div className="p-4">
          {providers?.google && (
            <button
              onClick={() => signIn(providers.google.id)}
              className="flex items-center border p-3 rounded-md"
            >
              <Image
                src="/icons/socials/google.svg"
                alt="google"
                width={24}
                height={24}
              />
              <span className="pl-4">Sign in with {providers.google.name}</span>
            </button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default AuthMenu;
