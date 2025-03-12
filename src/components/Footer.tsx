import React from "react";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="px-4 py-6 text-center">
      <nav className="flex gap-6 justify-center mb-6">
        <a
          href="#"
          className="text-2xl text-black hover:text-cyan-600 transition-colors"
          aria-label="Twitter"
        >
          <IconBrandTwitter />
        </a>
        <a
          href="#"
          className="text-2xl text-black hover:text-cyan-600 transition-colors"
          aria-label="Instagram"
        >
          <IconBrandInstagram />
        </a>
        <a
          href="#"
          className="text-2xl text-black hover:text-cyan-600 transition-colors"
          aria-label="Facebook"
        >
          <IconBrandFacebook />
        </a>
      </nav>
      <nav className="flex gap-4 justify-center mb-4 max-sm:flex-col max-sm:gap-2">
        <a
          href="#"
          className="text-sm text-black no-underline hover:text-cyan-600 transition-colors"
        >
          Privacy Notice
        </a>
        <a
          href="#"
          className="text-sm text-black no-underline hover:text-cyan-600 transition-colors"
        >
          Terms of Use
        </a>
        <a
          href="#"
          className="text-sm text-black no-underline hover:text-cyan-600 transition-colors"
        >
          Cookie Preferences
        </a>
      </nav>
      <p className="text-sm text-stone-500">
        ©2025 by Intellectual Reserve, Inc. All Rights Reserved.
      </p>
    </footer>
  );
}
