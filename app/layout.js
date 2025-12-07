import "./globals.css";

export const metadata = {
  title: "SmartHealth by Dr. Aicha – Privat allmennlege i Oslo",
  description:
    "Kvinnehelse • allergi • hormoner • allmennmedisin. Moderne privatklinikk i Oslo med personlig og faglig trygg oppfølging.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <head>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SL1SD6TL1Q"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SL1SD6TL1Q');
            `,
          }}
        />

        {/* Meta Pixel (Facebook) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2038985549549389');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
