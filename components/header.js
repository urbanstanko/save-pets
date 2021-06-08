import Image from "next/image";
import HeaderLink from "./headerLink";
import WalletButton from "../components/walletButton";

// colors: https://coolors.co/e74b75-ee809d-f3a5ba-86624a-4b372c-e0c6ad-808080

// geslo: testtest
// seedphrase: sheriff idea car public zero reveal south warrior airport convince you quick

export default function Header({ children, current_page_name }) {
  return (
    <div className="flex flex-row justify-between w-full">
      <Image
        src="/logo_spletna-rjava-roza-jezik.png"
        alt="Logo of SaveAnimals"
        width={100}
        height={100}
      />

      <div className="flex flex-row items-center justify-center">
        <HeaderLink linkName="" name="Home" selected={current_page_name} />
        <HeaderLink
          linkName="getSavePets"
          name="GetSavePets"
          selected={current_page_name}
        />
        <HeaderLink
          linkName="donations"
          name="Donations"
          selected={current_page_name}
        />
        <HeaderLink
          linkName="howToBuy"
          name="How to buy"
          selected={current_page_name}
        />
        <HeaderLink
          linkName="aboutUs"
          name="About us"
          selected={current_page_name}
        />
        <HeaderLink
          linkName="contactUs"
          name="Contact us"
          selected={current_page_name}
        />

        <div className="pl-4">
          <WalletButton></WalletButton>
        </div>
      </div>
    </div>
  );
}
