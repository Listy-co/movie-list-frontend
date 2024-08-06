import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1em', background: '#f1f1f1', position: 'fixed', width: '100%', bottom: 0 }}>
      <p>Created by Jimmie & Sumaya</p>
      <p>
        Follow us at{' '}
        <a
          href="https://generalassemb.ly/students?utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:REM:BR:GeneralAssembly&gad_source=1&gclid=Cj0KCQjwtZK1BhDuARIsAAy2VztSfOMmSyeSTu-jGWMOLX-XtIK8pIo35JBnH04el5814rH9mBbxs_8aAl16EALw_wcB&gclsrc=aw.ds"
          target="_blank"
          rel="noopener noreferrer"
        >
          @GeneralAssemblyClass
        </a>
      </p>
    </footer>
  );
};

export default Footer;

