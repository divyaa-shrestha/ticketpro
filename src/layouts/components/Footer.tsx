import { Logo } from "@/shared/components/Logo"
import { Container } from "@/shared/components/container"
import { footerItems, socialLinks } from "@/shared/constants/footer-items"
import { useCategories } from "@/shared/hooks/useCategories"
import { slugify } from "@/shared/utils/slugify"
import React from "react"

const FooterTitle = ({ title }: { title: string }) => (
  <h3 className="text-lg font-medium text-white mb-4">{title}</h3>
)

const FooterListItem = ({ title, href }: { title: string; href: string }) => (
  <a
    href={href}
    className="text-gray-200 hover:text-primary cursor-pointer transition-smooth"
  >
    {title}
  </a>
)

const Footer: React.FC = () => {
  const { categories } = useCategories()

  return (
    <footer className="sticky z-0 bottom-0 left-0 w-full pt-8 bg-accent flex justify-center items-center">
      <Container className="relative mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <Logo className="h-20" />
            <p className="text-gray-100 mb-6 mt-2">
              Your trusted source for event tickets worldwide
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  href="#"
                  className="size-12 flex items-center justify-center rounded-full bg-primary hover:bg-primary/70 cursor-pointer transition-smooth"
                >
                  <i className={`ri-${item.icon}-fill text-xl text-white`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <FooterTitle title="Categories" />
            <ul className="space-y-3">
              {categories.map((category) => (
                <li>
                  <FooterListItem
                    key={category?.id}
                    href="/"
                    title={category?.name}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle title="Help & Support" />
            <ul className="space-y-3">
              {footerItems.map((item) => (
                <li>
                  <FooterListItem
                    key={slugify(item.title)}
                    href={item.href}
                    title={item.title}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle title="Download Our App" />
            <p className="text-gray-100 mb-4">
              Get the best experience on your phone
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center space-x-3 bg-white/20 px-4 py-3 rounded-lg hover:bg-white/40 cursor-pointer transition-smooth"
              >
                <i className="ri-apple-fill text-2xl"></i>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-medium">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 bg-white/20 px-4 py-3 rounded-lg hover:bg-white/40 cursor-pointer transition-smooth"
              >
                <i className="ri-google-play-fill text-2xl"></i>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-t-gray-300 mt-12 py-8 flex items-center justify-between">
          <p className="text-gray-50">© 2025 TicketPro. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
