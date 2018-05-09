import React, { PureComponent } from 'react';
import Layout from '@icedesign/layout';
import Logo from './Logo';

export default class Footer extends PureComponent {
  render() {
    return (
      <Layout.Footer
        className="ice-design-layout-footer"
        style={{
          lineHeight: '36px',
        }}
      >
        <div className="ice-design-layout-footer-body">
          <div style={{ filter: 'grayscale(100%)', opacity: 0.3 }}>
            <Logo />
          </div>
          <div className="copyright">
            © 2018 Powered by{' '}
            <a
              href="https://www.zzkun.com"
              target="_blank"
              className="copyright-link"
              rel="noopener noreferrer"
            >
              CodeKun
            </a>
          </div>
        </div>
      </Layout.Footer>
    );
  }
}
