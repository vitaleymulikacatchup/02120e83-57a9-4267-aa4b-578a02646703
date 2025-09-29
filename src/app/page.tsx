"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import WalletFooter from '@/components/sections/layouts/footer/WalletFooter';

const theme: SiteTheme = { styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1759138981883-d970a0d7.jpg"
          logoAlt="MemePulse Logo"
          buttonText="Buy MEME"
          onButtonClick={() => console.log('Navigate to buy page')}
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' },
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Join the MemePulse Revolution"
          subtitle="The fun, community-driven memecoin to kickstart your crypto journey"
          contractAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Address copied to clipboard!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="MemePulse empowers community-driven crypto projects, promoting transparency and growth. Join us as we build the future of memecoins, where everyone is a part of our journey!"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Our tokenomics ensures a fair allocation for the community, investors, and development team."
          tokenData={[
            { value: "50%", description: "For Community Rewards" },
            { value: "30%", description: "For Development" },
            { value: "20%", description: "For Marketing" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <WalletFooter
          logoText="MemePulse"
          walletAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Address copied!"
          copyrightText="© 2023 MemePulse. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}
