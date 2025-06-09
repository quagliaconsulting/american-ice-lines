import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'American Apex Search Fund | Strategic Investment Partners',
  description: 'Consolidating fragmented markets through strategic partnerships. We invest in proven small businesses, partnering with founders to realize growth through market consolidation and operational synergies.',
};

export default function FundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}