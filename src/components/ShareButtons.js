import React from 'react';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { format } from 'util';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query ShareButtons {
    site {
      siteMetadata {
        url
      }
    }
  }
`;

// prettier-ignore
const buttons = [
  {
    href: 'https://www.linkedin.com/shareArticle?mini=true&url=%s',
    icon: FaLinkedin,
    text: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com/sharer.php?u=%s',
    icon: FaFacebookSquare,
    text: 'Facebook',
  },
  {
    href: 'https://twitter.com/share?url=%s&text=Un%20revenu%20climatique%20socialement%20juste',
    icon: FaTwitter,
    text: 'Twitter',
  },
  {
    href: "mailto:??subject=Proposition citoyenne climatique&body=Bonjour,%0D%0A%0D%0AJe t'invite a regarder cette proposition citoyenne : %s",
    icon: FaEnvelope,
    text: 'E-mail',
  },
];

const ShareButtons = () => (
  <StaticQuery
    query={query}
    render={({ site }) => (
      <div className="flex items-center justify-center flex-wrap text-white">
        {buttons
          .map(share => ({
            ...share,
            href: format(share.href, encodeURIComponent(site.siteMetadata.url)),
          }))
          .map(share => (
            <a
              href={share.href}
              target="_blank"
              rel="noopener noreferrer"
              key={share.href}
              className="flex items-center text-sand-200 mx-4 my-2 sm:my-4 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
            >
              <share.icon
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginRight: '0.3em',
                  position: 'relative',
                  top: '-0.1em',
                }}
              />
              <span>{share.text}</span>
            </a>
          ))}
      </div>
    )}
  />
);

export default ShareButtons;
