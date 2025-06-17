import { VariantProps } from "tailwind-variants";
import { EmailButton } from "./button-email";
import { social, SocialItems } from "./hero/social-items";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

type SocialProps = Pick<VariantProps<typeof social>, "size">;

export function Social({ size }: SocialProps) {
  return (
    <div
      className={`flex justify-center space-x-2.5 ${size === "footer" && ""}`}
    >
      <SocialItems
        href="https://www.linkedin.com/in/leandro-farias-dev/"
        icon={FaLinkedinIn}
        color="linkedin"
        size={size}
      />

      <EmailButton size={size} />

      <SocialItems
        href="https://github.com/Leandro-MFarias"
        icon={FiGithub}
        color="github"
        size={size}
      />
    </div>
  );
}
