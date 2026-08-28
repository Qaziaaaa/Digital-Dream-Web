import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/site-footer";
import type { Viewport } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for might have been moved or no longer exists.",
};

export const viewport: Viewport = {};

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="main-werapper">
        <section className="section-content-banner">
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-main-wrapper">
              <div className="inner-container _404">
                <h1 className="main-heading big">404</h1>
                <p className="text-regular">
                  The page you&rsquo;re looking for might have been moved or no longer exists.
                  Let&rsquo;s get you back on track.
                </p>
                <div className="inner-container is-center">
                  <Link href="/" className="button-primary w-button">
                    Back To Home Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}