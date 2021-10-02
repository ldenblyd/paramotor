import Image from "next/image";
import Link from "next/link";


type SocialMedias = {
  label: string;
  link: string;
  icon: string;
};

const medias: SocialMedias[] = [
  {
    label: "instagram",
    link: "https://www.instagram.com/youfly.io",
    icon: "/icons/socials/instagram.svg",
  },
  {
    label: "reddit",
    link: "https://www.reddit.com/r/YouFly_io",
    icon: "/icons/socials/reddit.svg",
  },
  {
    label: "discord",
    link: "https://discord.gg/u4mhd45Q",
    icon: "/icons/socials/discord.svg",
  },
  {
    label: "twitter",
    link: "https://twitter.com/youfly_io",
    icon: "/icons/socials/twitter.svg",
  },
  {
    label: "youtube",
    link: "https://www.youtube.com/channel/UCnxpG0F1RvfcGuY5_Zs3YBg",
    icon: "/icons/socials/youtube.svg",
  },
  {
    label: "facebook",
    link: "https://www.facebook.com/youfly.io",
    icon: "/icons/socials/facebook.svg",
  },
];

const LangSelector: React.FC = () => {

  return (
    <div className="flex">
      {medias.map(({ icon, label, link }) => (
        <Link key={label} href={link} passHref>
          <a
            className="m-1 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={icon} alt={label} width={32} height={32} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default LangSelector;
